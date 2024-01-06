import { useContext } from "react";
import { Country } from "../../../types";
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext";

// CountryData components
import Capital from "../Data/Capital";
import Continent from "../Data/Continent";
import Currency from "../Data/Currency";
import Language from "../Data/Language";
import Neighbors from "../Data/Neighbors";
import Population from "../Data/Population";
import Size from "../Data/Size";
import Subregion from "../Data/Subregion";
import Timezone from "../Data/Timezone";
import Name from "../Data/Name";
import OfficialName from "../Data/OfficialName";


interface DataListProps {
    country: Country;
    name?: boolean,
    officialName?: boolean,
    status?: boolean,
    capital?: boolean,
    continent?: boolean,
    subregion?: boolean,
    size?: boolean,
    population?: boolean,
    language?: boolean,
    currency?: boolean,
    unMembership?: boolean,
    timezone?: boolean,
    neighbors?: boolean,
}

const DataList = ({ country,
    name, officialName, status, unMembership, capital, continent, currency, language, neighbors, population, size, subregion, timezone
}: DataListProps) => {
    const { lexicon } = useContext(SiteSettingsContext);

    // RETURNS list of country data, with:
    // - a list item, with label, followed by the respective data

    // includes every (optional) parameter that is passed to DataList component

    return (
        <>
            <ul>
                {name && <li><strong>{lexicon.name}</strong>:&thinsp;
                    <Name country={country} /></li>}

                {officialName && <li><strong>{lexicon.official_name}</strong>:&thinsp;
                    <OfficialName country={country} /></li>}

                {status && <li><strong>{lexicon.status}</strong>:&thinsp;
                    {country.independent ? lexicon.independent : lexicon.not_independent}</li>}

                {capital && <li><strong>{lexicon.capital}</strong>:&thinsp;
                    <Capital country={country} /></li>}

                {continent && <li><strong>{lexicon.continent}</strong>:&thinsp;
                    <Continent country={country} /></li>}

                {subregion && <li><strong>{lexicon.subregion}</strong>:&thinsp;
                    <Subregion country={country} /></li>}

                {size && <li><strong>{lexicon.size}</strong>:&thinsp;
                    <Size country={country} /></li>}

                {population && <li><strong>{lexicon.population}</strong>:&thinsp;
                    <Population country={country} /></li>}

                {language && <li><strong>{lexicon.language}</strong>:&thinsp;
                    <Language country={country} /></li>}

                {currency && <li><strong>{lexicon.currency}</strong>:&thinsp;
                    <Currency country={country} /></li>}

                {unMembership && <li><strong>{lexicon.un_membership}</strong>:&thinsp;
                    {country.unMember ? lexicon.un_member : lexicon.not_un_member}</li>}

                {timezone && <li><strong>{lexicon.timezone}</strong>:&thinsp;
                    <Timezone country={country} /></li>}

                {neighbors && <li><strong>{lexicon.neighbors}</strong>:&thinsp;
                    <Neighbors country={country} /></li>}
            </ul>
        </>
    )
}

export default DataList