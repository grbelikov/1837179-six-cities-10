import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../types/offer';
import {City} from './cities-setting';

export const changeCity = createAction <City>('city/changeCity');
export const fillRentList = createAction <OfferType[]>('city/fillRentList');
