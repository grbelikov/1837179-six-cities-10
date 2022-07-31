import {OfferType} from '../../types/offer';
import OneCardSuggestion from '../../components/one-card-suggestion';

type ListSuggestionsProps = {
  offers: OfferType;
};

function ListSuggestions({offers}: ListSuggestionsProps): JSX.Element {
  return (
    <>
      <OneCardSuggestion offers={offers}/>
      <OneCardSuggestion offers={offers}/>
      <OneCardSuggestion offers={offers}/>
      <OneCardSuggestion offers={offers}/>
      <OneCardSuggestion offers={offers}/>
    </>
  );
}

export default ListSuggestions;
