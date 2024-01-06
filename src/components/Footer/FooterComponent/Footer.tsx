import FooterMenu from "../FooterMenu/FooterMenu"
import styles from "./Footer.module.css"

const Footer = () => {

    // RETURNS a footer
    // in this case, it only consists of a single menu of links

    return (
        <>
            <footer className={styles.footer}>
                <FooterMenu />
            </footer>
        </>
    )
}

export default Footer