import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	Heading,
	Spacer,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const NavBar = () => {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = `about`;
		navigate(path);
	};
	return (
		<>
			<Flex minW="max-content" alignItems="center" gap="2">
				<Box p="2">
					<Heading>Invoice Exporter</Heading>
				</Box>
				<Spacer />
				<Box p="5">
					<Button
						variant="outline"
						colorScheme="yellow"
						onClick={() => {
							navigate(`about`);
						}}
					>
						<Link to="about">About</Link>
					</Button>
				</Box>
			</Flex>
			<Outlet />
		</>
	);
};
