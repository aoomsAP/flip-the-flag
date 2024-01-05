import { Country } from "../../../types";

interface TimezoneProps {
    country: Country,
}

const Timezone = ({country}: TimezoneProps) => {

    // RETURNS the timezones of a given country
    // some countries have more than one timezone
    // except for the first timezone, a comma is added before printing
    
    return (
        <>
            {country.timezones.map((t, i) => (i != 0) ? `, ${t}` : t)}
        </>
    )
}

export default Timezone