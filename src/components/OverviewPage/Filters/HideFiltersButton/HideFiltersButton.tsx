import { useContext } from "react";
import { SiteSettingsContext } from "../../../../contexts/SiteSettingsContext";
import styles from "./HideFiltersButton.module.css"

interface HideFiltersButtonProps {
    setShowFilters: (show: boolean) => void;
}

const HideFiltersButton = ({setShowFilters}: HideFiltersButtonProps) => {
    const { lexicon } = useContext(SiteSettingsContext);

    // returns a button that hides the Filters element
    // it also scrolls to the top of the page

    return (
        <>
            <button
                className={styles.hideButton}
                onClick={() => {
                    setShowFilters(false);
                    window.scrollTo(0, 0);
                }}
            >
                {lexicon.close_filters}
            </button>
        </>
    )
}

export default HideFiltersButton