import { ISelectOption } from "../../types";
import styles from "./Select.module.css"

interface SelectProps {
    name: string,
    id: string,
    options: ISelectOption[],
    onChange: (value: string) => void,
    select_value?: string,
}

const Select = ({ name, id, options, onChange, select_value }: SelectProps) => {

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    }

    return (
        <>
            <select
                className={styles.select}
                name={name}
                id={id}
                onChange={selectChange}
                value={select_value}>

                {options.map(option => {
                    return <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                })}

            </select>
        </>
    )
}

export default Select