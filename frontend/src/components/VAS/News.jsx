// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { getNewsServices } from '../../api/vasApi';
import Category from "./Category";

// const NewsData = {
//     category: {
//         service: "News",
//         description: `News With Sri Tel News Alert Service, you can now 
//                             keep with all the latest news on anything from market, 
//                             local and worldwide events, security alerts and more.
//                         `,
//     },
//     options: [
//         {
//             name: "Ada Derana English News",
//             logo: "../../assets/logos/adaderana-logo.png",
//             daily: "Rs. 2 + tax per day",
//             monthly: "Rs. 30 + tax per monthly",
//             dact: "SMS ACT ADE1 to 1313",
//             mact: "SMS ACT ADE to 1313",
//             ddeact: "SMS DEACT ADE1 to 1313",
//             mdeact: "SMS DEACT ADE to 1313",
//         },
//         {
//             name: "Ada Derana Sinhala News",
//             logo: "../../assets/logos/adaderana-logo.png",
//             daily: "Rs. 2 + tax per day",
//             monthly: "Rs. 30 + tax per monthly",
//             dact: "SMS ACT ADS1 to 1313",
//             mact: "SMS ACT ADS to 1313",
//             ddeact: "SMS DEACT ADS1 to 1313",
//             mdeact: "SMS DEACT ADS to 1313",
//         },
//         {
//             name: "Lakhanda News",
//             logo: "../../assets/logos/lakhanda-logo.png",
//             daily: "Rs. 2 + tax per day",
//             monthly: "Rs. 30 + tax per monthly",
//             dact: "SMS ACT LKD1 to 1313",
//             mact: "SMS ACT LKD to 1313",
//             ddeact: "SMS DEACT LKD1 to 1313",
//             mdeact: "SMS DEACT LKD to 1313",
//         },
//     ],
// };

const News = () => {

    const [services, setServices] = useState({});
    
    useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await getNewsServices();
				setServices(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchServices();
	}, []);


    return (
        <>
            <Category data={services} />
        </>
    );
};

export default News;