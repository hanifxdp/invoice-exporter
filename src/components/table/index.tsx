import {
	Table,
	TableBodyProps,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { savedData } from "../../interface/invoice.interface";

const TableComponent: React.FC<savedData> = (data: savedData) => {
	console.log(data, "data masuk di table");
	return (
		<TableContainer>
			<Table width="70%" align="center">
				<TableCaption placement="top">Ini Table</TableCaption>
				<Thead>
					<Tr>
						<Th>No</Th>
						<Th>Product Name</Th>
						<Th>Quantity</Th>
						<Th>Price</Th>
						<Th>Total Price</Th>
					</Tr>
				</Thead>
				<Tbody>
					{data?.data?.product?.map((products, i) => {
						return (
							<Tr>
								<Td>{i + 1 || "No Number"}</Td>
								<Td>{products.variant || "No Product"}</Td>
								<Td>{products.quantity || "No Quantity"}</Td>
								<Td>{products.price || "No Price"}</Td>
								<Td>
									{parseInt(products.price) * parseInt(products.quantity) ||
										"No Total Price"}
								</Td>
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default TableComponent;
