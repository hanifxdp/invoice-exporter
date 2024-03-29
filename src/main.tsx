import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/index.tsx";
import { About } from "./pages/about.tsx";
import { Home } from "./pages/home.tsx";
import { Saved } from "./pages/saved.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				element: <Home />,
				index: true,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/saved",
				element: <Saved />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);
