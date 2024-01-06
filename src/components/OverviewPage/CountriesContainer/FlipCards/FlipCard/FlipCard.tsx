// FlipCard design based on: https://www.w3schools.com/howto/howto_css_flip_card.asp

import { Link } from "react-router-dom";
import { Country } from "../../../../../types"
import styles from "./FlipCard.module.css"

// contexts
import { useContext } from "react";
import { CountriesLayoutContext } from "../../../../../contexts/CountriesLayoutContext";

// CountryData components
import Capital from "../../../../CountryData/Data/Capital";
import Name from "../../../../CountryData/Data/Name";
import Flag from "../../../../CountryData/Flag/Flag";

interface FlipCardProps {
    country: Country,
}

const FlipCard = ({ country }: FlipCardProps) => {
    const { layout } = useContext(CountriesLayoutContext);

    // RETURNS one single FlipCard
    // - the front of the FlipCard looks like a country Flag,
    //   (when layout is set to "flagsWithName", the Name of the country is added underneath)
    // - the back of the FlipCard contains the Name of the country, its Capital, and a link to the Detail page

    return (
        <>
            <article className={styles.flipCard}>
                <div className={styles.flipCardInner}>

                    <div className={styles.flipCardFront}>
                        <Flag country={country} width="150px" height="100px" />
                        {layout === "flagsWithName" &&
                            <p className={styles.countryName}>
                                <Name country={country} />
                            </p>
                        }
                    </div>

                    <div className={styles.flipCardBack}>
                        <h2><Name country={country} /></h2>
                        <p><Capital country={country} /></p>
                        <Link to={`/countries/${country.name.common.toLocaleLowerCase()}`}>
                            Details
                        </Link>
                    </div>

                </div>
            </article>
        </>
    )
}

export default FlipCard