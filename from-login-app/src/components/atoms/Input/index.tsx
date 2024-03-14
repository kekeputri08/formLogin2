import React, {FC, ChangeEvent} from "react";

interface InputPropsType {
    label: string,
    type: string ,
    value: string | number,
    name: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    
}

const Input:FC<InputPropsType> = (props) => {
    const {label, type, onChange, value, name} =props

    return(
        <>
        <div className="form-group">
          <label>{label}:</label>
          <input type={type} name={name} value={value} onChange={onChange}/>
        </div>
        </>
    )
}

export default Input