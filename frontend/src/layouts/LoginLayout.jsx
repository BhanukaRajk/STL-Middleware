import { Outlet, useNavigate } from "react-router-dom";

import DashNav from "../components/Dashboard/NavBar";
import SideDrawer from "../components/SideDrawer";
import useUser from "../hooks/useUser";
import { useEffect } from "react";

const LoginLayout = () => {
	const navigate = useNavigate();
	const { user } = useUser();
	console.log(user);

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [navigate, user]);

	return (
		<section className=" md:w-[70%] w-full flex flex-col mx-auto relative">
			<DashNav />
			<Outlet />
			<SideDrawer />
		</section>
	);
};

export default LoginLayout;
