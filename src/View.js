import React from "react";
import Cart from "./AddtoCart/cart/Cart";
import Itemlist from "./AddtoCart/itemlist/Itemlist";
import "./App.css";
function View() {
	return (
		<div className="container">
			<Itemlist></Itemlist>
			<Cart></Cart>
		</div>
	);
}

export default View;
