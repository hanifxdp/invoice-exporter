import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./layout/index.tsx";
import { About } from "./pages/about.tsx";
import { Home } from "./pages/home.tsx";
import { Saved } from "./pages/saved.tsx";
import Register from "./pages/auth/register.tsx";
import Login from "./pages/auth/login.tsx";

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
			{ path: "auth/register", element: <Register /> },
			{ path: "auth/login", element: <Login /> },
		],
	},
]);

const fonts = {
	...chakraTheme.fonts,
	body: `Inter, apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", Poppins`,
	heading: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",Poppins`,
};

const customTheme = extendTheme(fonts);
console.log(customTheme, "fonts mounted");

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider theme={customTheme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);
