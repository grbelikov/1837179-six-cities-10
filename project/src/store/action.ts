import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../const';
import {OfferType} from '../types/offer';
import {City} from './cities-setting';


export const changeCity = createAction <City>('city/changeCity');
export const fillRentList = createAction <OfferType[]>('city/fillRentList');
export const countSuggestions = createAction <number>('main/countSuggestions');
export const loadSuggestions = createAction <OfferType[]>('data/loadSuggestions');
export const requareAuthorization = createAction <AuthorizationStatus>('user/requareAuthorization');
export const setError = createAction <string | null>('city/setError');
