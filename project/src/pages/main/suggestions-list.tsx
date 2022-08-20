import Suggestion from './suggestion';
import {useSelector} from 'react-redux';
import {getActiveCity, getSuggestions} from '../../store/get-from-store';

// import {getSuggestionsNotMock} from '../../store/get-from-store';

export function SuggestionsList() {
  const activeCity = useSelector(getActiveCity);

  const offersStoreMock = useSelector(getSuggestions);
  // const offersStoreNotMock = useSelector(getSuggestionsNotMock);

  const activeSuggestions = offersStoreMock.filter((offer) => offer.city.name === activeCity);

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
