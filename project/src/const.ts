export enum APPRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  FavoritesEmpty = '/favorites-empty',
  MainPageEmpty = '/main-page-empty',
  RoomNoAuth = '/room-no-auth',
}

export enum APIRoute {
  hotels = '/hotels',
}

export const TIMEOUT_SHOW_ERROR = 1000;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


export const BASE_URL = 'https://10.react.pages.academy/six-cities';
export const REQUEST_TIMEOUT = 5000;
