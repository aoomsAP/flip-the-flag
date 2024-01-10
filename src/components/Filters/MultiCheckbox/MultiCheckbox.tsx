import React from "react";
import { useContext } from "react";
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext";
import styles from "./MultiCheckbox.module.css"
import Button from "../../Button/Button";

interface MultiCheckboxProps {
    label: string,
    name: string,
    allOptions: string[],
    checkedItems: string[],
    setCheckedItems: (checkedItems: string[]) => void;
}

const MultiCheckbox = ({ label, name, allOptions, checkedItems, setCheckedItems }: MultiCheckboxProps) => {
    const { lexicon } = useContext(SiteSettingsContext);

    // handle the checkboxes filtering
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        // add to checked items array
        if (e.target.checked) setCheckedItems([...checkedItems, e.target.value]);
        // remove from checked items array
        else setCheckedItems(checkedItems.filter((item) => item != e.target.value));
    }

    // RETURNS fieldset that filters on multiple checkboxes, with:
    // - checkboxes of all possible options
    // - two buttons to either check all checkboxes, or uncheck all of them

    return (
        <>
            <fieldset className={styles.multi_checkbox}>

                <legend>{label}</legend>

                {allOptions.map(option => {
                    return <React.Fragment key={option}>
                        <input
                            type="checkbox"
                            name={name}
                            value={option}
                            checked={checkedItems.includes(option)}
                            onChange={handleChange} />
                        {lexicon[option.replace(" ", "_")]}<br />
                    </React.Fragment>
                })}

                <div>
                    <Button
                        text={lexicon.all}
                        type="button"
                        value="all"
                        onClick={() => setCheckedItems(allOptions)} />
                    <Button
                        text={lexicon.clear}
                        type="button"
                        value="clear"
                        onClick={() => setCheckedItems([])} />
                </div>

            </fieldset>
        </>
    )
}

export default MultiCheckbox