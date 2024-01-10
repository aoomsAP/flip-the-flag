import React from "react"
import { IMenuItem } from "../../../types"
import styles from "./Menu.module.css"

// reusable menu components
import MenuItem from "../MenuItem/MenuItem"
import MenuLink from "../MenuLink/MenuLink"
import MenuNavLink from "../MenuNavLink/MenuNavLink"

interface MenuProps {
    items: IMenuItem[]
}

const Menu = ({ items }: MenuProps) => {

    // RETURNS a menu
    // requires array of menu items of the type IMenuItem (type, text, and optional url)
    // depending on the type, the menu will include a MenuItem, MenuLink or MenuNavLink

    return (
        <>
            <menu className={styles.menu}>
                {items.map((item, i) => {
                    return <React.Fragment key={i}>

                        {item.type === "item" &&
                            <MenuItem title={item.text} />}
                        {item.type === "link" &&
                            <MenuLink link={item.url} title={item.text} />}
                        {item.type === "navlink" &&
                            <MenuNavLink link={item.url} title={item.text} />}

                    </React.Fragment>
                })}
            </menu>
        </>
    )
}

export default Menu