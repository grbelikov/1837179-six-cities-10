import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {Point} from '../../types/city';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import {filterOffers} from '../../store/get-from-store';
// import {getSuggestionsNotMock} from '../../store/get-from-store';

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

  const activeSuggestions = useSelector(filterOffers);

  const mapRef = useRef(null);
  const map = useMap(mapRef, activeSuggestions[0]);

  useEffect(() => {

    if (map !== null && mapRef.current !== null) {
      activeSuggestions.forEach((suggestion) => {
        const marker = new Marker({
          lat: suggestion.location.latitude,
          lng: suggestion.location.longitude
        });

        const isCurrent = selectedPoint !== undefined && suggestion.title === selectedPoint.title;
        console.log({mapRef, map, 'fdfddf': mapRef.current===null});

        marker
          .setIcon(
            isCurrent
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [activeSuggestions, map, selectedPoint]);

  return <div style={{height: '658px', width: '512px'}} ref={mapRef}></div>;
}

export default Map;
