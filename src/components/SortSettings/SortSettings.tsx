import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import styles from "./SortSettings.module.css"

interface SortSettingsProps {
    sortValue: string,
    setSortValue: (sortValue: string) => void;
}

const SortSettings = ({ sortValue, setSortValue }: SortSettingsProps) => {
    const { lexicon } = useContext(SiteSettingsContext);

    // RETURNS element that contains settings to sort the data
    // - info about number of countries currently displayed
    // - button to randomly shuffle data
    // - select with several sort options

    return (
        <>
            <div className={styles.sortToggle}>

                <div className="shuffle">
                    {/* sort value is a random number, so the sort state is always different with each click & triggers rerender */}
                    <button onClick={() => setSortValue(`random ${Math.random()}`)}>{lexicon.shuffle}</button>
                </div>

                <div className="sort">
                    <select name="sort" id="sort" onChange={(e) => setSortValue(e.target.value)} value={sortValue}>
                        <option value="random">
                            {lexicon.no_sorting}</option>
                        <option value="alphabetic_asc">
                            {lexicon.alphabetic_asc}</option>
                        <option value="alphabetic_desc">
                            {lexicon.alphabetic_desc}</option>
                        <option value="population_asc">
                            {lexicon.population_asc}</option>
                        <option value="population_desc">
                            {lexicon.population_desc}</option>
                    </select>
                </div>

            </div>

        </>
    )
}

export default SortSettings