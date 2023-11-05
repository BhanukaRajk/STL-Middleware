import { Button, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { activateRoamingPack, getRoamingPacks } from '../../api/roamingApi';

const dataww = [
    {
        value: 'Argentina',
        label: 'Argentina',
    },
    {
        value: 'Australia',
        label: 'Australia',
    },
    {
        value: 'USA',
        label: 'USA',
    },
    {
        value: 'UK',
        label: 'UK',
    },
    {
        value: 'Kuwait',
        label: 'Kuwait',
    },
    {
        value: 'Italy',
        label: 'Italy',
    },
    {
        value: 'India',
        label: 'India',
    },
];

const NewPackage = () => {

    const [country, setCountry] = useState('');
    const [data, setData] = useState([]);

    const handleChange = (value) => {
        setCountry(value);
    }

    const getData = async () => {
        const res = await getRoamingPacks();
        if (res.status == 200) {
            setData(res.data)
            setCountry(res.data[0].country);
        };
    }

    const ActivatePack = async () => {
        const res = await activateRoamingPack('65478766ddfeb4a84f3c9e57', data.find((item) => country == item.country)._id);
        if (res.status == 200) {
            alert('Activated');
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='text-center'>
            <h1 className='text-xl underline font-bold text-blue-950'>Buy New Package</h1>
            {data.length > 0 ? <form className='my-8'>
                <div className='text-base mb-2'>
                    <h2>One month package</h2>
                </div>
                <div className='p-5'>
                    {/* <label htmlFor="Country">Details : </label> */}
                    <div className='text-gray-600 text-lg'>
                        <p>{data.find((item) => country == item.country).duration}</p>
                    </div>
                </div>
                <div className='mb-5'>
                    <label htmlFor="Country">Select Your Country : </label>
                    <Select
                        defaultValue={data[0].value}
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={data.map((item) => ({ value: item.country, label: item.country }))}
                    />
                </div>
                <button onClick={ActivatePack} type='button' className='bg-blue-950 text-white rounded-md p-2'>Activate</button>
            </form> : <h1 className='text-sm  text-blue-950'>No Packages Available</h1>}
        </div>
    )
}

export default NewPackage