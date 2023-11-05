// ROAMING COUNTRY CHARGE DETAILS CARD


// const GameData = {
//     category: {
//         service: "Games",
//         description: "Connect with most popular gaming communities and play latest games.",
//     },
//     options: [
//         {
//             name: "$3 Pack (LKR 981)",
//             data: "1GB Data",
//             voice: "30 Minutes Calls",
//             incoming: "30 Minutes Incoming Calls Send SMS",
//             time: "24hrs hours",
//             code: "*91*3#",
//         },
//         {
//             name: "$3 Pack (LKR 1644)",
//             data: "5GB Data",
//             voice: "90 Minutes Calls",
//             incoming: "90 Minutes Incoming Calls Send SMS",
//             time: "10 Days",
//             code: "*91*15#",
//         },
//     ],
// };

const CountryDetailCard = () => {
    return (
        <div className="flex flex-col bg-slate-400 p-5">

            <div className="flex flex-col mb-10">
                <div>Fixed Line</div>
                <div className="flex flex-row">
                    <div>Per Second</div>
                    <div>Rs. 0.36</div>
                </div>
            </div>
            <div className="flex flex-col mb-10">
                <div>Mobile</div>
                <div className="flex flex-row">
                    <div>Per Second</div>
                    <div>Rs. 0.26</div>
                </div>
            </div>

        </div>
    );
};

export default CountryDetailCard;