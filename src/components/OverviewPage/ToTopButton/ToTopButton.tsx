import styles from "./ToTopButton.module.css"

const ToTopButton = () => {

    // returns element that leads user back to the top of the page

    return (
        <>
            <a href="#top"
                className={styles.toTopButton}>
                &#65085;
            </a>
        </>
    )
}

export default ToTopButton