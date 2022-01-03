import React from 'react';

interface AppCheckBoxProps {
    id: string,
    children: React.ReactNode,
    className?: string,
    check: boolean,
    setState: Function,
    callback?: Function

}

const AppCheckBox: React.FunctionComponent<AppCheckBoxProps> = ({ id, children, className, check, setState, callback }: AppCheckBoxProps) => {

    const onClickInput = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.checked);
        setState(e.currentTarget.checked);
        callback ? callback(e) : "";
    }
    return (
        <>
            <input
                className="h-4 w-4 border border-gray-300 rounded-sm focus:outline-none mt-1 float-right ml-2 cursor-pointer"
                type="checkbox"
                checked={check}
                id={id}
                onChange={onClickInput}
            />
            {children}
        </>
    )
}

export default AppCheckBox;