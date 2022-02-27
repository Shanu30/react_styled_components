import React from "react";
import {Image,Wrapper,Div,A,B} from "./Navbar.styled"

export const Navbar = () => {
	return (
		<Wrapper>
			<Image src="https://cdn2.vectorstock.com/i/1000x1000/26/91/online-shop-logo-template-icon-vector-30562691.jpg"></Image>
			<Div>
				<A href="https://www.flipkart.com/" target="_blank">Flipkart</A>
				<B href="https://www.amazon.in/" target="_blank">Amazon</B>
			</Div>
		</Wrapper>
	);
};