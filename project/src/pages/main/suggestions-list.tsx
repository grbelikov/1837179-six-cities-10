import {offers} from '../../mocks/offers';
import Suggestion from './suggestion';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {fillRentList, countSuggestions} from '../../store/action';
import {getActiveCity, getSuggestions} from '../../store/get-from-store';

// import {getSuggestionsNotMock} from '../../store/get-from-store';

export function SuggestionsList() {
  const activeCity = useSelector(getActiveCity);
  const dispatch = useDispatch();

  dispatch(fillRentList(offers));

  const offersStoreMock = useSelector(getSuggestions);
  // const offersStoreNotMock = useSelector(getSuggestionsNotMock);

  const activeSuggestions = offersStoreMock.filter((offer) => offer.city.name === activeCity);

  dispatch(countSuggestions(activeSuggestions.length));

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
