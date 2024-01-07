import React from "react";
import { useContext } from "react";
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext";
import styles from "./ContinentsFilter.module.css"

interface ContinentsFilterProps {
    label: string,
    allContinents: string[],
    checkedContinents: string[],
    setCheckedContinents: (continents: string[]) => void;
}

const ContinentsFilter = ({ label, allContinents, checkedContinents, setCheckedContinents }: ContinentsFilterProps) => {
    const { lexicon } = useContext(SiteSettingsContext);

    // handle the continents filtering
    const handleContinentsChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        // add to continents array
        if (e.target.checked) setCheckedContinents([...checkedContinents, e.target.value]);
        // remove from continents array
        else setCheckedContinents(checkedContinents.filter((continent) => continent != e.target.value));
    }

    // RETURNS fieldset that filters on Continent, which contains:
    // - checkboxes of all possible continents
    // - two buttons to either check all continents, or uncheck all of them

    return (
        <>
            <fieldset className={styles.continents}>

                <legend>{label}</legend>

                {allContinents.map((continent, index) => {
                    return <React.Fragment key={index}>
                        <input
                            type="checkbox"
                            name="continents"
                            value={continent}
                            checked={checkedContinents.includes(continent)}
                            onChange={handleContinentsChange} />
                        {lexicon[continent.replace(" ","_")]}<br />
                    </React.Fragment>
                })}

                <div>
                    <button type="button" value="all" onClick={() => setCheckedContinents(allContinents)}>{lexicon.all}</button>
                    <button type="button" value="clear" onClick={() => setCheckedContinents([])}>{lexicon.clear}</button>
                </div>

            </fieldset>
        </>
    )
}

export default ContinentsFilter