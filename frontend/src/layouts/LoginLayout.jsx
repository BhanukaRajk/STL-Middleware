import { Outlet } from "react-router-dom";

import DashNav from "../components/Dashboard/NavBar";
import SideDrawer from "../components/SideDrawer";

const LoginLayout = () => {
	return (
		<section className=" w-[70%] flex flex-col mx-auto relative">
			<DashNav />
			<Outlet />
			<SideDrawer />
		</section>
	);
};

export default LoginLayout;
