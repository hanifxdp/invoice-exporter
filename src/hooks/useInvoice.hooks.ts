import React from "react";
import { invoiceData } from "../interface/invoice.interface";

const useInvoice = () => {
	const [count, setCount] = React.useState(0);
	const [invoice, setInvoice] = React.useState<null | invoiceData>(null);
	return { count, setCount, invoice, setInvoice };
};

export default useInvoice;
