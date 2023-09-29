// Path: frontend/src/router.js
import { createBrowserRouter } from "react-router-dom";
import Login from "../src/pages/Login.jsx"
import Dashboard from "./pages/Dashboard.jsx";

const routes = [
	{
		path: "/",
		element: <div className="text-red-400">Landing</div>,
	},
	{
		path: "/login",
		element: <Login />
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	}
];

const router = createBrowserRouter(routes);

export default router;
