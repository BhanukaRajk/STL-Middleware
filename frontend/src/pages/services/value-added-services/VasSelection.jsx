import React from 'react'
import { Tabs } from 'antd';
import Sport from '../../../components/VAS/Sport';
import News from '../../../components/VAS/News';
import Games from '../../../components/VAS/Gaming';


const VasSelection = () => {

    const items = [
        {
            key: "1",
            label: "Sport",
            children: <Sport />,
        },
        {
            key: "2",
            label: "News",
            children: <News />,
        },
        {
            key: "3",
            label: "Gaming",
            children: <Games />,
        },
        {
            key: "4",
            label: "Video",
            children: <Games />,
        },
        {
            key: "5",
            label: "Lifestyle",
            children: <Sport />,
        },
    ];

    const onChange = (key) => {
        console.log(key);
    }


    return (
        <Tabs
            defaultActiveKey="1"
            centered
            items={items}
            onChange={onChange}
        />
    )
}

export default VasSelection