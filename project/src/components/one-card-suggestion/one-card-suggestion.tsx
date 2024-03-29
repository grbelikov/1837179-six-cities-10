/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {OfferType} from '../../types/offer';
import {useState} from 'react';
import {Link} from 'react-router-dom';

type OneCardSuggestionProps = {
  offers: OfferType;
};

function OneCardSuggestion(props: OneCardSuggestionProps): JSX.Element {
  const {offers} = props;
  const {id, images, price, description} = offers;

  const [activeCardId, setActiveCardId] = useState(0);

  const mouseOverHandler = () => {
    setActiveCardId(id);
  };

  return (
    <article
      onMouseOver={mouseOverHandler}
      className="cities__card place-card"
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to='/offer/:id' className="header__logo-link header__logo-link--active">
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            {/* <span style="width: 80%"></span> */}
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">{description}</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default OneCardSuggestion;
