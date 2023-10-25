import React from 'react'

const TImeBasedPacks = () => {
  return (
    <div className='rentalPacks'>
      <div className="details">
        <h4 className='plan-name'>{planName}</h4>
        <h5>Rs. {price} + tax</h5>
        <p className='inline-block'><TiStopwatch className='inline-block mb-1 mr-2 text-2xl' />{duration}</p>
      </div>
      <div className="data-size">
        <p><FaSignal className='inline-block mb-2 mr-3' />{packageSize} GB</p>
      </div>
      <div className="night-day-time">
        <p>Day Time: 40 GB (8am - 8pm)</p>
        <p>Night Time: 60 GB (8pm - 8am)</p>
      </div>
      <div className="activate">
        <button>Activate</button>
      </div>
    </div>
  )
}

export default TImeBasedPacks