import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {Point} from '../../types/city';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import {getActiveCity, getSuggestions} from '../../store/get-from-store';
import {useSelector} from 'react-redux';

type MapProps = {
  selectedPoint: Point | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {selectedPoint} = props;

  const activeCity = useSelector(getActiveCity);
  const offersStore = useSelector(getSuggestions);
  const activeSuggestions = offersStore.filter((offer) => offer.city.name === activeCity);

  const mapRef = useRef(null);
  const map = useMap(mapRef, activeSuggestions[0].city.location);

  useEffect(() => {
    if (map) {
      activeSuggestions.forEach((suggestion) => {
        const marker = new Marker({
          lat: suggestion.location.latitude,
          lng: suggestion.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && suggestion.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, selectedPoint]);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}

export default Map;
