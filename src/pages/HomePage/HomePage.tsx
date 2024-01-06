import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import styles from "./HomePage.module.css";

// components
import CountrySpotlight from "../../components/CountrySpotlight/CountrySpotlight";

const HomePage = () => {
    const { theme, lexicon } = useContext(SiteSettingsContext);

    // RETURNS home page, with:
    // - a H1 title
    // - an intro paragraph
    // - a country spotlight box

    // if the theme is light, then the light background image will be implemented, otherwise the dark background

    return (
        <>
            <main className={`${styles.main} ${theme === "light" ? `${styles.bgLight}` : `${styles.bgDark}`}`}>
                
                <section className={styles.titleContainer}>
                    <h1>{lexicon.project_title}</h1>
                    <p>{lexicon.home_intro}</p>
                </section>

                <CountrySpotlight/>

            </main>
        </>
    )
}

export default HomePage;