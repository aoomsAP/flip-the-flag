import { useContext } from "react";
import styles from "./PageTitle.module.css"
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";

interface PageTitleProps {
    title: string | JSX.Element,
}

const PageTitle = ({title}: PageTitleProps) => {
    const { theme } = useContext(SiteSettingsContext);

    // returns title wrapper section
    // if theme is set to light, light background is set, otherwise dark background
    // title can be formatted as a string or as jsx

    return (
        <>
            <section className={`${styles.titleContainer} ${theme === "light" ? `${styles.titleContainerLight}` : `${styles.titleContainerDark}`}`}>
                <h1 className={styles.title}>
                    {title}
                </h1>
            </section>
        </>
    )
}

export default PageTitle