import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import styles from "./CountriesCount.module.css"

interface CountriesCountProps {
    count: number;
}

const CountriesCount = ({count}: CountriesCountProps) => {
    const {lexicon} = useContext(SiteSettingsContext);

    return (
        <>
            <div className={styles.countriesCountContainer}>
                <strong>{count}</strong> {lexicon.countries_lowercase}
            </div>
        </>
    )
}

export default CountriesCount