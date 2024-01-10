import { useContext, useState } from "react";
import { Country } from "../../types";
import styles from "./OverviewPage.module.css";

// contexts
import { CountriesLayoutProvider } from "../../contexts/CountriesLayoutContext";
import { DataContext } from "../../contexts/DataContext";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Filters from "../../components/Filters/Filters/Filters";
import ToTopButton from "../../components/ToTopButton/ToTopButton";
import CountriesContainer from "../../components/CountriesContainer/CountriesContainer";

const OverviewPage = () => {
    // contexts
    const { lexicon } = useContext(SiteSettingsContext);
    const { countries } = useContext(DataContext);

    // states
    const [sortValue, setSortValue] = useState<string>("");
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([...countries]);

    // the below function sorts countries
    const sortCountries = (a: Country, b: Country) => {

        // random/shuffle sorting (value "random" will be often followed by random number, so needs to be checked differently than the presets with literal values)
        if (sortValue.startsWith("random")) {
            // set sortValue to nothing, otherwise sortValue remains "random" and countries will be needlessly randomized with every filter/rerender
            setSortValue("");
            // returns randomized array
            return Math.random() - 0.5;
        }

        // preset sorting options
        switch (sortValue) {
            // returns alphabetized from A to Z
            case "alphabetic_asc": return a.name.common.localeCompare(b.name.common);

            // returns alphabetized from A to Z
            case "alphabetic_desc": return b.name.common.localeCompare(a.name.common);

            // returns smallest population size to largest
            case "population_asc": return a.population - b.population;

            // returns largest population size to smallest
            case "population_desc": return b.population - a.population;

            // no sorting applied
            default: return 0;
        }
    };

    // filtered countries are sorted
    const filteredAndSortedCountries = filteredCountries
        .sort(sortCountries);

        
    // RETURNS overview page, with:
    // - a title wrapper
    // - an aside with filters
    // - a container with an overview of countries & a bar for sorting/layout
    // - an arrow to go back to the top of the page

    return (
        <>
            <main className={styles.main}>

                <PageTitle title={lexicon.overview_of_countries} />

                <Filters setFilteredCountries={setFilteredCountries} />

                <CountriesLayoutProvider>
                    <CountriesContainer
                        sortValue={sortValue}
                        setSortValue={setSortValue}
                        filteredAndSortedCountries={filteredAndSortedCountries} />
                </CountriesLayoutProvider>

                <ToTopButton />

            </main >
        </>
    )
}

export default OverviewPage;