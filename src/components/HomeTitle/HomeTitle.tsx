import styles from "./HomeTitle.module.css";

interface HomeTitleProps {
    title: string,
    intro: string,
}

const HomeTitle = ({title, intro}: HomeTitleProps) => {

    return (
        <>
            <section className={styles.title_container}>
                <h1>{title}</h1>
                <p>{intro}</p>
            </section>
        </>
    )
}

export default HomeTitle