import { Country } from "../../../types";

interface LanguageProps {
    country: Country,
}

const Language = ({ country }: LanguageProps) => {

    // RETURNS the languages of a given country, if languages exist
    // - the languages are formatted as a dictionary in the API so the values of the object have to be mapped
    // - except for the first language, a comma is added before printing

    // ! languages are currently always in English, regardless of language setting

    return (
        <>
            {country.languages && Object.values(country.languages).reduce((str, lang, i) => {
                return (i != 0) ? str + ", " + lang : str + lang;
            }, "")}
        </>
    )
}

export default Language