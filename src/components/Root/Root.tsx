import { Outlet } from "react-router-dom"
import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import { IMenuItem } from "../../types";
import "./Root.css"

// components
import Nav from "../Nav/Nav";
import SiteSettings from "../SiteSettings/SiteSettings/SiteSettings";
import Menu from "../Menu/Menu/Menu";


const Root = () => {
    const { lexicon } = useContext(SiteSettingsContext);

    const footerItems: IMenuItem[] = [
        { type: "item", text: `${lexicon.footer_createdfor} AP Hogeschool` },
        { type: "link", text: "Github", url: "https://github.com/AP-G-2PRO-Webframeworks/project-aoomsAP" },
    ]

    const navItems: IMenuItem[] = [
        { type: "navlink", text: lexicon.nav_home, url: "/" },
        { type: "navlink", text: lexicon.nav_countries, url: "/countries" },
    ]

    // ROOT, with:
    // - HEADER (nav & site settings): common
    // - MAIN: individual "pages"
    // - FOOTER: common

    return (
        <>
            <header>
                <Nav navItems={navItems} />
                <SiteSettings />
            </header>

            <Outlet />

            <footer>
                <Menu items={footerItems} />
            </footer>
        </>
    )
}

export default Root;