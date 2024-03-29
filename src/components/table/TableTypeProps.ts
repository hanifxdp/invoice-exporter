import { invoice, invoiceData } from "../../interface/invoice.interface";

export type TableTypeProps = {
	data: invoice;
	nomor?: number;
	variant: string;
	quantity: string;
	price: string;
	totalPrice?: number;
};
