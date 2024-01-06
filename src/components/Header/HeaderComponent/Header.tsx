import Nav from "../NavComponent/Nav"
import SiteSettings from "../SiteSettings/SiteSettings/SiteSettings"
import styles from "./Header.module.css"

const Header = () => {

    // RETURNS header, with:
    // - a navigation element
    // - a section that contains the site settings

    return (
        <>
            <header className={styles.header}>
                <Nav />
                <SiteSettings />
            </header>
        </>
    )
}

export default Header