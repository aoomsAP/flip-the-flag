import styles from "./ViewBar.module.css"
import LayoutToggle from "../LayoutToggle/LayoutToggle";
import SortSettings from "../SortSettings/SortSettings";
import CountriesCount from "../CountriesCount/CountriesCount";

interface ViewBarProps {
    sortValue: string,
    setSortValue: (sortValue: string) => void;
    numberOfCountries: number,
}

const ViewBar = ({sortValue,setSortValue,numberOfCountries}: ViewBarProps) => {

    // RETURNS element to adjust/see how the data is viewed
    // - layout toggle
    // - countries count displayed
    // - sort settings

    return (
        <>
            <div className={styles.viewBar}>
                <LayoutToggle />

                <CountriesCount
                    count={numberOfCountries} />
                
                <SortSettings
                    sortValue={sortValue}
                    setSortValue={setSortValue}
                />
            </div>
        </>
    )
}

export default ViewBar