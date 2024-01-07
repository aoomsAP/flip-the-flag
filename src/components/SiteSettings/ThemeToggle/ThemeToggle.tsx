import { useContext } from "react";
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext";
import styles from "./ThemeToggle.module.css"

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(SiteSettingsContext);

    // RETURNS button that switches theme from dark to light with each click
    // - when set to light, the icon will be a sun
    // - when set to dark, the icon will be a moon

    return (
        <>
            <button className={styles.themeButton}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "light"
                    ? <i className="bi bi-sun"></i>
                    : <i className="bi bi-moon"></i>}
            </button>
        </>
    )
}

export default ThemeToggle