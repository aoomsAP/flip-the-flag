import React from "react";
import { IRadioOption } from "../../../types";

// RETURNS fieldset to radio toggle between options
// required props:
// - legend: legend/title for fieldset
// - name: name for the radio buttons
// - options: a label, value, the condition for the button to be considered checked, whether the button is disabled (optional) 
// - onChange: what needs to happen when the radio buttons are changed

interface RadioToggleProps {
    legend: string,
    name: string,
    options: IRadioOption[],
    onChange: (value: string) => void;
}

const RadioToggle = ({ legend, name, options, onChange }: RadioToggleProps) => {

    const radioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    return (
        <>
            <fieldset>
                <legend>{legend}</legend>
                {options.map(option => {
                    return <React.Fragment key={option.value}>
                        <input type="radio"
                            name={name}
                            value={option.value}
                            checked={option.checked_condition}
                            onChange={radioChange}
                            disabled={option.disabled}
                        />
                        {option.label}
                        <br />
                    </React.Fragment>
                })}
            </fieldset>
        </>
    )
}

export default RadioToggle