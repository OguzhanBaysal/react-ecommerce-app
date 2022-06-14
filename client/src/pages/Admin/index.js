import React from "react";
import { Box } from "@chakra-ui/react";
import { Link, Routes, Route, useRouteMatch } from "react-router-dom";

import "./styles.css";
import Home from "./Home";
import Products from "./Products";
import Orders from "./Orders";

function Admin() {

	const { path, url } = useRouteMatch();

	return (
		<div>
			<nav>
				<ul className="admin-menu">
					<li>
						<Link to={url}>Home</Link>
					</li>
					<li>
						<Link to={`${url}/orders`}>Orders</Link>
					</li>
					<li>
						<Link to={`${url}/products`}>Products</Link>
					</li>
				</ul>
			</nav>

			<Box mt="10">
				<Routes>
					<Route path={path} element={<Home/>} />
					<Route path={`${path}/orders`} element={<Orders/>} />
					<Route path={`${path}/products`} element={<Products/>} />
				</Routes>
			</Box>
		</div>
	);
}

export default Admin;
