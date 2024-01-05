import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import { Country } from "../../types";
import styles from "./CountrySpotlight.module.css";

// components
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

// CountryData components
import Name from "../CountryData/Data/Name";
import DataList from "../CountryData/DataList/DataList";
import Flag from "../CountryData/Flag/Flag";

const CountrySpotlight = () => {
    // contexts
    const { theme } = useContext(SiteSettingsContext);
    const { countries, loading } = useContext(DataContext);
    const { lexicon } = useContext(SiteSettingsContext);

    // useNavigate hook allows navigation to another page via react router dom
    // inspired by https://stackoverflow.com/a/71002189
    const navigate = useNavigate();

    // generates a random number and gets the country with that index
    const randomIndex = Math.floor(Math.random() * countries.length);
    const country: Country = countries[randomIndex];

    // returns a box that contains a flag & info of one country
    // - a title
    // - a flag
    // - a list with country details
    //
    // if country can't be found or countries are still loading, return loading indicator

    return (
        <>
            <section className={`${styles.countryContainer} ${theme === "light" ? `${styles.countryContainerLight}` : `${styles.countryContainerDark}`}`}>

                {(!country || loading) && <LoadingIndicator />}

                {(country && !loading) &&
                        <article className={styles.countrySpotlight}
                            onClick={() => navigate(`/countries/${country.name.common.toLocaleLowerCase()}`) }>

                            <h2>{lexicon.country_spotlight}: <Name country={country} /></h2>
                            <div className={styles.randomCountry}>
                                <figure>
                                    <Flag country={country} width={"100%"} height={"100%"} />
                                </figure>
                                <DataList
                                    country={country}
                                    capital
                                    continent
                                    subregion
                                    size
                                    population
                                    language
                                />
                            </div>

                        </article>
                }
            </section>
        </>
    )
}

export default CountrySpotlight