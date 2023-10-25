import React from 'react'
import RentalPacks from './RentalPacks'
import './dataPackages.css'
import { FaSyncAlt } from 'react-icons/fa'
import {BiTimeFive} from 'react-icons/bi'


const DataPackages = () => {
    return (
        <div className='all-packages'>
            <div className="packs">
                <h4>Rental Packs</h4>
                <FaSyncAlt />
            </div>

            <div className="packs">
                <h4>Social Media</h4>
                <BiTimeFive />
            </div>

            <div className="packs">
                <h4>Time Based</h4>
                <BiTimeFive />
            </div>

            <div className="packs">
                <h4>Anytime</h4>
                <FaSyncAlt />
            </div>

            <div className="packs">
                <h4>Anytime Unlimited</h4>
                <FaSyncAlt />
            </div>

            <div className="packs">
                <h4>Work & Learn</h4>
                <FaSyncAlt />
            </div>

            <div className="packs">
                <h4>Unlimited</h4>
                <FaSyncAlt />
            </div>

            <div className="packs">
                <h4>Gaming</h4>
                <FaSyncAlt />
            </div>

            <div className="packs">
                <h4>Night Time</h4>
                <FaSyncAlt />
            </div>

            <div className="packs">
                <h4>Entertainment & Music</h4>
                <FaSyncAlt />
            </div>
        </div>


    )
}

export default DataPackages