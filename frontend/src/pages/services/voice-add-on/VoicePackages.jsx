import React from 'react'
import BudgetPack from './budgetPack'
import BlasterPack from './blasterPack'

const VoicePackages = () => {
    return (
        <div>
            <BudgetPack planName={"Anytime net Unlimited"} price={"650"} duration={"30"} packageSize={"Unlimited"}/>
            <BudgetPack planName={"Unlimited"} price={"495"} duration={"30"} packageSize={"Unlimited"}/>
            <BudgetPack planName={"Any net 250"} price={"163"} duration={"30"} packageSize={"250 mins"}/>
            <BudgetPack planName={"Budget Pack"} price={"240"} duration={"30"} packageSize={"400 mins"}/>

            <BlasterPack planName={"Blaster Pack"} price={"8"} duration={"30"} packageSize={"Unlimited"} fourGB={"7.5"} night={"15"} call={"15"} sms={"15"} nightTime={"7.5"} />
            <BlasterPack planName={"Daliy Blaster"} price={"16"} duration={"30"} packageSize={"Unlimited"} fourGB={"50"} night={"25"} call={"15"} sms={"15"} nightTime={"7.5"}/>

        </div>
    )
}

export default VoicePackages