import { Link } from "react-router-dom"
import styles from "./MenuLink.module.css"

interface MenuLinkProps {
    link: string | undefined,
    title: string,
}

const MenuLink = ({ link, title }: MenuLinkProps) => {

    return (
        <>
            <li className={styles.link}>
                <Link to={link ?? ""} >
                    {title}
                </Link>
            </li>
        </>
    )
}

export default MenuLink