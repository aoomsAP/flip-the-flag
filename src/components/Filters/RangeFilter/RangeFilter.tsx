import styles from "./RangeFilter.module.css"
import { Range } from "../../../types";

// contexts
import { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";

// components
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator";

interface RangeFilterProps {
    label: string,
    range: Range
    setRangeFilter: (populationFilter: Range) => void,
}

const RangeFilter = ({ label, range, setRangeFilter }: RangeFilterProps) => {
    const { loading } = useContext(DataContext);

    // RETURNS fieldset to filter on a range of numbers
    // includes MultiRangeSlider

    // if items are still loading, return LoadingIndicator instead of MultiRangeSlider
    // this is because min/max range depends on the loaded items

    return (
        <>
            <fieldset className={styles.population}>
                <legend>{label}</legend>

                {!loading &&
                    <MultiRangeSlider
                        min={range.min}
                        max={range.max}
                        onChange={setRangeFilter}
                    />
                }
                {loading && <LoadingIndicator />}

            </fieldset>
        </>
    )
}

export default RangeFilter