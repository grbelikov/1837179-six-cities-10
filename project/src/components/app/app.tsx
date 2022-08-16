import PageNotFound from '../../pages/error-404/page-not-found';
import FavoritesPage from '../../pages/favorites/favorites';
import FavoritesEmptyPage from '../../pages/favorites-empty/favorites-empty';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import MainPageEmpty from '../../pages/main-page-empty/main-page-empty';
import Room from '../../pages/room/room';
import RoomNoAuth from '../../pages/room-no-auth/room-no-auth';
import PrivateRoute from '../../pages/private-rout/private-rout';
import {APPRoute, AuthorizationStatus} from '../../const';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={APPRoute.Root} element={
          <Main />
        }
        />
        <Route path={APPRoute.Login} element={<Login />} />

        <Route
          path={APPRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />

        <Route path={APPRoute.Room} element={<Room />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path={APPRoute.FavoritesEmpty} element={<FavoritesEmptyPage />} />
        <Route path={APPRoute.MainPageEmpty} element={<MainPageEmpty />} />
        <Route path={APPRoute.RoomNoAuth} element={<RoomNoAuth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
