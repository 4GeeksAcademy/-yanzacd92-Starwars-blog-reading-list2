import React from "react";
import { Link } from "react-router-dom";
import { Favorite } from "./favorite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><FontAwesomeIcon icon={faCoffee} /></span>
			</Link>
			<Favorite />
		</nav>
	);
};
