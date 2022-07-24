export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  // to delete later
  FavoritesEmpty = '/favorites-empty',
  MainPageEmpty = '/main-page-empty',
  RoomNoAuth = '/room-no-auth',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
