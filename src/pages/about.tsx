import { Link, useOutletContext } from "react-router-dom";
import CardOne from "../components/card/CardOne";
import CardTwo from "../components/card/CardTwo";
import { invoice } from "../interface/invoice.interface";
import { useEffect } from "react";
import TableComponent from "../components/table";
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Heading,
	Spacer,
	Text,
} from "@chakra-ui/react";
import { BiAddToQueue, BiMinus, BiPlus } from "react-icons/bi";

export const About = () => {
	const { invoice } = useOutletContext() as invoice;
	useEffect(() => {}, [invoice]);
	console.log(invoice, "data di about");
	return (
		<Box mx="auto" width="75%">
			<Box bgSize="cover" boxSize="lg"></Box>
			<Box bgColor="#f3f3f4" p="10" borderRadius="xl" mb="10">
				<Heading as="h1" size="lg" pb="4" color="#141414">
					About this.
				</Heading>
				<Text fontSize="lg" color="#7e7e7e">
					Welcome to Invoice Exporter, your ultimate solution for efficient and
					hassle-free invoice management. Our application is designed with
					simplicity and effectiveness in mind, providing users with a seamless
					experience for exporting invoices.
				</Text>
			</Box>
			<Box bgColor="#f3f3f4" p="10" borderRadius="xl" mb="10">
				<Heading as="h1" size="lg" pb="4" color="#141414">
					Our Mission
				</Heading>
				<Text fontSize="lg" color="#7e7e7e">
					Our mission is to empower organizations to manage their invoicing
					tasks with ease, saving valuable time and resources that can be better
					utilized elsewhere.
				</Text>
			</Box>
			<Box bgColor="#f3f3f4" p="10" borderRadius="xl" mb="10">
				<Heading as="h4" size="md" pb="4" color="#141414">
					Development Status
				</Heading>
				<Text fontSize="lg" color="#7e7e7e" pb="4">
					This is a notes for the users.
				</Text>
				<Accordion allowMultiple allowToggle>
					<AccordionItem>
						{({ isExpanded }) => (
							<>
								<h2>
									<AccordionButton>
										<Box as="span" flex="1" textAlign="left">
											DevStat Report #1 30/3/2024
										</Box>
										{isExpanded ? (
											<BiMinus fontSize="12px" />
										) : (
											<BiPlus fontSize="12px" />
										)}
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									The development on the form function is done, maybe need some
									touch on design and more or less is done
								</AccordionPanel>
							</>
						)}
					</AccordionItem>
				</Accordion>
			</Box>
			<Button onClick={() => history.back()}>Back to Home</Button>
			<Box mb="10"></Box>
		</Box>
	);
};
