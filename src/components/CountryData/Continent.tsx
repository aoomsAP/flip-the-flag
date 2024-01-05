import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import { Country } from "../../types";

interface ContinentProps {
    country: Country,
}

const Continent = ({country}: ContinentProps) => {
    const {lexicon} = useContext(SiteSettingsContext);

    // returns the continent of a given country

    // - most countries have one continent, but some have more than one
    // therefore, except for the first continent, a comma is added before printing

    // - to make sure the continents are translated according to the current language setting
    // the according lexicon entry is printed
    // after replacing the spaces in the subregions by an underscore for the lexicon formatting

    return (
        <>
            {country.continents.map((c, i) => {
                const continent = c.toLowerCase().replace(" ","_");
                return (i != 0) ? `, ${lexicon[continent]}` : lexicon[continent];
            })}
        </>
    )
}

export default Continent