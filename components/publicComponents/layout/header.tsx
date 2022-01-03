import React, { useState } from 'react';
import AppInput from '../appInput';

const HeaderComponent: React.FunctionComponent = () => {
    const [search, setSearch] = useState<string>("");

    return (
        <div className='bg-light text-on-light py-1 px-2 flex justify-between'>
            <div className='flex items-center'>
                <span className="material-icons text-xl">apps</span>
                <span className='px-1 cursor-pointer'>Trello</span>
                <span className='px-1 cursor-pointer'>Workspaces</span>
                <span className='px-1 cursor-pointer'>Recent</span>
                <span className='px-1 cursor-pointer'>Starred</span>
                <span className='px-1 cursor-pointer'>Templates</span>
                <span className='px-1 cursor-pointer'>create</span>
            </div>
            <div className='flex items-center overflow-hidden'>
                <div>
                    <AppInput
                        type='search'
                        value={search}
                        setState={setSearch}
                        placeholder='search'
                        className='text-gray-800 w-60'
                    />
                </div>
                <div>
                    <span className="material-icons cursor-pointer text-center w-8 align-middle ml-2">
                        report_gmailerrorred_icon
                    </span>
                </div>
                <div>
                    <span className="material-icons cursor-pointer text-center w-8 align-middle">
                        notifications_active_icon
                    </span>
                </div>
                <div>
                    <span className='rounded-full flex justify-center items-center w-8 h-8 bg-slate-500 border border-black cursor-pointer'>
                        AR
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;