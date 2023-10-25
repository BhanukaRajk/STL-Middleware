import React from 'react'
import './rentalPacks.css'
import {TiStopwatch} from 'react-icons/ti'
import {FaSignal} from 'react-icons/fa'

const RentalPacks = ({planName, price, duration, packageSize}) => {
  return (
    <div className='rentalPacks'>
      <div className="details">
        <h4 className='plan-name'>{planName}</h4>
        <h5>Rs. {price} + tax</h5>
        <p className='inline-block'><TiStopwatch className='inline-block mb-1 mr-2 text-2xl'/>{duration}</p>
      </div>
      <div className="data-size">
        <p><FaSignal className='inline-block mb-2 mr-3'/>{packageSize} GB</p>
      </div>
    </div>
  )
}

export default RentalPacks