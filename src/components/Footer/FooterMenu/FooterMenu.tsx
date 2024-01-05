import { useContext } from "react"
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext"
import MenuLink from "../../Menu/MenuLink/MenuLink"
import MenuItem from "../../Menu/MenuItem/MenuItem"
import styles from "./FooterMenu.module.css"

const FooterMenu = () => {
    const { lexicon } = useContext(SiteSettingsContext)

    // returns footer menu
    // contains one regular item and one link

    return (
        <>
            <menu className={styles.menu}>
                <MenuItem title={`${lexicon.footer_createdfor} AP Hogeschool`} />
                <MenuLink link="https://github.com/AP-G-2PRO-Webframeworks/project-aoomsAP" title="Github" />
            </menu>
        </>
    )
}

export default FooterMenu