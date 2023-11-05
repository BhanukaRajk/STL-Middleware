import { IoNotificationsSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import useDrawer from "../../hooks/useDrawer";
import { testAuth } from "../../api/authApi";
import useUser from "../../hooks/useUser";

const NavBar = () => {
	const { openDrawer } = useDrawer();
	const { setUser } = useUser();

	const handleNotificationClick = async () => {
		await testAuth();
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		setUser(null);
		window.location.reload();
	};

	return (
		<>
			<nav className='flex sticky top-0 z-50 justify-between bg-cover py-6 bg-[url("/src/assets/images/backgrounds/nav-background.png")] bg-opacity-10 rounded-es-2xl rounded-ee-2xl text-white shadow-lg'>
				<div className="py-1 px-6 font-bold text-lg select-none">SRI CARE</div>
				<div className="flex">
					<button onClick={handleLogout}>Log out</button>
					<div
						onClick={handleNotificationClick}
						className="p-2 hover:bg-white/10 rounded-xl mx-4 text-white transition-all"
					>
						<IoNotificationsSharp className="text-lg" />
					</div>
					<div
						onClick={openDrawer}
						className="p-2 hover:bg-white/10  rounded-xl mx-4 text-white transition-all"
					>
						<FaBars className="text-lg" />
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
