import { useContext } from "react";
import styles from "./PageTitle.module.css"
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";

interface PageTitleProps {
    title: string | JSX.Element,
}

const PageTitle = ({title}: PageTitleProps) => {
    const { theme } = useContext(SiteSettingsContext);

    // RETURNS title wrapper
    // if theme is set to light, light background is set, otherwise dark background
    // title can be formatted as a string or as jsx

    return (
        <>
            <section className={`${styles.title_container} ${theme === "light" ? `${styles.title_container_light}` : `${styles.title_container_dark}`}`}>
                <h1 className={styles.title}>
                    {title}
                </h1>
            </section>
        </>
    )
}

export default PageTitle