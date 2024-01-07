import { useContext } from "react";
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext";
import { DataContext } from "../../../contexts/DataContext";
import styles from "./StatusFilter.module.css"

interface StatusFilterProps {
    label: string,
}

const StatusFilter = ({ label }: StatusFilterProps) => {
    // contexts
    const { status, setStatus } = useContext(DataContext);
    const { lexicon } = useContext(SiteSettingsContext);

    // RETURNS fieldset to toggle the status of the countries
    // triggers a reloading of the "countries" data

    return (
        <>
            <fieldset className={styles.status}>
                <legend>{label}</legend>
                <input type="radio" name="status" value="independent?status=true" checked={status === "independent?status=true"}
                    onChange={(e) => setStatus(e.target.value)} />{lexicon.status_independent}<br />
                <input type="radio" name="status" value="all" checked={status === "all"}
                    onChange={(e) => setStatus(e.target.value)} />{lexicon.status_all}
            </fieldset>
        </>
    )
}

export default StatusFilter