import { useContext, useState } from "react";
import { Country } from "../../types";
import styles from "./OverviewPage.module.css";

// contexts
import { CountriesLayoutProvider } from "../../contexts/CountriesLayoutContext";
import { DataContext } from "../../contexts/DataContext";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Filters from "../../components/OverviewPage/Filters/FiltersComponent/Filters";
import ToTopButton from "../../components/OverviewPage/ToTopButton/ToTopButton";
import CountriesContainer from "../../components/OverviewPage/CountriesContainer/CountriesContainer/CountriesContainer";

const OverviewPage = () => {
    // contexts
    const { lexicon } = useContext(SiteSettingsContext);
    const { countries } = useContext(DataContext);

    // states
    const [sort, setSort] = useState<string>(`random ${Math.random()}`);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([...countries]);

    // the below function sorts the filtered countries
    const sortedCountries = filteredCountries
        .sort((a, b) => {
            if (sort.startsWith("random")) {
                // returns randomized array
                return Math.random() - 0.5;
            }
            if (sort.startsWith("alphabetic")) {
                // returns alphabetized from A to Z
                if (/\[asc\]/.test(sort)) return a.name.common.localeCompare(b.name.common)
                // returns alphabetized from Z to A
                else return b.name.common.localeCompare(a.name.common);
            }
            if (sort.startsWith("population")) {
                // returns smallest population size to largest
                if (/\[asc\]/.test(sort)) return a.population - b.population;
                // returns largest population size to smallest
                else return b.population - a.population;
            }
            // default = unsorted
            return 0;
        });

    // the overview page consists of:
    // - a title wrapper
    // - an aside with filters
    // - a container with an overview of countries
    // - an arrow to go back to the top of the page

    return (
        <>
            <main className={styles.main}>

                <PageTitle title={lexicon.overview_of_countries} />

                <Filters
                    setFilteredCountries={setFilteredCountries} />

                <CountriesLayoutProvider>
                    <CountriesContainer
                        sort={sort}
                        setSort={setSort}
                        sortedCountries={sortedCountries}/>
                </CountriesLayoutProvider>

                <ToTopButton />

            </main >
        </>
    )
}

export default OverviewPage;