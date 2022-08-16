import {RootState} from '../store';

export function getSuggestionsAmount(state: RootState) {
  return state.amountSuggestions;
}

export function getActiveCity(state: RootState) {
  return state.city;
}

export function getSuggestions(state: RootState) {
  return state.offersListMock;
}

export function getSuggestionsNotMock(state: RootState) {
  return state.offersList;
}
