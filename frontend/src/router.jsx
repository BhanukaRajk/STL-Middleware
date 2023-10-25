// Path: frontend/src/router.js
import { createBrowserRouter } from "react-router-dom";
import Login from "../src/pages/Login.jsx";
import VerifyPhoneNumber from "../src/pages/VerifyPhoneNumber.jsx";
import VerifyOTP from "../src/pages/VerifyOTP.jsx";
import VerifyNewPassword from "../src/pages/VerifyNewPassword.jsx";
import SignUp from "../src/pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import LoginLayout from "./layouts/LoginLayout.jsx";
import RentalPacks from "./pages/services/data-packages/RentalPacks.jsx";
import DataPackages from "./pages/services/data-packages/dataPackages.jsx";


const routes = [
	{
		path: "/",
		element: <DataPackages/>
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/sign-up",
		element: <SignUp />,
	},
	{
		path: "/forgot-password/verify-number",
		element: <VerifyPhoneNumber />,
	},
	{
		path: "/forgot-password/verify-otp",
		element: <VerifyOTP />,
	},
	{
		path: "/forgot-password/verify-new-password",
		element: <VerifyNewPassword />,
	},
	{
		path: "/dashboard",
		element: <LoginLayout />,
		children: [
			{
				path: "",
				element: <Dashboard />,
			},
		],
	},
];

const router = createBrowserRouter(routes);

export default router;
