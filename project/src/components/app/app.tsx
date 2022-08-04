import PageNotFound from '../../pages/error-404/page-not-found';
import FavoritesPage from '../../pages/favorites/favorites';
import FavoritesEmptyPage from '../../pages/favorites-empty/favorites-empty';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import MainPageEmpty from '../../pages/main-page-empty/main-page-empty';
import Room from '../../pages/room/room';
import RoomNoAuth from '../../pages/room-no-auth/room-no-auth';
import PrivateRoute from '../../pages/private-rout/private-rout';
import {AppRoute, AuthorizationStatus} from '../../const';
import {OfferType} from '../../types/offer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {City, Points} from '../../types/city';


type AppProps = {
  suggestionsAmount: number;
  offers: OfferType[];
  points: Points;
  cityPoints: City;
}

function App({suggestionsAmount, offers, points, cityPoints}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={
          <Main
            offers={offers}
            suggestionsAmount={suggestionsAmount}
            points={points}
            cityPoints={cityPoints}
          />
        }
        />
        <Route path={AppRoute.Login} element={<Login />} />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Room} element={<Room offers={offers}/>} />
        <Route path="*" element={<PageNotFound />} />

        <Route path={AppRoute.FavoritesEmpty} element={<FavoritesEmptyPage />} />
        <Route path={AppRoute.MainPageEmpty} element={<MainPageEmpty />} />
        <Route path={AppRoute.RoomNoAuth} element={<RoomNoAuth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
