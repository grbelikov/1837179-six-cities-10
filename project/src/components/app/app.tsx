import PageNotFound from '../../pages/error-404/page-not-found';
import FavoritesPage from '../../pages/favorites/favorites';
import FavoritesEmptyPage from '../../pages/favorites-empty/favorites-empty';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import MainPageEmpty from '../../pages/main-page-empty/main-page-empty';
import Room from '../../pages/room/room';
import RoomNoAuth from '../../pages/room-no-auth/room-no-auth';
import PrivateRoute from '../../pages/private-rout/private-rout';
import {APIRoute, AuthorizationStatus} from '../../const';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={APIRoute.Root} element={
          <Main />
        }
        />
        <Route path={APIRoute.Login} element={<Login />} />

        <Route
          path={APIRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />

        <Route path={APIRoute.Room} element={<Room />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path={APIRoute.FavoritesEmpty} element={<FavoritesEmptyPage />} />
        <Route path={APIRoute.MainPageEmpty} element={<MainPageEmpty />} />
        <Route path={APIRoute.RoomNoAuth} element={<RoomNoAuth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
