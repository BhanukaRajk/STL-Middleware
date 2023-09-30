import React from 'react'

const ProgressContainer = ({ children, title }) => {
    return (
        <div className='my-2 shadow-lg rounded-xl px-6 py-6 mx-5'>
            <div className='flex justify-between flex-col'>
                <div className='text-[#001F54] border-l-8 pl-3 border-[#001F54] font-semibold'>{title}</div>
                <div className='p-3 w-[80%] mx-auto text-sm'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ProgressContainer