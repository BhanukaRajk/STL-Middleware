
import { Select } from 'antd';
import RoamingDetailCard from "./RoamingDetailCard";

// ROAMING CHARGES DETAILING SECTION FOR SELECTED COUNTRY
const RoamingDetails = () => {

    const handleChange = (value) => {
        console.log(value);
    };

    return (
        <div className="flex flex-row">

            {/* COUNTRY SELECTION */}
            <div className="flex flex-col">
                    <Select
                        labelInValue
                        defaultValue={{
                            value: 'Afghanisthan',
                            label: 'Afghanisthan',
                        }}
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 'Afghanisthan',
                                label: 'Afghanisthan',
                            },
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
                        ]}
                    />
            </div>
            
            {/* ROAMING CHARGES SELECTED COUNTRY */}
            <div>
                <div>
                    <RoamingDetailCard />
                </div>
            </div>
        </div>
    );
};

export default RoamingDetails;