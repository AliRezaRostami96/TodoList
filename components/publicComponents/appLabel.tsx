import React from 'react';

interface AppLabelProps {
    htmlFor?: string,
    children: React.ReactNode,
    className?: string,
}
const AppLabel: React.FC<AppLabelProps> = ({ htmlFor, children, className = "" }: AppLabelProps) => {

    return (
        <label
            htmlFor={htmlFor}
            className={`text-md text-gray-700 font-semibold cursor-pointer block pb-1 ${className}`}
        >
            {children}
        </label>
    )
}

export default AppLabel;


