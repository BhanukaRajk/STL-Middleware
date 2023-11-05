import React from 'react'
import './rentalPacks.css'
import { TiStopwatch } from 'react-icons/ti'
import { FaSignal } from 'react-icons/fa'
import { insertDataPackage } from '../../../api/dataPackagesApi'

const RentalPacks = ({serviceId, planName, price, duration, packageSize, daytime, nighttime }) => {

  const activePack = () => {
    const data = {
      "customerId": "1",
      "serviceId":  serviceId,
      "planName": planName,
      "price": price,
      "duration": duration,
      "packageSize": packageSize,
      "daytime": daytime,
      "nighttime": nighttime,
      "is_active": true
    }
    insertDataPackage(data)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <div className='rentalPacks mb-12'>
      <div className="details">
        <h4 className='plan-name'>{planName}</h4>
        <h5>Rs. {price} + tax</h5>
        <p className='inline-block'><TiStopwatch className='inline-block mb-1 mr-2 text-2xl' />{duration} days</p>
      </div>
      <div className="data-size">
        <p><FaSignal className='inline-block mb-2 mr-3' />{packageSize} GB</p>
      </div>
      <div className="night-day-time">
        <p>Day Time: {daytime} GB (8am - 8pm)</p>
        <p>Night Time: {nighttime} GB (8pm - 8am)</p>
      </div>
      <div className="activate">
        <button onClick={(e) => activePack(e)}>Activate</button>
      </div>
    </div>
  )
}

export default RentalPacks