import styles from "./MenuItem.module.css"

interface MenuItemProps {
    title: string,
}

const MenuItem = ({ title }: MenuItemProps) => {

    return (
        <>
            <li className={styles.item}>
                {title}
            </li>
        </>
    )
}

export default MenuItem