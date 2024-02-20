import React from "react";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./pages/home";
import { Saved } from "./pages/saved";
import { NavBar } from "./components/NavBar";
import { About } from "./pages/about";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<NavBar />}>
			<Route index element={<Home />} />
			<Route path="saved" element={<Saved />} />
			<Route path="about" element={<About />} />
		</Route>
	)
);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
