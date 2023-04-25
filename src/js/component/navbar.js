import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">StarWars</span>
			</Link>
			<div className="ml-auto">
				<div class="btn-group">
					<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
						<li><hr class="dropdown-divider" /></li>
						<li><a class="dropdown-item" href="#">Separated link</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
