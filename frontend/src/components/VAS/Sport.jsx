// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { getSportServices } from '../../api/vasApi';
import Category from "./Category";

// const SportData = {
//     category: {
//         service: "Sports",
//         description: "Get the live updates to your phone with Sri Tel Sports services.",
//     },
//     options: [
//         {
//             name: "Cricket League Game IVR",
//             logo: "../../assets/logos/ivr-logo.png",
//             desc: "CLeague Live Cricket Alerts is a SMS serivce, auto renewed daily. Terms and Conditions apply.",
//             daily: "Rs. 2 + tax per day",
//             monthly: "Rs. 30 + tax per monthly",
//             dact: "SMS ACT CRICKET1 to 1313",
//             mact: "SMS ACT CRICKET to 1313",
//             ddeact: "SMS DEACT CRICKET1 to 1313",
//             mdeact: "SMS DEACT CRICKET to 1313",
//         },
//         {
//             name: "SLC Live Cricket Alerts",
//             logo: "../../assets/logos/slc-logo.png",
//             desc: "SLC Live Cricket Alerts is a SMS serivce, auto renewed daily. Terms and Conditions apply.",
//             daily: "Rs. 2 + tax per day",
//             monthly: "Rs. 30 + tax per monthly",
//             dact: "SMS ACT SLC1 to 1313",
//             mact: "SMS ACT SLC to 1313",
//             ddeact: "SMS DEACT SLC1 to 1313",
//             mdeact: "SMS DEACT SLC to 1313",
//         },
//         {
//             name: "Papare Cricket Alerts",
//             logo: "../../assets/logos/papare-logo.png",
//             desc: "Papare.lk Cricket Alerts is a SMS serivce, auto renewed daily. Terms and Conditions apply.",
//             daily: "Rs. 2 + tax per day",
//             monthly: "Rs. 30 + tax per monthly",
//             dact: "SMS ACT PCA1 to 1313",
//             mact: "SMS ACT PCA to 1313",
//             ddeact: "SMS DEACT PCA1 to 1313",
//             mdeact: "SMS DEACT PCA to 1313",
//         },
//     ],
// };

const Sport = () => {

	const [services, setServices] = useState({});

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await getSportServices();
				setServices(response.data);
				console.log(response.data);
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

export default Sport;