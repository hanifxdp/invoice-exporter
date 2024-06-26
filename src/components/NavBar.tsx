import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
	let navigate = useNavigate();
	return (
		<Box width="75%" mx="auto">
			<Flex
				minW="max-content"
				alignItems="center"
				gap="2"
				alignContent="center"
			>
				<Heading>Invoice Exporter</Heading>
				<Spacer />
				<Box p="5">
					<Button
						variant="outline"
						colorScheme="yellow"
						onClick={() => {
							navigate(`/about`);
						}}
					>
						<Link to="about">About</Link>
					</Button>
				</Box>
			</Flex>
		</Box>
	);
};
