import styles from "./TableRow.module.css"
import { Country } from "../../../../../types"
import { useNavigate } from 'react-router-dom';

// CountryData components
import Name from "../../../../CountryData/Data/Name"
import Capital from "../../../../CountryData/Data/Capital"
import Population from "../../../../CountryData/Data/Population"
import Subregion from "../../../../CountryData/Data/Subregion"
import Flag from "../../../../CountryData/Flag/Flag"

interface TableRowProps {
    country: Country,
}

const Table = ({ country }: TableRowProps) => {

    // useNavigate hook allows navigation to another page via react router dom
    // inspired by https://stackoverflow.com/a/71002189
    const navigate = useNavigate();

    // returns one table row
    // with the following data: Flag, Name, Capital, Subregion & Population
    // the entire row is clickable and leads to the DetailPage of the respective country

    return (
        <>
            <tr className={styles.row}
                onClick={() => navigate(`/countries/${country.name.common.toLocaleLowerCase()}`)}>
                    <td className={styles.flag}><Flag country={country} width="24px" height="100%" /></td>
                    <td className={styles.name}><strong><Name country={country} /></strong></td>
                    <td className={styles.capital}><Capital country={country} /></td>
                    <td className={styles.population}><Subregion country={country} /></td>
                    <td className={styles.details}><Population country={country} /></td>
            </tr>

        </>
    )
}

export default Table