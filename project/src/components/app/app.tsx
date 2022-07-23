import PageNotFound from '../../pages/error-404/page-not-found';
import FavoritesPage from '../../pages/favorites/favorites';
import FavoritesEmptyPage from '../../pages/favorites-empty/favorites-empty';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import MainPageEmpty from '../../pages/main-page-empty/main-page-empty';
import Room from '../../pages/room/room';
import RoomNoAuth from '../../pages/room-no-auth/room-no-auth';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


type MainPageProps = {
  suggestionsAmount: number;
}

function App({suggestionsAmount}: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main suggestionsAmount={suggestionsAmount} />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="favorites-empty" element={<FavoritesEmptyPage />} />
        <Route path="login" element={<Login />} />
        <Route path="main-page-empty" element={<MainPageEmpty />} />
        <Route path="/offer/:id" element={<Room />} />
        <Route path="room-no-auth" element={<RoomNoAuth />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
