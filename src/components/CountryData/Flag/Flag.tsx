import { Country } from "../../../types"
import styles from "./Flag.module.css"

interface FlagProps {
    country: Country
    width: string,
    height: string,
}

const Flag = ({country,width,height}: FlagProps) => {

    return (
        <>
            <img
                src={country.flags.png}
                alt={country.flags.alt ? country.flags.alt : ""}
                width={width}
                height={height}
                className={styles.flagImg}
            />
        </>
    )
}

export default Flag