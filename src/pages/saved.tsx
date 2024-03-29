import React, { useEffect } from "react";
import TableComponent from "../components/table";
import { Link, useOutletContext } from "react-router-dom";
import { invoice } from "../interface/invoice.interface";
import { Box, Table, TableContainer, Td, Text, Th, Tr } from "@chakra-ui/react";

export const Saved = () => {
	const { invoice } = useOutletContext() as invoice;
	useEffect(() => {}, [invoice]);
	console.log(invoice, "invoice nih di saved");
	return (
		<Box>
			<Link to="/">Back To Form</Link>
			<Box>
				<TableContainer>
					<Table size="sm" width="50">
						<Tr>
							<Th>Customer Name</Th>
							<Td>{invoice?.customerName || "No Customer Name"}</Td>
						</Tr>
						<Tr>
							<Th>Date</Th>
							<Td>{invoice?.date || "No date"}</Td>
						</Tr>
						<Tr>
							<Th>Email</Th>
							<Td>{invoice?.email || "No email"}</Td>
						</Tr>
						<Tr>
							<Th>Phone Number</Th>
							<Td>{invoice?.phoneNumber || "No Phone Number"}</Td>
						</Tr>
						<Tr>
							<Th>Shipping Method</Th>
							<Td>{invoice?.shipping || "No Shipping Method"}</Td>
						</Tr>
						<Tr>
							<Th>Payment Method</Th>
							<Td>{invoice?.payment || "No Payment Method"}</Td>
						</Tr>
						<Tr>
							<Th>Status</Th>
							<Td> {invoice?.status || "No Status"}</Td>
						</Tr>
					</Table>
				</TableContainer>
			</Box>
			<TableComponent data={invoice} />;
		</Box>
	);
};
