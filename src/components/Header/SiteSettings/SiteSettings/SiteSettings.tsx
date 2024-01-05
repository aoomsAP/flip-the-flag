import LanguageToggle from "../LanguageToggle/LanguageToggle"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import styles from "./SiteSettings.module.css"

const SiteSettings = () => {

    // returns the site settings:
    // - a language toggle
    // - a theme toggle

    return (
        <>
            <div className={styles.settings}>
                <LanguageToggle />
                <ThemeToggle />
            </div>
        </>
    )
}

export default SiteSettings