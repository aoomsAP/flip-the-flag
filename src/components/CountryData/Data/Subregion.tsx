import { useContext } from "react";
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext";
import { Country } from "../../../types";
import Continent from "./Continent";

interface SubregionProps {
    country: Country,
}

const Subregion = ({country}: SubregionProps) => {
    const {lexicon} = useContext(SiteSettingsContext);

    // RETURNS the subregion of a given country, if it exists,
    // otherwise return region, if it exists,
    // otherwise return the first continent

    // to make sure the continents are translated according to the current language setting the according lexicon entry is printed
    // (after the spaces in the subregions by an underscore for the lexicon formatting)

    return (
        <>
            {country.subregion
            ? lexicon[country.subregion.toLowerCase().replace(/\s/g,"_")]
            : (country.region ? lexicon[country.region.toLowerCase().replace(/\s/g,"_")] : <Continent country={country} />)
            }
        </>
    )
}

export default Subregion