import { useContext } from "react";
import { SiteSettingsContext } from "../../../../../contexts/SiteSettingsContext";
import styles from "./SortSettings.module.css"

interface SortSettingsProps {
    sort: string,
    setSort: (sort: string) => void;
    numberOfCountries: number,
}

const SortSettings = ({ sort, setSort, numberOfCountries }: SortSettingsProps) => {
    const { lexicon } = useContext(SiteSettingsContext);

    // returns element that contains settings to sort the data
    // - info about number of countries currently displayed
    // - button to randomly shuffle data
    // - select with several sort options

    return (
        <>
            <div className={styles.sortToggle}>

                <div>
                    <strong>{numberOfCountries}</strong> {lexicon.countries_lowercase}
                </div>

                <div className="shuffle">
                    {/* sort value is a random number, so the sort useState is always different & triggers rerender*/}
                    <button onClick={() => setSort(`random ${Math.random()}`)}>{lexicon.shuffle}</button>
                </div>

                <div className="sort">
                    <select name="sort" id="sort" onChange={(e) => setSort(e.target.value)} value={sort}>
                        <option>{lexicon.no_sorting}</option>
                        <option value="alphabetic [asc]">
                            {lexicon.alphabetic_asc}</option>
                        <option value="alphabetic [desc]">
                            {lexicon.alphabetic_desc}</option>
                        <option value="population [asc]">
                            {lexicon.population_asc}</option>
                        <option value="population [desc]">
                            {lexicon.population_desc}</option>
                    </select>
                </div>

            </div>

        </>
    )
}

export default SortSettings