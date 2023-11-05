import React from 'react'

const RoamingCard = ({ price, active_date, duration, remaining, description, country, progress }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-2 m-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">{country}</h2>
                <span className="text-gray-500 text-sm">{active_date}</span>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <span className="text-lg font-medium">${price}</span>
            <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">{remaining} mins remaining</span>
                <span className="text-gray-500 text-sm">{duration} mins total</span>
            </div>
            <progress value={remaining} max={duration} className="w-full h-2 mt-4"></progress>
        </div>
    );
};

export default RoamingCard