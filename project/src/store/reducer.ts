import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillRentList, countSuggestions, loadSuggestions, requareAuthorization} from './action';
import {City} from './cities-setting';
import {OfferType} from '../types/offer';
import {AuthorizationStatus} from '../const';

const initialState = {
  city: 'Paris' as City,
  offersListMock: [] as OfferType[],
  offersList: [] as OfferType[],
  amountSuggestions: 0 as number,
  authStatus: 'UNKNOWN' as AuthorizationStatus,
  error: '' as string | null,
} as const;

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillRentList, (state, action) => {
      state.offersListMock = action.payload;
    })
    .addCase(countSuggestions, (state, action) => {
      state.amountSuggestions = action.payload;
    })
    .addCase(loadSuggestions, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(requareAuthorization, (state, action) => {
      state.authStatus = action.payload;
    });
});

export {reducer};
