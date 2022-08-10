import {cities} from '../../store/cities-setting';
import {LocationItem} from './location-item';


export function LocationList() {
  return(
    <ul className="locations__list tabs__list">
      {cities.map((city) => (<LocationItem key={city} city={city} />))}
    </ul>
  );
}
