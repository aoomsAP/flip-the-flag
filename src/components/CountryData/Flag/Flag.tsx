import { Country } from "../../../types"
import styles from "./Flag.module.css"

interface FlagProps {
    country: Country
    width: string,
    height: string,
}

const Flag = ({ country, width, height }: FlagProps) => {

    // RETURNS img element with png flag
    // includes alt description, if available in the API

    return (
        <>
            <img
                className={styles.flagImg}
                src={country.flags.png}
                alt={country.flags.alt ? country.flags.alt : ""}
                width={width}
                height={height}
            />
        </>
    )
}

export default Flag