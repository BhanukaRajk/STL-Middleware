// Path: frontend/src/router.js
import { createBrowserRouter } from "react-router-dom";
import Login from "../src/pages/Login.jsx"

const routes = [
	{
		path: "/",
		element: <div>Landing</div>,
	},
	{
		path: "/login",
		element: <Login />
	}
];

const router = createBrowserRouter(routes);

export default router;
