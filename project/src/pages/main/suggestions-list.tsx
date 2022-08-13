import {offers} from '../../mocks/offers';
import Suggestion from './suggestion';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

function getActiveCity(state: RootState) {
  return state.city;
}

export function SuggestionsList() {
  const activeCity = useSelector(getActiveCity);
  // const offersList = useSelector(getOffersList);

  const activeSuggestions = offers.filter((offer) => offer.city.name === activeCity);

  // Почему если в ретерн вернуть переменную suggestionsList, то будет ошибка?
  // const suggestionsList = activeSuggestions.map((suggestion) =>
  //   <Suggestion key={suggestion.id} activeSuggestion={suggestion} />
  // );

  return (
    <>
      {activeSuggestions.map((suggestion) =>
        <Suggestion key={suggestion.id} activeSuggestion={suggestion} />
      )}
    </>
  );
}
