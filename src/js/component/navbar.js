import React from "react";
import { Link } from "react-router-dom";
import { Favorite } from "./favorite";
import starWars from '../../img/star.png'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src={starWars}/></span>
			</Link>
			<Favorite />
		</nav>
	);
};
