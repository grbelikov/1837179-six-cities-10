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

import {BrowserRouter, Routes, Route} from 'react-router-dom';


type MainPageProps = {
  suggestionsAmount: number;
}

function App({suggestionsAmount}: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main suggestionsAmount={suggestionsAmount} />} />
        <Route path={AppRoute.Login} element={<Login />} />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Room} element={<Room />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path={AppRoute.FavoritesEmpty} element={<FavoritesEmptyPage />} />
        <Route path={AppRoute.MainPageEmpty} element={<MainPageEmpty />} />
        <Route path={AppRoute.RoomNoAuth} element={<RoomNoAuth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
