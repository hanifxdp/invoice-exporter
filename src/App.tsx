import React from "react";
import { Home } from "./pages/home";
import { NavBar } from "./components/NavBar";
import { Box } from "@chakra-ui/react";

function App() {
	return (
		<>
			<Box px="10" py="6" w="full">
				<NavBar />
				<Home />
			</Box>
		</>
	);
}

export default App;
