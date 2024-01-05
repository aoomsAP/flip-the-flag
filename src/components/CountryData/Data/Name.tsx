import { useContext } from "react";
import { Country } from "../../../types";
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext";

interface NameProps {
    country: Country,
}

const Name = ({country}: NameProps) => {
    const {language} = useContext(SiteSettingsContext);

    // RETURNS the name of a given country
    // - if the current language is English it is straight from the API name.common property
    // - if the current language is Dutch, it has to be a translation, also provided by the API

    return (
        <>
            {language === "en" ? country.name.common : country.translations.nld.common}
        </>
    )
}

export default Name