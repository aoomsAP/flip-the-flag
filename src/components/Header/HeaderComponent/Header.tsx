import NavMenu from "../NavComponent/Nav"
import SiteSettings from "../SiteSettings/SiteSettings/SiteSettings"
import styles from "./Header.module.css"

const Header = () => {

    // returns header, which consists of:
    // - a navigation menu
    // - a section that contains the site wide settings

    return (
        <>
            <header className={styles.header}>
                <NavMenu />
                <SiteSettings />
            </header>
        </>
    )
}

export default Header