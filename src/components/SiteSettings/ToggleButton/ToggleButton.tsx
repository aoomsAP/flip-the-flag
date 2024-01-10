import styles from "./ToggleButton.module.css"

interface ToggleButtonProps {
    onClick: () => void;
    condition: boolean;
    option1: JSX.Element;
    option2: JSX.Element;
    title: string;
}

const ToggleButton = ({ onClick, condition, option1, option2, title }: ToggleButtonProps) => {

    // RETURNS button that toggles between two options

    return (
        <>
            <button className={styles.toggle_button}
                title={title}
                onClick={onClick}>
                {condition
                    ? option1
                    : option2}
            </button>
        </>
    )
}

export default ToggleButton