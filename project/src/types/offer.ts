import {City} from '../store/cities-setting';

type Host = {
  'id': number;
  'name': string;
  'isPro': boolean;
  'avatarUrl': string;
}

type RoomType = 'apartment' | 'room' | 'house' | 'hotel';

type Location = {
  'latitude': number;
  'longitude': number;
  'zoom': number;
}

type CityDescriptiontype = {
  name: City;
  location: Location;
};

export type OfferType = {
  city: CityDescriptiontype;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: RoomType;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  description: string;
  location: Location;
  id: number;
};
