import { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext";
import { Country } from "../../../types";
import styles from "./CountrySpotlight.module.css";

// components
import { Link } from "react-router-dom";
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator";

// CountryData components
import Capital from "../../CountryData/Capital";
import Continent from "../../CountryData/Continent";
import Size from "../../CountryData/Size";
import Population from "../../CountryData/Population";
import Subregion from "../../CountryData/Subregion";
import Language from "../../CountryData/Language";
import Name from "../../CountryData/Name";

const CountrySpotlight = () => {
    // contexts
    const { theme } = useContext(SiteSettingsContext);
    const { countries, loading } = useContext(DataContext);
    const { lexicon } = useContext(SiteSettingsContext);

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
                    <Link className={styles.boxLink} to={`/countries/${country.name.common.toLocaleLowerCase()}`}>
                        <article>
                            <h2>{lexicon.country_spotlight}: <Name country={country}/></h2>
                            <div className={styles.randomCountry}>
                                <figure>
                                    <img src={country.flags.png} alt={country.flags.alt} />
                                </figure>
                                <ul>
                                    <li>{lexicon.capital}: <Capital country={country}/></li>
                                    <li>{lexicon.continent}: <Continent country={country} /></li>
                                    <li>{lexicon.subregion}: <Subregion country={country} /></li>
                                    <li>{lexicon.size}: <Size country={country} /></li>
                                    <li>{lexicon.population}: <Population country={country} /></li>
                                    <li>{lexicon.language}: <Language country={country}/></li>
                                </ul>
                            </div>
                        </article>
                    </Link>
                }

            </section>
        </>
    )
}

export default CountrySpotlight