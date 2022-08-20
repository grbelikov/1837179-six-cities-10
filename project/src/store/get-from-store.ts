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

export function showLoader(state: RootState) {
  return state.offersList.length === 0;
}

// подумать что б возвращать не массив оферов а айди
export function filterOffers(state: RootState) {
  const activeCity = getActiveCity(state);
  return state.offersList.filter((offer) => offer.city.name === activeCity);
}
