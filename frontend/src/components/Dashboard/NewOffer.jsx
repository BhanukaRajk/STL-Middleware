import React from 'react'

const NewOffer = ({ children, title, buttonText }) => {
    return (
        <div className='flex flex-col  md:h-44 p-5 md:w-44 h-48 w-48 bg-slate-900/10 rounded-lg justify-between m-2 border-2 hover:border-[#001F54]/30 border-transparent'>
            <h1 className='font-bold'>{title}</h1>
            <div className='flex flex-col my-3'>
                {children}
            </div>
            <button className='py-1 px-2 text-white rounded bg-[#001F54]'>{buttonText}</button>
        </div>
    )
}

export default NewOffer