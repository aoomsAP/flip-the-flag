import { useContext } from "react";
import { Country } from "../../types";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";

interface SizeProps {
    country: Country,
}

const Size = ({country}: SizeProps) => {
    const {lexicon} = useContext(SiteSettingsContext);

    // returns the size of a given country
    // formatted in the locale string of the current language setting
    
    return (
        <>
            {country.area.toLocaleString(lexicon.locale_string)} km²
        </>
    )
}

export default Size