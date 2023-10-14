// ROAMING COUNTRY CHARGE DETAILS CARD
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