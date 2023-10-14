import Category from "./Category";

const GameData = [
    {
        category: {
            service: "Games",
            description: "Connect with most popular gaming communities and play latest games.",
        },
        options: [
            {
                name: "Gameloft Club",
                logo: "Gameloft logo link",
                desc: `
                    Gameloft Club is a subscription and pay per download 
                    based service to download popular Gameloft mobile 
                    game titles such as Asphalt and Modern Combat.
                    `,
                daily: "Rs. 2 + tax per day",
                monthly: "Rs. 30 + tax per monthly",
                dact: "SMS ACT GAMELOFT1 to 1313",
                mact: "SMS ACT GAMELOFT to 1313",
                ddeact: "SMS DEACT GAMELOFT1 to 1313",
                mdeact: "SMS DEACT GAMELOFT to 1313",
            },
            {
                name: "Team Battlefield",
                logo: "Battlefield logo link",
                desc: "Join with the battlefield team and play.",
                daily: "Rs. 2 + tax per day",
                monthly: "Rs. 30 + tax per monthly",
                dact: "SMS ACT TBF1 to 1313",
                mact: "SMS ACT TBF to 1313",
                ddeact: "SMS DEACT TBF1 to 1313",
                mdeact: "SMS DEACT TBF to 1313",
            },
        ],
    },
];

const Games = () => {
    return (
        <>
            <Category data={GameData} />
        </>
    );
};

export default Games