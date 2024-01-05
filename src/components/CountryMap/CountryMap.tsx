import styles from "./CountryMap.module.css"
import { Country } from '../../types';
import { SiteSettingsContext } from '../../contexts/SiteSettingsContext';
import { useContext } from 'react';
import 'dotenv/config'

interface CountryMapProps {
  country: Country;
}

const CountryMap = ({ country }: CountryMapProps) => {
  const {language} = useContext(SiteSettingsContext);

  const baseUrl = "https://www.google.com/maps/embed/v1/place"
  const key = process.env.GOOGLE_MAPS_KEY;
  const center = `${country.latlng[0]},${country.latlng[1]}`

  // returns iframe that loads the Google Maps Embed API, making use of the Place mode
  // https://developers.google.com/maps/documentation/embed/embedding-map
  // requires an API key, latitude & longitude, a search term, a region code, and a language

  // ! any console errors are likely due to client-side blocking (ad blocking & browser (extension) tracking restrictions)

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