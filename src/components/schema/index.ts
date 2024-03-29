import * as Yup from "yup";

export const validateAddInvoice = Yup.object().shape({
	customerName: Yup.string()
		.required("Customer Name is required.")
		.max(20, "Not more than 20 character")
		.min(3, "Minimal 3 character"),
	phoneNumber: Yup.string().required("Customer Phone Number is required."),
	// .test("len", "Minimal is 10 digits", (val) => val.toString().length >= 10)
	// .test(
	// 	"len",
	// 	"The phone number not more than 13 digits",
	// 	(val) => val.toString().length <= 13
	// ),
	email: Yup.string().email().required("Customer Email is required"),
	date: Yup.string().required("Date is required"),
	shipping: Yup.string().required(
		"Please pick the customer desired shipping method"
	),
	payment: Yup.string().required(
		"Please pick the customer desired payment method"
	),
	status: Yup.string().required("Please pick the status of the order"),
	product: Yup.array().of(
		Yup.object().shape({
			variant: Yup.string().required(),
			price: Yup.string().required(),
			image: Yup.string().required(),
			quantity: Yup.string().required(),
		})
	),
});
