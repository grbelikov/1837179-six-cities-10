import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {City} from '../../store/cities-setting';
import {MouseEvent} from 'react';
import {changeCity} from '../../store/action';

type LocationItemProps = {
  city: City,
};

function computeCss(activeFlag: boolean) {
  return `locations__item-link tabs__item ${activeFlag ? 'tabs__item--active' : ''}`;
}

function getActiveCity(state: RootState) {
  return state.city;
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
