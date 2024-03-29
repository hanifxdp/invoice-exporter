import {
	Box,
	Button,
	Flex,
	Grid,
	GridItem,
	Menu,
	MenuButton,
	MenuDivider,
	MenuGroup,
	MenuItem,
	MenuList,
	Image,
	Text,
} from "@chakra-ui/react";
import {
	useForm,
	FormProvider,
	useFieldArray,
	SubmitHandler,
} from "react-hook-form";
import { BiChevronDown, BiPlusCircle, BiTrash } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useOutletContext } from "react-router-dom";
import InputForm from "../components/forms/InputForm";
import SelectInput from "../components/forms/SelectInput";
import productJSON from "../data/product.json";
import { validateAddInvoice } from "../components/schema";
import { invoice, invoiceData } from "../interface/invoice.interface";

export const Home = () => {
	const { setInvoice } = useOutletContext() as invoice;
	const navigate = useNavigate();
	const methods = useForm({
		resolver: yupResolver(validateAddInvoice),
	});
	const {
		handleSubmit,
		watch,
		setValue,
		control,
		formState: { errors },
	} = methods;

	const onSubmitForm: SubmitHandler<invoiceData> = (data) => {
		console.log(data, "send data");
		setInvoice(data);
		navigate("/saved");
	};

	const { fields, append, remove } = useFieldArray({
		name: "product",
		control,
	});
	// console.log(useOutletContext());

	return (
		<FormProvider {...methods}>
			<Box p={4} width="50%" mx="auto">
				<form onSubmit={handleSubmit(onSubmitForm)} noValidate>
					<Flex width="full" flexDir="column" gap="12px">
						<InputForm
							id="customerName"
							name="customerName"
							type="text"
							label="Customer Name"
							placeholder="Customer Name..."
							required={true}
							error={errors?.customerName?.message}
							isRequired={true}
						/>
						<InputForm
							id="phoneNumber"
							name="phoneNumber"
							type="number"
							label="Customer Phone Number"
							placeholder="Customer Phone Number..."
							required={true}
							error={errors?.phoneNumber?.message}
							isRequired={true}
						/>
						<InputForm
							id="email"
							name="email"
							type="email"
							label="Email"
							placeholder="Customer Email..."
							required={true}
							error={errors?.email?.message}
							isRequired={true}
						/>
						<InputForm
							id="date"
							name="date"
							type="date"
							label="Order Date"
							placeholder="Pick a date..."
							required={true}
							error={errors?.date?.message}
							isRequired={true}
						/>
						<Text as="b">Products</Text>
						{fields.map((field, idx) => (
							<Grid key={field.id} templateColumns="repeat(6,1fr)" gap={2}>
								<GridItem as={Flex} alignItems="center" colSpan={4}>
									<Menu>
										<MenuButton
											variant="outline"
											as={Button}
											rightIcon={<BiChevronDown />}
											w="full"
										>
											{watch(`product.${idx}.variant`) === "-"
												? "Choose the product"
												: `${watch(`product.${idx}.variant`)} 
												- Rp${watch(`product.${idx}.price`)}`}
										</MenuButton>
										<MenuList height="50vh" overflow={"scroll"}>
											{Object.keys(productJSON).map((product) => (
												<>
													<MenuGroup title={product}>
														{productJSON[product as "Cookies"].map((e) => (
															<>
																<MenuItem
																	onClick={() => {
																		setValue(
																			`product.${idx}.variant`,
																			e.variant
																		);
																		setValue(
																			`product.${idx}.price`,
																			e.price.toString()
																		);
																		setValue(`product.${idx}.image`, e.image);
																	}}
																>
																	<Image
																		boxSize="2rem"
																		borderRadius="full"
																		src={
																			e.image ||
																			"https://down-id.img.susercontent.com/file/sg-11134201-22100-6jckybwx55iva4"
																		}
																		alt="cookies images"
																		mr="12px"
																	/>
																	<Flex flexDir="column">
																		<Text>Name : {e.variant}</Text>
																		<Text>Price: Rp.{e.price}</Text>
																	</Flex>
																</MenuItem>
															</>
														))}
													</MenuGroup>
													<MenuDivider />
												</>
											))}
										</MenuList>
									</Menu>
								</GridItem>
								<GridItem colSpan={2} as={Flex} gap={2}>
									<InputForm
										id={`product.${idx}.quantity`}
										width="100px"
										name="quantity"
										type="number"
										placeholder="Qty..."
										required={true}
										error={errors.product?.[idx]?.quantity?.message}
										onChange={(e) =>
											setValue(`product.${idx}.quantity`, e.target.value)
										}
										isRequired={true}
									/>
									<Button
										variant={"outline"}
										color="red"
										borderColor="red"
										onClick={() => remove(idx)}
									>
										{<BiTrash size="24px" />}
									</Button>
								</GridItem>
							</Grid>
						))}
						<Button
							leftIcon={<BiPlusCircle size="24px" />}
							onClick={() =>
								append({ price: "0", variant: "-", quantity: "0", image: "-" })
							}
						>
							Add the product
						</Button>
						<SelectInput
							id="shipping"
							label="Shipping"
							placeholder="Select the shipping method..."
							name="shipping"
							option={[
								{ label: "GoSend", value: "gosend" },
								{ label: "GrabExpress", value: "grabexpress" },
							]}
							error={errors.shipping?.message}
							required={true}
							isRequired={true}
						/>
						<SelectInput
							id="payment"
							label="Payment"
							placeholder="Select the payment method..."
							name="payment"
							option={[
								{ label: "Transfer", value: "tf" },
								{ label: "Cash", value: "cash" },
							]}
							error={errors.payment?.message}
							required={true}
							isRequired={true}
						/>
						<SelectInput
							id="status"
							label="Status"
							placeholder="Select the payment status..."
							name="status"
							option={[
								{ label: "Belum Lunas", value: "belumlunas" },
								{ label: "Lunas", value: "lunas" },
							]}
							error={errors.status?.message}
							required={true}
							isRequired={true}
						/>
						<Button type="submit">Submit</Button>
					</Flex>
				</form>
			</Box>
		</FormProvider>
	);
};
