import styles from "./ViewBar.module.css"
import LayoutToggle from "../LayoutToggle/LayoutToggle";
import SortSettings from "../SortSettings/SortSettings";

interface ViewBarProps {
    sortValue: string,
    setSortValue: (sortValue: string) => void;
    numberOfCountries: number,
}

const ViewBar = ({sortValue,setSortValue,numberOfCountries}: ViewBarProps) => {

    // RETURNS element to adjust how the data is viewed
    // - layout toggle
    // - sort settings

    return (
        <>
            <div className={styles.viewBar}>
                <LayoutToggle />
                <SortSettings
                    sortValue={sortValue}
                    setSortValue={setSortValue}
                    numberOfCountries={numberOfCountries}    
                />
            </div>
        </>
    )
}

export default ViewBar