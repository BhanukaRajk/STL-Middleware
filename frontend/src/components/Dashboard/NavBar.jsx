import React from 'react'
import { IoNotificationsSharp } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
    return (
        <nav className='flex sticky top-0 z-50 justify-between py-6 bg-gray-100 rounded-es-2xl rounded-ee-2xl text-[#001F54] shadow-lg'>
            <div className='py-1 px-6 font-bold select-none'>
                SRI CARE
            </div>
            <div className='flex'>
                <div className='p-2 hover:bg-[#001F54] rounded-xl mx-4 hover:text-white text-[#001F54] transition-all'>
                    <IoNotificationsSharp className='text-lg' />
                </div>
                <div className='p-2 hover:bg-[#001F54]  rounded-xl mx-4 hover:text-white text-[#001F54] transition-all'>
                    <FaBars className='text-lg' />
                </div>
            </div>
        </nav>
    )
}

export default NavBar