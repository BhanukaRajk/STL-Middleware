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
import VoicePackages from "./pages/services/voice-add-on/VoicePackages.jsx";
import { Outlet } from "react-router-dom";
import Roaming from "./pages/services/roaming-services/Roaming.jsx";
// import ValueAddedServices from "./pages/services/value-added-services/VAS.jsx";
// import Sport from "./components/VAS/Sport.jsx";
// import News from "./components/VAS/News.jsx";
// import Games from "./components/VAS/Gaming.jsx";
import RoamingPackages from "./components/Roaming/RoamingPackages.jsx";
import VasSelection from "./pages/services/value-added-services/VasSelection.jsx";
import Chat from "./pages/chat/Chat.jsx";


const routes = [
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
		path: "/",
		element: <LoginLayout />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
			{
				path: "/profile",
				element: <></>,
			},
			{
				path: "/support",
				element: <Chat />,
			},
			{
				path: "/services",
				element: <><Outlet /></>,
				children: [
					{
						path: "/services",
						element: <Roaming />,
					},
					{
						path: "/services/data-packages",
						element: <DataPackages />,
					},
					{
						path: "/services/voice-add-on",
						element: <VoicePackages />,
					},
					{
						path: "/services/roaming",
						element: <RoamingPackages />,
					},
					{
						path: "/services/ringing-tones",
						element: <RentalPacks />,
					},
					{
						path: "/services/value-added",
						element: <VasSelection />,
					}
				]
			},
		],
	},
];

const router = createBrowserRouter(routes);

export default router;
