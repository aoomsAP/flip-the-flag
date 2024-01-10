import styles from "./CountriesTable.module.css"
import { Country } from "../../../types"
import { useContext } from "react";
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext";
import CountriesTableRow from "../CountriesTableRow/CountriesTableRow";


interface CountriesTableProps {
    countries: Country[],
}

const CountriesTable = ({ countries }: CountriesTableProps) => {
    const { lexicon } = useContext(SiteSettingsContext);

    // RETURNS table of countries
    // with the following columns: Flag, Name, Capital, Subregion & Population

    return (
        <>
            <div className={styles.table_container}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>{lexicon.flag}</th>
                            <th>{lexicon.country}</th>
                            <th>{lexicon.capital}</th>
                            <th>{lexicon.subregion}</th>
                            <th>{lexicon.population}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((country) => {
                            return <CountriesTableRow
                                country={country}
                                key={country.name.common}
                            />
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CountriesTable