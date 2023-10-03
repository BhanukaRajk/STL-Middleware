import { Outlet } from "react-router-dom";

import DashNav from "../components/Dashboard/NavBar";
import SideDrawer from "../components/SideDrawer";

const LoginLayout = () => {
	return (
		<section className=" md:w-[70%] w-full flex flex-col mx-auto relative">
			<DashNav />
			<Outlet />
			<SideDrawer />
		</section>
	);
};

export default LoginLayout;
