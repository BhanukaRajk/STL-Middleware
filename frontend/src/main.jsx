import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { DrawerProvider } from "./contexts/DrawerContext.jsx";
import UserProvider from "./contexts/UserContext.jsx";

const theme = extendTheme({
	fonts: {
		body: "Poppins, sans-serif",
		heading: "Poppins, sans-serif",
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserProvider>
			<DrawerProvider>
				<ChakraProvider theme={theme}>
					<App />
				</ChakraProvider>
			</DrawerProvider>
		</UserProvider>
	</React.StrictMode>
);
