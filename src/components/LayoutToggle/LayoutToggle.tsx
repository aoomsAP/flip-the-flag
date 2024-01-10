import { useContext } from "react";
import { ISelectOption } from "../../types";
import Select from "../Select/Select";
import styles from "./LayoutToggle.module.css"

// contexts
import { CountriesLayoutContext } from "../../contexts/CountriesLayoutContext";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";


const LayoutToggle = () => {
    // contexts
    const { lexicon } = useContext(SiteSettingsContext);
    const { layout, setLayout } = useContext(CountriesLayoutContext);

    const layoutOptions: ISelectOption[] = [
        { value: "flags", label: lexicon.layout_flags },
        { value: "flagsWithName", label: lexicon.layout_flags_with_name },
        { value: "list", label: lexicon.layout_list },
    ]

    // RETURNS element that allows user to toggle between layout settings
    // - label, depending on layout setting
    // - select with 3 options

    return (
        <>
            <div className={styles.layout_toggle}>
                <label>
                    {layout === "flags" && <strong>{lexicon.layout_flags_label}</strong>}
                    {layout === "flagsWithName" && <strong>{lexicon.layout_flags_with_name_label}</strong>}
                    {layout === "list" && <strong>{lexicon.layout_list_label}</strong>}
                </label>

                <Select name="layout"
                    id="layout"
                    options={layoutOptions}
                    onChange={setLayout}
                    select_value={layout} />
            </div>
        </>
    )
}

export default LayoutToggle