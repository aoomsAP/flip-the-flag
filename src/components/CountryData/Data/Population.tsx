import { useContext } from "react";
import { Country } from "../../../types";
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext";

interface PopulationProps {
    country: Country,
}

const Population = ({country}: PopulationProps) => {
    const {lexicon} = useContext(SiteSettingsContext);

    // RETURNS the population of a given country
    // formatted in the locale string of the current language setting
    
    return (
        <>
            {country.population.toLocaleString(lexicon.locale_string)}
        </>
    )
}

export default Population