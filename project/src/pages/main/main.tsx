import {Link} from 'react-router-dom';
import Map from '../../components/map/map';
import {Point} from '../../types/city';
import {useState} from 'react';
import {LocationList} from './locations-list';
import {SuggestionsList} from './suggestions-list';
import {useSelector} from 'react-redux';
import {getSuggestionsAmount, getActiveCity} from '../../store/get-from-store';
import {getSuggestionsNotMock} from '../../store/get-from-store';
import Preloader from '../../components/preloader/preloader';


function Main(): JSX.Element {
  const [selectedPoint] = useState<Point | undefined>(
    undefined
  );
  const amountSuggestions = useSelector(getSuggestionsAmount);
  const activeCity = useSelector(getActiveCity);

  const offersStoreNotMock = useSelector(getSuggestionsNotMock);


  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to='/' className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{amountSuggestions} places to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>

                <span className="places__sorting-type" tabIndex={0}></span>

                <span className="places__sorting-type" >

                    Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" >Popular</li>
                  <li className="places__option" >Price: low to high</li>
                  <li className="places__option" >Price: high to low</li>
                  <li className="places__option" >Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {offersStoreNotMock.length === 0 ? <SuggestionsList /> : <Preloader />}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
