import styles from "./PopulationFilter.module.css"
import { Range } from "../../../../types";
import MultiRangeSlider from "../../../MultiRangeSlider/MultiRangeSlider";
import { useContext } from "react";
import { DataContext } from "../../../../contexts/DataContext";

interface PopulationFilterProps {
    label: string,
    setPopulationFilter: (populationFilter: Range) => void,
}

const PopulationFilter = ({ label, setPopulationFilter }: PopulationFilterProps) => {
    const {countries} = useContext(DataContext);

    const maxPopulation = countries.reduce((max, country) => {
        if (country.population > max) return country.population;
        return max;
    }, 0);
    const minPopulation = countries.reduce((min, country) => {
        if (country.population < min) return country.population;
        return min;
    }, maxPopulation);

    // returns fieldset to filter on Population
    // includes MultiRangeSlider

    return (
        <>
            <fieldset className={styles.population}>
                <legend>{label}</legend>
                <MultiRangeSlider
                    min={minPopulation}
                    max={maxPopulation}
                    onChange={setPopulationFilter}
                />
            </fieldset>
        </>
    )
}

export default PopulationFilter