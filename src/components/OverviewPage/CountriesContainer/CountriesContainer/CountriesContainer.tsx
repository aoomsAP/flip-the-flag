import { useContext } from "react";
import { CountriesLayoutContext } from "../../../../contexts/CountriesLayoutContext";
import { Country } from "../../../../types";
import styles from "./CountriesContainer.module.css"

// components
import ViewBar from "../ViewBar/ViewBar/ViewBar"
import FlipCardList from "../FlipCards/FlipCardList/FlipCardList"
import Table from "../Table/Table/Table"

interface CountriesContainerProps {
    sort: string,
    setSort: (sort: string) => void;
    sortedCountries: Country[]
}

const CountriesContainer = ({sort,setSort,sortedCountries}: CountriesContainerProps) => {
    const {layout} = useContext(CountriesLayoutContext)

    // the overview container consists of:
    //  - a bar with layout settings & sorting options
    //  - a list of countries, formatted as cards (flags) or as a table, depending on the Layout context

    return (
        <>
            <section className={styles.mainContainer}>

                <ViewBar sort={sort} setSort={setSort} numberOfCountries={sortedCountries.length} />

                {(layout === "flags" || layout === "flagsWithName") &&
                    <FlipCardList countries={sortedCountries} />}
                {layout === "list" &&
                    <Table countries={sortedCountries} />}

            </section>
        </>
    )
}

export default CountriesContainer