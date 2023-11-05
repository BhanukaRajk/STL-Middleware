import React, { useEffect } from 'react'
import RentalPacks from './RentalPacks'
import './dataPackages.css'
import { FaSyncAlt } from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'
import UnlimitedPack from './unlimitedPack'
import { addDataPackage } from '../../../api/dataPackagesApi'
import TimeBased from './TimeBased'

const DataPackages = () => {

    const RentalPacksData = [
        {
            "serviceId": "1",
            "planName": "Daily Rental Pack",
            "price": 1000,
            "duration": "30",
            "packageSize": "100",
            "daytime": "50",
            "nighttime": "50",
            "is_active": false
        },
        {
            "serviceId": "2",
            "planName": "Weekly Rental Pack",
            "price": 5000,
            "duration": "30",
            "packageSize": "500",
            "daytime": "250",
            "nighttime": "250",
            "is_active": false
        },
        {
            "serviceId": "3",
            "planName": "Monthly Rental Pack",
            "price": 10000,
            "duration": "30",
            "packageSize": "1000",
            "daytime": "500",
            "nighttime": "500",
            "is_active": false
        }
    ];

    RentalPacksData.map((data, index) => {
        addDataPackage(data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    })


    return (
        <div className='all-packages'>
            <div className="all-packs">
                <div className="one-pack">
                    <h3>Rental Packs</h3>
                    {
                        RentalPacksData.map((data, index) => {
                            return <RentalPacks serviceId={data.serviceId} nighttime={data.nighttime} daytime={data.daytime} planName={data.planName} price={data.price} duration={data.duration} packageSize={data.packageSize} />
                        })
                    }
                </div>

                <div className="one-pack mb-[50px]">
                    <h3>Anytime unlimited</h3>
                    <UnlimitedPack planName={'Youtube'} price={'1000'} duration={'30 days'} packageSize={'100'} speed={'2'} />
                    <UnlimitedPack planName={'Fun Blaster'} price={'2500'} duration={'30 days'} packageSize={'100'} speed={'5'} />
                    <UnlimitedPack planName={'FB/WhatsApp'} price={'5000'} duration={'30 days'} packageSize={'100'} speed={'10'} />
                </div>

                <div className="one-pack mb-[50px]">
                    <h3>Time based</h3>
                    <TimeBased planName={'Time based'} price={'24'} duration={'1 hours'} packageSize={'100'} speed={'2'} />
                    <TimeBased planName={'Time based'} price={'72'} duration={'4 hours'} packageSize={'100'} speed={'5'} />
                    <TimeBased planName={'Time based'} price={'120'} duration={'2 days'} packageSize={'100'} speed={'10'} />
                </div>

            </div>

        </div>


    )
}

export default DataPackages