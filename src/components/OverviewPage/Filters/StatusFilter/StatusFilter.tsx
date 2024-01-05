import { useContext } from "react";
import { SiteSettingsContext } from "../../../../contexts/SiteSettingsContext";
import { DataContext } from "../../../../contexts/DataContext";
import styles from "./StatusFilter.module.css"

interface StatusFilterProps {
    label: string,
}

const StatusFilter = ({ label }: StatusFilterProps) => {
    // contextx
    const { mode, setMode } = useContext(DataContext);
    const { lexicon } = useContext(SiteSettingsContext);

    // returns fieldset to toggle the status of the countries
    // triggers a reloading of the "countries" data

    return (
        <>
            <fieldset className={styles.mode}>
                <legend>{label}</legend>
                <input type="radio" name="mode" value="independent?status=true" checked={mode === "independent?status=true"}
                    onChange={(e) => setMode(e.target.value)} />{lexicon.status_independent}<br />
                <input type="radio" name="mode" value="all" checked={mode === "all"}
                    onChange={(e) => setMode(e.target.value)} />{lexicon.status_all}
            </fieldset>
        </>
    )
}

export default StatusFilter