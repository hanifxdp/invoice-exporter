import React from "react";
import { invoice } from "../../interface/invoice.interface";
import { useOutletContext } from "react-router-dom";

const CardTwo: React.FC = () => {
	const { count, setCount } = useOutletContext() as invoice;
	return (
		<>
			<div>CardTwo</div>
			<button onClick={() => setCount && setCount(count + 1)}>click me!</button>
		</>
	);
};

export default CardTwo;
