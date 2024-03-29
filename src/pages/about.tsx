import { Link, useOutletContext } from "react-router-dom";
import CardOne from "../components/card/CardOne";
import CardTwo from "../components/card/CardTwo";
import { invoice } from "../interface/invoice.interface";
import { useEffect } from "react";
import TableComponent from "../components/table";

export const About = () => {
	const { invoice } = useOutletContext() as invoice;
	useEffect(() => {}, [invoice]);
	console.log(invoice, "data di about");
	return (
		<>
			<div>about</div>
			<Link to="/">Back</Link>
			<CardOne />
			<CardTwo />
			<p>{invoice?.customerName || "no customer name"}</p>
			<p>{invoice?.phoneNumber}</p>
			<p>{invoice?.email}</p>
			<p>{invoice?.payment}</p>
			<p>
				{invoice?.product?.map((products, i) => {
					return (
						<>
							<span>{products.variant}</span>
							<span>{products.price}</span>
							<span>{products.quantity}</span>
							<span>{products.image}</span>
						</>
					);
				})}
			</p>
		</>
	);
};
