// import {offers} from '../../mocks/offers';
import Suggestion from './suggestion';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {countSuggestions} from '../../store/action';
import {getActiveCity} from '../../store/get-from-store';

// import {getSuggestionsNotMock} from '../../store/get-from-store';


export function SuggestionsList(props: any) {
  const {suggestions} = props;
  console.log('12121212', suggestions);


  const activeCity = useSelector(getActiveCity);
  const dispatch = useDispatch();

  // dispatch(fillRentList(offers));

  // const offersStoreMock = useSelector(getSuggestions);
  // const offersStoreNotMock = useSelector(getSuggestionsNotMock);

  const activeSuggestions = suggestions.filter((offer) => offer.city.name === activeCity);

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
