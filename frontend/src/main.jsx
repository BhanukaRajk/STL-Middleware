import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { DrawerProvider } from "./contexts/DrawerContext.jsx";

const theme = extendTheme({
	fonts: {
		body: "Poppins, sans-serif",
		heading: "Poppins, sans-serif",
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<DrawerProvider>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</DrawerProvider>
	</React.StrictMode>
);
