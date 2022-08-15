import {OfferType} from '../../types/offer';
import OneCardSuggestion from '../../components/one-card-suggestion/one-card-suggestion';

type ListSuggestionsProps = {
  offers: OfferType[];
};

function ListSuggestions({offers}: ListSuggestionsProps): JSX.Element {
  return (
    <>
      <OneCardSuggestion offers={offers[0]}/>
      <OneCardSuggestion offers={offers[1]}/>
      <OneCardSuggestion offers={offers[2]}/>
      <OneCardSuggestion offers={offers[3]}/>
      <OneCardSuggestion offers={offers[4]}/>
    </>
  );
}

export default ListSuggestions;
