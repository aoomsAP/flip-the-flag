import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import styles from "./SortSettings.module.css"
import Select from "../Select/Select";
import { ISelectOption } from "../../types";
import Button from "../Button/Button";

interface SortSettingsProps {
    sortValue: string,
    setSortValue: (sortValue: string) => void;
}

const SortSettings = ({ sortValue, setSortValue }: SortSettingsProps) => {
    const { lexicon } = useContext(SiteSettingsContext);

    const sortOptions: ISelectOption[] = [
        { value: "random", label: lexicon.no_sorting },
        { value: "alphabetic_asc", label: lexicon.alphabetic_asc },
        { value: "alphabetic_desc", label: lexicon.alphabetic_desc },
        { value: "population_asc", label: lexicon.population_asc },
        { value: "population_desc", label: lexicon.population_desc },
    ]

    // RETURNS element that contains settings to sort the data
    // - info about number of countries currently displayed
    // - button to randomly shuffle data
    // - select with several sort options

    return (
        <>
            <div className={styles.sort_toggle}>

                <div className="shuffle">
                    {/* sort value is a random number, so the sort state is always different with each click & triggers rerender */}
                    <Button
                        text={lexicon.shuffle}
                        type="button"
                        title={lexicon.shuffle}
                        onClick={() => setSortValue(`random ${Math.random()}`)} />
                </div>

                <Select name="sort"
                    id="sort"
                    options={sortOptions}
                    onChange={setSortValue}
                    select_value={sortValue} />
            </div>

        </>
    )
}

export default SortSettings