import { Country } from "../../../types";

interface CurrencyProps {
    country: Country,
}

const Currency = ({ country }: CurrencyProps) => {

    // RETURNS the currencies of a given country, if currencies exist
    // - the currencies are formatted as a dictionary in the API so the values of the object have to be mapped
    // - except for the first currency, a comma is added before printing

    // ! currencies are currently always in English, regardless of language setting

    return (
        <>
            {country.currencies && Object.values(country.currencies).reduce((str, curr, i) => {
                return (i != 0) ? str + ", " + curr.name : str + curr.name;
            }, "")}
        </>
    )
}

export default Currency