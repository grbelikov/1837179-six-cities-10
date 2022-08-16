import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {TIMEOUT_SHOW_ERROR, APIRoute, AuthorizationStatus, APPRoute} from '../const';
import {loadSuggestions, requareAuthorization,
  setError, setDataLoaderStatus} from './action';
import {OfferType} from '../types/offer';
import {dropToken, saveToken} from '../services/token';
import {UserData} from '../types/user-data';
import {AuthData} from '../types/auth-data';
import {store} from './';

export const clearErrorAction = createAsyncThunk(
  'city/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchSuggestionsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchSuggestions',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>(APIRoute.hotels);
    setDataLoaderStatus(true);
    dispatch(loadSuggestions(data));
    setDataLoaderStatus(false);
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APPRoute.Login);
      dispatch(requareAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requareAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APPRoute.Login, {email, password});
    saveToken(token);
    dispatch(requareAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'user/login',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APPRoute.RoomNoAuth);
    dropToken();
    dispatch(requareAuthorization(AuthorizationStatus.NoAuth));
  },
);
