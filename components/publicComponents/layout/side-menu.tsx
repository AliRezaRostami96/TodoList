import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import AppLink from '../appLink';

const SideMenuComponent: React.FunctionComponent = () => {
    return (
        <>
            <AppLink
                href='/boards'
                className='font-bold block py-1 px-2 rounded-md transition-all bg-blue-100 text-blue-500'
            >
                <FontAwesomeIcon icon={faClipboardList} className='mr-2' />
                Boards
            </AppLink>

            <div className='flex justify-between mt-2 py-1 px-2'>
                <span className='flex items-center'>
                    Workspaces
                </span>
                <span className='cursor-pointer text-lg font-bold'>+</span>
            </div>
        </>
    )
}

export default SideMenuComponent;