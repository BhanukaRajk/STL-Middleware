import React from 'react'
import './unlimitedPacks.css'
import { TiStopwatch } from 'react-icons/ti'
import { FaSignal } from 'react-icons/fa'
import {LiaFastBackwardSolid} from 'react-icons/lia'

const UnlimitedPack = ({ planName, price, duration, packageSize }) => {
    return (
        <div className='rentalPacks'>
            <div className="details">
                <h4 className='plan-name'>{planName}</h4>
                <h5>Rs. {price} + tax</h5>
                <p className='inline-block'><TiStopwatch className='inline-block mb-1 mr-2 text-2xl' />{duration}</p>
            </div>
            <div className="data-size">
                <p><LiaFastBackwardSolid className='inline-block mb-2 mr-3' />2 Mbps(Speed)</p>
            </div>
            <div className="description">
                <p>Downloading on Torrent, Telegram or other identifiable </p>
                <p>movie downloading will be restricted to 1Mbps.</p>
            </div>
            <div className="activate">
                <button>Activate</button>
            </div>
        </div>
    )
}

export default UnlimitedPack