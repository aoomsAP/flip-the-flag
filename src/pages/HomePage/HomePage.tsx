import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import styles from "./HomePage.module.css";

// components
import { Link } from "react-router-dom";
import CountrySpotlight from "../../components/HomePage/CountrySpotlight/CountrySpotlight";

const HomePage = () => {
    const { theme, lexicon } = useContext(SiteSettingsContext);

    // the home page conists of a H1 title, an intro paragraph, and a country spotlight box
    // if the theme is light, then the light background image will be implemented, otherwise the dark background

    return (
        <>
            <main className={`${styles.main} ${theme === "light" ? `${styles.bgLight}` : `${styles.bgDark}`}`}>
                <section className={styles.titleContainer}>
                    <h1>{lexicon.project_title}</h1>
                    <p>{lexicon.home_intro_1} {lexicon.home_intro_2} <strong>{lexicon.project_title}</strong> {lexicon.home_intro_3} <Link to="/countries">{lexicon.home_intro_overview}</Link> {lexicon.home_intro_4}</p>
                </section>
                <CountrySpotlight/>
            </main>
        </>
    )
}

export default HomePage;