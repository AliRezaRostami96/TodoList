import React from 'react';
import HeaderComponent from './header';
import SideMenuComponent from './side-menu';

interface LayoutProps {
    children: React.ReactNode
}

const LayoutComponent: React.FunctionComponent<LayoutProps> = ({ children }: LayoutProps) => {

    return (
        <div className='h-screen overflow-hidden bg-gray-50'>
            <HeaderComponent></HeaderComponent>
            <div className='container mx-auto flex mt-4'>
                <div className='w-2/12 p-2 text-sm'>
                    <SideMenuComponent />
                </div>
                <div className='w-10/12 p-2 overflow-y-auto'>
                    {children}
                </div>
            </div>
        </div>
    )

}

export default LayoutComponent;