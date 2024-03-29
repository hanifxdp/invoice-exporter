export interface invoice {
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
	invoice: invoiceData | null;
	setInvoice: React.Dispatch<React.SetStateAction<invoiceData | null>>;
}

export interface invoiceData {
	customerName: string;
	email: string;
	phoneNumber: string;
	date: string;
	shipping: string;
	payment: string;
	status: string;
	product?:
		| {
				variant: string;
				price: string;
				quantity: string;
				image: string;
		  }[]
		| undefined;
}

export interface savedData {
	data: invoiceData | null;
}
