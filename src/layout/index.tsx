import React from "react";
import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router-dom";
import useInvoice from "../hooks/useInvoice.hooks";

const Layout = () => {
	const { count, setCount, invoice, setInvoice } = useInvoice();
	return (
		<>
			<NavBar />
			<Outlet context={{ count, setCount, invoice, setInvoice }} />
		</>
	);
};

export default Layout;
