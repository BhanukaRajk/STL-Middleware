import React from 'react'
import './budgetPack.css'
import { TiStopwatch } from 'react-icons/ti'
import { FaSignal } from 'react-icons/fa'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import {WiNightAltCloudy} from 'react-icons/wi'
import {AiOutlineGift} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {HiOutlineMail} from 'react-icons/hi'


const BlasterPack = ({ planName, price, call, sms, nightTime ,fourGB, night }) => {
    return (
        <div className='rentalPacks'>
            <div className="details">
                <h4 className='plan-name'>{planName}</h4>
                <h5>Rs. {price} + tax</h5>
                <p className='inline-block'><TiStopwatch className='inline-block mb-1 mr-2 text-2xl' />1 day (recurring)</p>
            </div>
            <div className="data-size">
                <p><BiPhoneCall className='inline-block mb-1'/> {call} min</p>
                <p><HiOutlineMail className='inline-block mb-1'/> {sms} sms</p>
                <p><WiNightAltCloudy className='inline-block'/> {nightTime} MB</p>
            </div>
            <div className="data-size bonus">
                <p><AiOutlineGift className='inline-block mb-1'/> {fourGB} MB (4G)</p>
                <p><AiOutlineGift className='inline-block mb-1'/> {night} MB (Night)</p>
            </div>
            <div className="activate">
                <button>Activate</button>
            </div>
        </div>
    )
}

export default BlasterPack