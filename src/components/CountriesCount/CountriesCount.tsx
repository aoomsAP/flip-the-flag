import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";

interface CountriesCountProps {
    count: number;
}

const CountriesCount = ({count}: CountriesCountProps) => {
    const {lexicon} = useContext(SiteSettingsContext);

    return (
        <>
            <div>
                <strong>{count}</strong> {lexicon.countries_lowercase}
            </div>
        </>
    )
}

export default CountriesCount