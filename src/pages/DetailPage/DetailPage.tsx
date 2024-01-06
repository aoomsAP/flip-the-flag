import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Country } from "../../types";
import styles from "./DetailPage.module.css"

// contexts
import { DataContext } from "../../contexts/DataContext";

// components
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import PageTitle from "../../components/PageTitle/PageTitle";

// CountryData components
import Name from "../../components/CountryData/Data/Name";
import Flag from "../../components/CountryData/Flag/Flag";
import CountryMap from "../../components/CountryMap/CountryMap";
import DataList from "../../components/CountryData/DataList/DataList";

const DetailPage = () => {
    // contexts
    const { countries, loading } = useContext(DataContext);

    // find the country in the list of countries
    // based on the name of the country in the parameter
    const { name } = useParams();
    const country: Country | undefined = countries.find(c => c.name.common.toLocaleLowerCase() === name?.toLocaleLowerCase());

    // RETURNS detail page, with:
    // - a title wrapper
    // - a map
    // - a list of details about the country

    if (country && !loading) return (
        <>
            <main>
                <PageTitle title={<>
                    <Name country={country} />
                    &nbsp;
                    <Flag country={country} width={"45px"} height={"100%"} />
                </>} />

                <section className={styles.mainContainer}>

                    <article className={styles.mapContainer}>
                        <CountryMap country={country} />
                    </article>

                    <article className={styles.infoContainer}>
                        <DataList country={country}
                            officialName
                            status
                            capital
                            continent
                            subregion
                        />
                        <DataList country={country}
                            size
                            population
                            language
                            currency
                            timezone
                        />
                        <DataList country={country}
                            neighbors
                        />
                    </article>
                </section>
            </main>
        </>
    )

    // if the country is not found or the countries data is still loading, only a loading indicator is shown
    if (!country || loading) return <LoadingIndicator />
}

export default DetailPage;