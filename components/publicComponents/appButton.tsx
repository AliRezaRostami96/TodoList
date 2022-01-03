import React from 'react';

interface AppButtonProps {
    type?: 'button' | 'submit' | 'reset',
    className?: string,
    styleType?: 'primary' | 'success' | 'warning' | 'danger' | 'base',
    onClick?: Function,
    children: React.ReactNode,
    disabled?: boolean
}

const defaultStyles = {
    primary: "bg-blue-800 hover:bg-blue-900 text-white",
    success: "bg-green-800 hover:bg-green-900 text-white",
    warning: "bg-yellow-500 hover:bg-yellow-600",
    danger: "bg-red-700 hover:bg-red-800 text-white",
    base: "border-2 border-gray-300 hover:border-gray-400 text-gray-500"
}

const AppButton: React.FunctionComponent<AppButtonProps> = ({ type = "button", className = "", styleType = "primary", onClick, children, disabled = false }: AppButtonProps) => {
    return (
        <button
            type={type}
            className={`transition-all py-2 px-4 rounded-2xl ${defaultStyles[styleType]} disabled:bg-gray-300 disabled:text-gray-500 ${className}`}
            onClick={() => onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default AppButton;