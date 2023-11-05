import React from 'react'
import './unlimitedPacks.css'
import { TiStopwatch } from 'react-icons/ti'
import { FaSignal } from 'react-icons/fa'
import { LiaFastBackwardSolid } from 'react-icons/lia'

const TimeBased = ({ planName, price, duration, packageSize, speed }) => {
    return (
        <div className='rentalPacks'>
            <div className="details">
                <h4 className='plan-name'>{planName}</h4>
                <h5>Rs. {price} + tax</h5>
                <p className='inline-block'><TiStopwatch className='inline-block mb-1 mr-2 text-2xl' />{duration}</p>
            </div>
            {/* <div className="data-size">
                <p><LiaFastBackwardSolid className='inline-block mb-2 mr-3' />{speed} Mbps (Speed)</p>
            </div> */}
            <div className="description">
                <p>No speed limited up to 1 GB. </p>
                <p>512 kbps Speed limit after {price/8} GB to {price/12} GB.</p>
                <p>64 kbps Speed limit after {price/20} GB until the package validate expiry.</p>
            </div>
            <div className="activate">
                <button>Activate</button>
            </div>
        </div>
    )
}

export default TimeBased