import { NavLink } from "react-router-dom"
import styles from "./MenuLink.module.css"

interface MenuLinkProps {
    link: string,
    title: string,
}

const MenuLink = ({ link, title }: MenuLinkProps) => {

    return (
        <>
            <li className={styles.item}>
                <NavLink to={link} className={({ isActive }) => isActive ? "active" : "notactive"}>
                    {title}
                </NavLink>
            </li>
        </>
    )
}

export default MenuLink