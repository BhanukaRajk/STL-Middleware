import React from 'react'
import DashNav from '../components/Dashboard/NavBar';
import NotificationPanel from '../components/Dashboard/NotificationPanel';
import ProgressContainer from '../components/Dashboard/ProgressContainer';
import ProgressSet from '../components/Dashboard/ProgressSet';
import NewOffer from '../components/Dashboard/NewOffer';

const Dashboard = () => {
    return (
        <section className=' w-[70%] flex flex-col mx-auto' >
            <DashNav />
            <NotificationPanel />
            <div className='flex flex-wrap'>
                <ProgressContainer title={"Data Usage"}>
                    <ProgressSet all={30} precent={60} save={23} title={"Any time Data"} />
                    <ProgressSet all={30} precent={20} save={10} title={"Night time Data"} />
                </ProgressContainer>
                <ProgressContainer title={"Voice Packages"}>
                    <ProgressSet all={30} precent={60} save={23} title={"Any time Data"} />
                    <ProgressSet all={30} precent={20} save={10} title={"Night time Data"} />
                </ProgressContainer>
            </div>
            <div className='flex flex-wrap'>
                <ProgressContainer title={"Offers"}>
                    <div className='flex justify-center'>
                        <NewOffer title={"Combo Pack"} buttonText={"Activate"}>
                            <h2>Data : 500 MB</h2>
                            <h2>Duration : 7 Days</h2>
                        </NewOffer>
                        <NewOffer title={"Combo Pack 2"} buttonText={"Activate"}>
                            <h2>Data : 1500 MB</h2>
                            <h2>Duration : 14 Days</h2>
                        </NewOffer>
                        <NewOffer title={"Youtube monthly"} buttonText={"Activate"}>
                            <h2>Duration : 30 Days</h2>
                        </NewOffer>
                    </div>
                </ProgressContainer>
            </div>
        </section>
    )
}

export default Dashboard