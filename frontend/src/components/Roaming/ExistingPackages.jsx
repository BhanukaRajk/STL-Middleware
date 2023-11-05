import React, { useEffect, useState } from 'react'
import RoamingCard from './RoamingCard'
import { getRoamingData } from '../../api/roamingApi'

const ExistingPackages = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await getRoamingData('65478766ddfeb4a84f3c9e57');
        if (res.status == 200) setData(res.data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='text-center'>
            {data?.length > 0 ? data.map((item) => (
                <RoamingCard
                    price={item.service.price}
                    active_date={""}
                    duration={item.service.duration}
                    remaining={item.remaining_duration}
                    country={item.service.country}
                />)) : <h1 className='text-sm  text-blue-950'>No Packages Available</h1>}
        </div>
    )
}

export default ExistingPackages