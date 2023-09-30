import { Drawer } from "antd";
import { CloseButton } from "@chakra-ui/react";
import useDrawer from "../hooks/useDrawer";

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
		/>
	);
};

export default SideDrawer;
