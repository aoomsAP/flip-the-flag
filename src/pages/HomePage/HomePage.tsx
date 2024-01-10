import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import styles from "./HomePage.module.css";

// components
import CountrySpotlight from "../../components/CountrySpotlight/CountrySpotlight";
import HomeTitle from "../../components/HomeTitle/HomeTitle";

const HomePage = () => {
    const { theme, lexicon } = useContext(SiteSettingsContext);

    // RETURNS home page, with:
    // - a H1 title + intro component
    // - a country spotlight box

    // if the theme is light, then the light background image will be implemented, otherwise the dark background

    return (
        <>
            <main className={`${styles.main} ${theme === "light" ? `${styles.bg_light}` : `${styles.bg_dark}`}`}>

                <HomeTitle
                    title={lexicon.project_title}
                    intro={lexicon.home_intro}
                />

                <CountrySpotlight />

            </main>
        </>
    )
}

export default HomePage;