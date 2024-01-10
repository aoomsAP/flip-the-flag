import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Country } from "../../types";
import styles from "./CountrySpotlight.module.css";

// contexts
import { DataContext } from "../../contexts/DataContext";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";

// components
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

    const [randomIndex, setRandomIndex] = useState(0);
    useEffect(() => {
        // set a random index every 5 minutes
        const interval = setInterval(() => {
            setRandomIndex(Math.floor(Math.random() * countries.length));
        }, 5 * 60 * 1000)

        // cleanup
        return () => {
            clearInterval(interval);
        };

        // fire hook again when countries data changes
    }, [countries])

    // random country
    const country: Country = countries[randomIndex];

    // RETURNS container with flag & info of one country
    // - a title
    // - a flag
    // - a list with country details

    if (!loading && country) return (
        <>
            <section className={`${styles.country_container} ${theme === "light" ? `${styles.country_container_light}` : `${styles.country_container_dark}`}`}>

                <article className={styles.country_spotlight}
                    onClick={() => navigate(`/countries/${country.name.common.toLocaleLowerCase()}`)}>

                    <h2>{lexicon.country_spotlight}: <Name country={country} /></h2>
                    
                    <div className={styles.random_country}>

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

            </section>
        </>
    )

    // if the country can't be found or countries are still loading, return loading indicator

    if (!country || loading) return <LoadingIndicator />
}

export default CountrySpotlight