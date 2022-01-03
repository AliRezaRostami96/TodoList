import Link from 'next/link';
import React from 'react';

interface AppLinkProps {
    children: React.ReactNode,
    href: string,
    className?: string
}

const AppLink: React.FunctionComponent<AppLinkProps> = ({ children, href, className = "" }: AppLinkProps) => {
    return (
        <Link href={href}>
            <a className={`cursor-pointer ${className}`}>
                {children}
            </a>
        </Link>
    )
}

export default AppLink;