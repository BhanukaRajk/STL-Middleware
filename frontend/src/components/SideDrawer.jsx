import { NavLink } from "react-router-dom";
import { Drawer } from "antd";
import { CloseButton } from "@chakra-ui/react";

import useDrawer from "../hooks/useDrawer";

const drawerContent = [
	{
		label: "Dashboard",
		to: "/",
	},
	{
		label: "Roaming Services",
		to: "/services/roaming",
	},
	{
		label: "Ringing Tones",
		to: "/services/ringing-tones",
	},
	{
		label: "Data Packages",
		to: "/services/data-packages",
	},
	{
		label: "Voice Addon",
		to: "/services/voice-add-on",
	},
	{
		label: "Value Added Services",
		to: "/services/value-added",
	},
];

const SideDrawer = () => {
	const { isOpen, closeDrawer } = useDrawer();

	return (
		<Drawer
			title={<CloseButton onClick={closeDrawer} />}
			placement="right"
			closable={false}
			onClose={closeDrawer}
			open={isOpen}
			getContainer={false}
		>
			<div className="flex flex-col gap-4">
				{drawerContent.map((item, index) => (
					<NavLink
						key={index}
						to={item.to}
						className={({ isActive }) =>
							`px-4 py-2 rounded-md text-base ${isActive
								? "bg-blue-950 text-white"
								: "hover:bg-gray-300 text-black hover:text-black"
							}`
						}
					>
						{item.label}
					</NavLink>
				))}
			</div>
		</Drawer>
	);
};

export default SideDrawer;
