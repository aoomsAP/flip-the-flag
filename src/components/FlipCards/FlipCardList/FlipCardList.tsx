import styles from "./FlipCardList.module.css"
import FlipCard from "../FlipCard/FlipCard";
import { Country } from "../../../types";

interface FlipCardListProps {
    countries: Country[],
}

const FlipCardList = ({ countries }: FlipCardListProps) => {

    // RETURNS list of FlipCards

    return (
        <>
            <div className={styles.flipcard_list}>
                {countries.map((country) => {
                    return <FlipCard
                        country={country}
                        key={country.name.common}
                    />
                })}
            </div>
        </>
    )
}

export default FlipCardList