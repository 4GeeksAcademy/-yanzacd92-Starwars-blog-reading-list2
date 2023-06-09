import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { DetailPlanet } from "./views/detailPlanet";
import { DetailPerson } from "./views/detailPerson";
import { DetailVehicle } from "./views/detailVehicle";
import { NotFoundPage } from "./views/notFoundPage";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/planets/:id" element={<DetailPlanet />} />
						<Route exact path="/people/:id" element={<DetailPerson />} />
						<Route exact path="/vehicles/:id" element={<DetailVehicle />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
