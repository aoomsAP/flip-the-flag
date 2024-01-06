import { useContext } from "react"
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext"
import MenuLink from "../../Menu/MenuLink/MenuLink"
import styles from "./Nav.module.css"

const Nav = () => {
    const { lexicon } = useContext(SiteSettingsContext)

    // RETURNS nav, with:
    // - a menu, with two links

    return (
        <>
            <nav className={styles.nav} >
                <menu className={styles.menu}>
                    <MenuLink link="/" title={lexicon.nav_home} />
                    <MenuLink link="/countries" title={lexicon.nav_countries} />
                </menu>
            </nav>
        </>
    )
}

export default Nav