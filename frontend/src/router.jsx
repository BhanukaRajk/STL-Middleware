// Path: frontend/src/router.js
import { createBrowserRouter } from "react-router-dom";

const routes = [
	{
		path: "/",
		element: <div>Landing</div>,
	},
];

const router = createBrowserRouter(routes);

export default router;
