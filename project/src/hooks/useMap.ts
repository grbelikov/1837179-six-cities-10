import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import {OfferType} from '../types/offer';


function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  offer: OfferType | undefined
): Map | null {
  const [map, setMap] = useState<Map | null>(null);


  useEffect(() => {
    const current = mapRef.current;

    if (typeof offer === 'undefined' || current === null) {
      return;
    }

    const cityPoints = offer.city.location;

    const instance = new Map(current, {
      center: {
        lat: cityPoints.latitude,
        lng: cityPoints.longitude
      },
      zoom: cityPoints.zoom
    });

    const layer = new TileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      }
    );

    instance.addLayer(layer);

    setMap(instance);
    return () => {
      setMap(null);
      instance.remove();
    };
  }, [mapRef, offer]);

  return map;
}

export default useMap;
