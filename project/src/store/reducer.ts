import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillRentList, countSuggestions} from './action';
import {City} from './cities-setting';
import {OfferType} from '../types/offer';

const initialState = {
  city: 'Paris' as City,
  offersList: [] as OfferType[],
  amountSuggestions: 0 as number,
} as const;

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillRentList, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(countSuggestions, (state, action) => {
      state.amountSuggestions = action.payload;
    });
});

export {reducer};
