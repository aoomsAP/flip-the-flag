import styles from "./ToTopButton.module.css"

const ToTopButton = () => {

    // RETURNS element that leads user back to the top of the page

    return (
        <>
            <a href="#top"
                className={styles.to_top_button}>
                <i className="bi bi-chevron-bar-up"></i>
            </a>
        </>
    )
}

export default ToTopButton