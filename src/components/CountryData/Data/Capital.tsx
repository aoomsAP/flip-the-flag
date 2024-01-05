import { useContext } from "react";
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext";
import { Country } from "../../../types";

interface CapitalProps {
    country: Country,
}

const Capital = ({country}: CapitalProps) => {
    const { lexicon } = useContext(SiteSettingsContext);

    // RETURNS the capital of a given country
    // most countries have one capital, but some have more than one, and others have none
    // therefore, except for the first continent, a comma is added before printing

    // ! capital is currently always in English, regardless of language setting

    return (
        <>
            {country.capital
            // if a capital exists, map through all possible capitals
            ? country.capital.map((capital, i) => (i != 0) ? `, ${capital}` : capital)
            // if a capital doesn't exist, print "no capital" in the current language
            : lexicon.no_capital}
        </>
    )
}

export default Capital