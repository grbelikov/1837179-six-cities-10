import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {City} from '../../store/cities-setting';
import {MouseEvent} from 'react';
import {changeCity} from '../../store/action';
import {getActiveCity} from '../../store/get-from-store';

type LocationItemProps = {
  city: City,
};

function computeCss(activeFlag: boolean) {
  return `locations__item-link tabs__item ${activeFlag ? 'tabs__item--active' : ''}`;
}

export function LocationItem(props: LocationItemProps) {
  const {city} = props;
  const active = useSelector(getActiveCity);
  const dispatch = useDispatch();

  const hundleClick = (evt: MouseEvent <HTMLElement>) => {
    evt.preventDefault();
    dispatch(changeCity(city));
  };

  return(
    <li onClick={hundleClick} className="locations__item">
      <a className={computeCss(active === city)} href="/#">
        <span>{city}</span>
      </a>
    </li>
  );
}
