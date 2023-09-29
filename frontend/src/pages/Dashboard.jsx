import React from 'react'
import DashNav from '../components/Dashboard/NavBar';
import NotificationPanel from '../components/Dashboard/NotificationPanel';
import ProgressContainer from '../components/Dashboard/ProgressContainer';
import ProgressSet from '../components/Dashboard/ProgressSet';

const Dashboard = () => {
    return (
        <section className=' w-[70%] flex flex-col mx-auto' >
            <DashNav />
            <NotificationPanel />
            <ProgressContainer title={"Data Usage"}>
                <ProgressSet all={30} precent={60} save={23} title={"Any time Data"} />
                <ProgressSet all={30} precent={20} save={10} title={"Night time Data"} />
            </ProgressContainer>
        </section>
    )
}

export default Dashboard