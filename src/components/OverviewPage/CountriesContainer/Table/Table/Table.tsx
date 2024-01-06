import styles from "./Table.module.css"
import { Country } from "../../../../../types"
import { useContext } from "react";
import { SiteSettingsContext } from "../../../../../contexts/SiteSettingsContext";
import TableRow from "../TableRow/TableRow";

interface TableProps {
    countries: Country[],
}

const Table = ({ countries }: TableProps) => {
    const { lexicon } = useContext(SiteSettingsContext);

    // RETURNS table of countries
    // with the following columns: Flag, Name, Capital, Subregion & Population

    return (
        <>
            <div className={styles.tableContainer}>
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
                            return <TableRow
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

export default Table