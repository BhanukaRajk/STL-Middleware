import React from 'react'
import './budgetPack.css'
import { TiStopwatch } from 'react-icons/ti'
import { FaSignal } from 'react-icons/fa'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import {WiNightAltCloudy} from 'react-icons/wi'
import {AiOutlineGift} from 'react-icons/ai'

const BlasterPack = ({ planName, price, duration, packageSize }) => {
    return (
        <div className='rentalPacks'>
            <div className="details">
                <h4 className='plan-name'>{planName}</h4>
                <h5>Rs. {price} + tax</h5>
                <p className='inline-block'><TiStopwatch className='inline-block mb-1 mr-2 text-2xl' />1 day (recurring)</p>
            </div>
            <div className="data-size">
                <p><BiSolidPhoneCall className='inline-block mb-1'/> 15min</p>
                <p><MdEmail className='inline-block mb-1'/> 50 sms</p>
                <p><WiNightAltCloudy className='inline-block'/> 50 MB</p>
            </div>
            <div className="data-size bonus">
                <p><AiOutlineGift className='inline-block mb-1'/> 10 mins</p>
            </div>
            <div className="activate">
                <button>Activate</button>
            </div>
        </div>
    )
}

export default BlasterPack