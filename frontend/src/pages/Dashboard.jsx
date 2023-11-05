import NotificationPanel from "../components/Dashboard/NotificationPanel";
import ProgressContainer from "../components/Dashboard/ProgressContainer";
import ProgressSet from "../components/Dashboard/ProgressSet";
import NewOffer from "../components/Dashboard/NewOffer";
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className="">
			<NotificationPanel />
			<h1 className="text-xl text-blue-950 ml-5 mt-3">Data Add-ons</h1>
			<div className="flex lg:flex-row overflow-y-hidden overflow-x-scroll">
				<ProgressContainer title={"Data Usage"}>
					<ProgressSet
						all={30}
						percent={60}
						save={23}
						title={"Any time Data"}
					/>
					<ProgressSet
						all={30}
						percent={20}
						save={10}
						title={"Night time Data"}
					/>
				</ProgressContainer>
				<ProgressContainer title={"Voice Usage"}>
					<ProgressSet
						all={30}
						percent={60}
						save={23}
						title={"Any time Data"}
					/>
					<ProgressSet
						all={30}
						percent={20}
						save={10}
						title={"Night time Data"}
					/>
				</ProgressContainer>
				<ProgressContainer title={"Voice Usage"}>
					<ProgressSet
						all={30}
						percent={60}
						save={23}
						title={"Any time Data"}
					/>
					<ProgressSet
						all={30}
						percent={20}
						save={10}
						title={"Night time Data"}
					/>
				</ProgressContainer>

			</div>
			<h1 className="text-xl text-blue-950 ml-5 mt-3">Voice Add-ons</h1>
			<div className="flex lg:flex-row flex-col">
				<ProgressContainer title={"Data Usage"}>
					<ProgressSet
						all={30}
						percent={60}
						save={23}
						title={"Any time Data"}
					/>
					<ProgressSet
						all={30}
						percent={20}
						save={10}
						title={"Night time Data"}
					/>
				</ProgressContainer>
				<ProgressContainer title={"Voice Usage"}>
					<ProgressSet
						all={30}
						percent={60}
						save={23}
						title={"Any time Data"}
					/>
					<ProgressSet
						all={30}
						percent={20}
						save={10}
						title={"Night time Data"}
					/>
				</ProgressContainer>
			</div>
			<div className="flex">
				<ProgressContainer title={"Offers"}>
					<div className="flex justify-center flex-wrap">
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
					<div className="flex my-5 md:justify-end justify-center">
						<Link to="/offers" className="">
							{"See all >"}
						</Link>
					</div>
				</ProgressContainer>
			</div>
		</div>
	);
};

export default Dashboard;
