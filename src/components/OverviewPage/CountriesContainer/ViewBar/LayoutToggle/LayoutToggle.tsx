import { useContext } from "react";
import styles from "./LayoutToggle.module.css"

// contexts
import { CountriesLayoutContext } from "../../../../../contexts/CountriesLayoutContext";
import { SiteSettingsContext } from "../../../../../contexts/SiteSettingsContext";

const LayoutToggle = () => {
    // contexts
    const { lexicon } = useContext(SiteSettingsContext);
    const { layout, setLayout } = useContext(CountriesLayoutContext);

    // returns element that allows user to toggle between layout settings
    // - label to further explain the setting
    // - select with 3 options

    return (
        <>
            <div className={styles.layoutToggle}>
                <label>
                    {layout === "flags" && <strong>{lexicon.layout_flags_label}</strong>}
                    {layout === "flagsWithName" && <strong>{lexicon.layout_flags_with_name_label}</strong>}
                    {layout === "list" && <strong>{lexicon.layout_list_label}</strong>}
                </label>
                <select name="layout" id="layout" onChange={e => setLayout(e.target.value)} value={layout}>
                    <option value="flags">{lexicon.layout_flags}</option>
                    <option value="flagsWithName">{lexicon.layout_flags_with_name}</option>
                    <option value="list">{lexicon.layout_list}</option>
                </select>
            </div>
        </>
    )
}

export default LayoutToggle