import { useContext } from "react";
import { CountriesLayoutContext } from "../../contexts/CountriesLayoutContext";
import { Country } from "../../types";
import styles from "./CountriesContainer.module.css"

// components
import ViewBar from "../ViewBar/ViewBar"
import FlipCardList from "../FlipCards/FlipCardList/FlipCardList"
import CountriesTable from "../CountriesTable/CountriesTable/CountriesTable"

interface CountriesContainerProps {
    sortValue: string,
    setSortValue: (sort: string) => void;
    filteredAndSortedCountries: Country[]
}

const CountriesContainer = ({sortValue,setSortValue,filteredAndSortedCountries}: CountriesContainerProps) => {
    const {layout} = useContext(CountriesLayoutContext)

    // RETURNS countries overview container, with
    //  - a bar with layout settings & sorting options
    //  - a list of countries, formatted as cards (flags) or as a table, depending on the Layout context

    return (
        <>
            <section className={styles.countries_container}>

                <ViewBar sortValue={sortValue} setSortValue={setSortValue} numberOfCountries={filteredAndSortedCountries.length} />

                {(layout === "flags" || layout === "flagsWithName") &&
                    <FlipCardList countries={filteredAndSortedCountries} />}
                {layout === "list" &&
                    <CountriesTable countries={filteredAndSortedCountries} />}

            </section>
        </>
    )
}

export default CountriesContainer