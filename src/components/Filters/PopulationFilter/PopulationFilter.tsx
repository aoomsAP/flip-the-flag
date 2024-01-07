import styles from "./PopulationFilter.module.css"
import { Range } from "../../../types";
import MultiRangeSlider from "../../MultiRangeSlider/MultiRangeSlider";
import { DataContext } from "../../../contexts/DataContext";
import { useContext } from "react";
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator";

interface PopulationFilterProps {
    label: string,
    populationRange: Range
    setPopulationFilter: (populationFilter: Range) => void,
}

const PopulationFilter = ({ label, populationRange, setPopulationFilter }: PopulationFilterProps) => {
    const { loading } = useContext(DataContext);

    // RETURNS fieldset to filter on Population
    // includes MultiRangeSlider

    // if countries are still loading, return LoadingIndicator instead of MultiRangeSlider
    // this is because min/max range depends on the loaded countries

    return (
        <>
            <fieldset className={styles.population}>
                <legend>{label}</legend>

                {!loading &&
                    <MultiRangeSlider
                        min={populationRange.min}
                        max={populationRange.max}
                        onChange={setPopulationFilter}
                    />
                }
                {loading && <LoadingIndicator />}

            </fieldset>
        </>
    )
}

export default PopulationFilter