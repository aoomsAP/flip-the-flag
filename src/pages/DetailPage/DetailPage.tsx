import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Country } from "../../types";
import styles from "./DetailPage.module.css"

// contexts
import { DataContext } from "../../contexts/DataContext";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";

// components
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import PageTitle from "../../components/PageTitle/PageTitle";

// CountryData components
import Capital from "../../components/CountryData/Capital";
import Continent from "../../components/CountryData/Continent";
import Subregion from "../../components/CountryData/Subregion";
import Size from "../../components/CountryData/Size";
import Population from "../../components/CountryData/Population";
import Language from "../../components/CountryData/Language";
import Neighbors from "../../components/CountryData/Neighbors";
import Currency from "../../components/CountryData/Currency";
import Timezone from "../../components/CountryData/Timezone";
import Name from "../../components/CountryData/Name";
import Flag from "../../components/CountryData/Flag/Flag";

const DetailPage = () => {
    // contexts
    const { countries, loading } = useContext(DataContext);
    const { lexicon } = useContext(SiteSettingsContext);

    // find the country in the list of countries
    // based on the name of the country in the parameter
    const { name } = useParams();
    const country: Country | undefined = countries.find(c => c.name.common.toLocaleLowerCase() === name?.toLocaleLowerCase());

    // find neighbors of the country
    // API has a "borders" array that contains country codes,
    // which is then used to identify the country in the countries data
    const neighbors = country?.borders?.map(b => countries.find(c => c.cca3 === b) as Country);

    // the detail page consists of:
    // - a title wrapper
    // - a map
    // - a list of details about the country
    //
    // if the country is not found or the countries data is still loading, merely a loading indicator is shown

    return (
        <>
            <main>

                {(!country || loading) && <LoadingIndicator />}

                {(country && !loading) && <>

                    <PageTitle title={<>
                        <Name country={country} />
                        &nbsp;
                        <Flag country={country} width={"45px"} height={"100%"} />
                    </>} />

                    <section className={styles.mainContainer}>

                        <article className={styles.mapContainer}>
                            <iframe className={styles.map} src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCvWrW-B58uPUMvk103A5E8KvvCJr3tFv4&center=${country.latlng[0]},${country.latlng[1]}&q=${country.name.common}&region=${country.cca2}&language=en`}
                            ></iframe>
                        </article>

                        <article className={styles.infoContainer}>
                            <ul>
                                <li>{lexicon.capital}: <Capital country={country} /></li>
                                <li>{lexicon.continent}: <Continent country={country} /></li>
                                <li>{lexicon.subregion}: <Subregion country={country} /></li>
                                <br />
                                <li>{country.independent ? lexicon.independent : lexicon.not_independent}</li>
                                {country.unMember && <li>{lexicon.un_member}</li>}
                                <br />
                                <li>{lexicon.size}: <Size country={country} /></li>
                                <li>{lexicon.population}: <Population country={country} /></li>
                                <li>{lexicon.language}: <Language country={country} /></li>
                                <li>{lexicon.currency}: <Currency country={country} /></li>
                                <li>{lexicon.timezone}: <Timezone country={country} /></li>
                                {neighbors && <><br />
                                    <li>{lexicon.neighbors}:&nbsp;
                                        <Neighbors neighbors={neighbors} />
                                    </li>
                                </>
                                }
                            </ul>
                        </article>

                    </section>

                </>}

            </main>
        </>
    )
}

export default DetailPage;