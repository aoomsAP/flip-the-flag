import { useContext } from "react";
import { SiteSettingsContext } from "../../../../contexts/SiteSettingsContext";
import styles from "./ThemeToggle.module.css"

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(SiteSettingsContext);

    // returns button that switches theme from dark to light with each click
    // when set to dark, the icon will be a moon
    // when set to light, the icon will be a sun

    return (
        <>
            <button className={styles.themeButton}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "light" ? <>&#9788;</> : <>&#9790;</>}
            </button>
        </>
    )
}

export default ThemeToggle