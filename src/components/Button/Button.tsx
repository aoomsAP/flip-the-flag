import styles from "./Button.module.css"

interface ButtonProps {
    text: string | JSX.Element,
    onClick: () => void;
    type?: "button" | "submit" | "reset" | undefined,
    value?: string,
    title?: string,
    strong?: boolean,
    custom_classname?: string
}

const Button = ({ text, onClick, type, value, title, strong, custom_classname}: ButtonProps) => {

    return (
        <>
            <button
                className={`${styles.button} ${custom_classname ?? ""}`}
                title={title ?? ""}
                value={value ?? ""}
                type={type}
                onClick={() => onClick()}
            >
                {strong ? <strong>{text}</strong> : text}
            </button>
        </>
    )
}

export default Button