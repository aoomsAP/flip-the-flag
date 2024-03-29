import styles from "./CountryMap.module.css"
import { Country } from '../../types';
import { SiteSettingsContext } from '../../contexts/SiteSettingsContext';
import { useContext } from 'react';

interface CountryMapProps {
  country: Country;
}

const CountryMap = ({ country }: CountryMapProps) => {
  const {language} = useContext(SiteSettingsContext);

  // google maps embed API url variables
  const baseUrl = "https://www.google.com/maps/embed/v1/place"
  const key = import.meta.env.VITE_GOOGLE_MAPS_KEY
  const center = `${country.latlng[0]},${country.latlng[1]}`


  // RETURNS iframe that loads the Google Maps Embed API, using the Place mode
  // https://developers.google.com/maps/documentation/embed/embedding-map
  // requires an API key, center (latitude & longitude), a search term, a region code, and a language

  // ! any console errors are likely due to client-side blocking (ad blocking & browser/extension tracking restrictions)

  return (
    <iframe
      className={styles.map}
      referrerPolicy="no-referrer-when-downgrade"
      src={`${baseUrl}?key=${key}&center=${center}&q=${country.name.common}&region=${country.cca2}&language=${language}`}
    >
    </iframe>
  );
}

export default CountryMap