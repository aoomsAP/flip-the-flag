import styles from "./TableRow.module.css"
import { Country } from "../../../../../types"
import { Link } from "react-router-dom"

// CountryData components
import Name from "../../../../CountryData/Name"
import Capital from "../../../../CountryData/Capital"
import Population from "../../../../CountryData/Population"
import Subregion from "../../../../CountryData/Subregion"
import Flag from "../../../../CountryData/Flag/Flag"

interface TableRowProps {
    country: Country,
}

const Table = ({ country }: TableRowProps) => {

    // returns one table row
    // with the following data: Flag, Name, Capital, Subregion & Population
    // the Name of the country links to its DetailPage

    return (
        <>
            <tr className={styles.row}>
                <td className={styles.flag}><Flag country={country} width="24px" height="100%"/></td>
                <td className={styles.name}><Link to={`/countries/${country.name.common.toLocaleLowerCase()}`}><Name country={country} /></Link></td>
                <td className={styles.capital}><Capital country={country} /></td>
                <td className={styles.population}><Subregion country={country} /></td>
                <td className={styles.details}><Population country={country} /></td>
            </tr>
        </>
    )
}

export default Table