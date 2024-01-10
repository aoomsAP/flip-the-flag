import { NavLink } from "react-router-dom"
import styles from "./MenuNavLink.module.css"

interface MenuNavLinkProps {
    link: string | undefined,
    title: string,
}

const MenuNavLink = ({ link, title }: MenuNavLinkProps) => {

    return (
        <>
            <li className={styles.link}>
                <NavLink to={link ?? ""} className={({ isActive }) => isActive ? "active" : "notactive"}>
                    {title}
                </NavLink>
            </li>
        </>
    )
}

export default MenuNavLink