import Category from "./Category";

const NewsData = [
    {
        category: {
            service: "News",
            description: `News With Sri Tel News Alert Service, you can now 
                            keep with all the latest news on anything from market, 
                            local and worldwide events, security alerts and more.
                        `,
        },
        options: [
            {
                name: "Ada Derana English News",
                logo: "Ada derana logo link",
                daily: "Rs. 2 + tax per day",
                monthly: "Rs. 30 + tax per monthly",
                dact: "SMS ACT ADE1 to 1313",
                mact: "SMS ACT ADE to 1313",
                ddeact: "SMS DEACT ADE1 to 1313",
                mdeact: "SMS DEACT ADE to 1313",
            },
            {
                name: "Ada Derana Sinhala News",
                logo: "Ada derana logo link",
                daily: "Rs. 2 + tax per day",
                monthly: "Rs. 30 + tax per monthly",
                dact: "SMS ACT ADS1 to 1313",
                mact: "SMS ACT ADS to 1313",
                ddeact: "SMS DEACT ADS1 to 1313",
                mdeact: "SMS DEACT ADS to 1313",
            },
            {
                name: "Lakahanda News",
                logo: "Lakhanda logo link",
                daily: "Rs. 2 + tax per day",
                monthly: "Rs. 30 + tax per monthly",
                dact: "SMS ACT LKD1 to 1313",
                mact: "SMS ACT LKD to 1313",
                ddeact: "SMS DEACT LKD1 to 1313",
                mdeact: "SMS DEACT LKD to 1313",
            },
        ],
    },
];

const News = () => {
    return (
        <>
            <Category data={NewsData} />
        </>
    );
};

export default News;