import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillRentList} from './action';
import {City} from './cities-setting';
import {OfferType} from '../types/offer';

const initialState = {
  city: 'Paris' as City,
  offersList: [] as OfferType[],
} as const;

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillRentList, (state, action) => {
      state.offersList = action.payload;
    });
});

export {reducer};
