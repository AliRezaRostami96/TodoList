import React from 'react';

interface AppInputProps {
    value: string | number,
    placeholder?: string,
    type: string,
    name?: string,
    id?: string,
    className?: string,
    setState: Function,
    callback?: Function
}
const AppInput: React.FC<AppInputProps> = ({ value, placeholder, type, name, id, className = "", setState, callback }: AppInputProps) => {

    const inputOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState(e.currentTarget.value);
        if (callback) {
            callback(e);
        }
    }
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            id={id}
            className={`border-2 border-solid border-gray-300 rounded-md p-1 w-full outline-none ${className}`}
            onChange={(e) => inputOnChange(e)}
        />
    )
}

export default AppInput;