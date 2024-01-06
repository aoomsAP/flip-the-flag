import styles from "./ViewBar.module.css"
import LayoutToggle from "../LayoutToggle/LayoutToggle";
import SortSettings from "../SortSettings/SortSettings";

interface ViewBarProps {
    sort: string,
    setSort: (sort: string) => void;
    numberOfCountries: number,
}

const ViewBar = ({sort,setSort,numberOfCountries}: ViewBarProps) => {

    // RETURNS element to adjust how the data is viewed
    // - layout toggle
    // - sort settings

    return (
        <>
            <div className={styles.viewBar}>
                <LayoutToggle />
                <SortSettings
                    sort={sort}
                    setSort={setSort}
                    numberOfCountries={numberOfCountries}    
                />
            </div>
        </>
    )
}

export default ViewBar