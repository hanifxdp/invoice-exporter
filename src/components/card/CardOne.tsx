import React from "react";
import { invoice } from "../../interface/invoice.interface";
import { useOutletContext } from "react-router-dom";

const CardOne: React.FC = () => {
	const { count } = useOutletContext() as invoice;
	return (
		<>
			<div>CardOne</div>
			<p>{count}</p>
		</>
	);
};

export default CardOne;
