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

export const NavBar = () => {
	return (
		<Flex minW="max-content" alignItems="center" gap="2">
			<Box p="2">
				<Heading>Invoice Exporter</Heading>
			</Box>
			<Spacer />
			<Box p="2">
				<Button colorScheme="yellow">Download</Button>
			</Box>
		</Flex>
	);
};
