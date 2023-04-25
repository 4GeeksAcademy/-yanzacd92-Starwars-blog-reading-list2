import React, {useEffect, useContext} from "react";
import "../../styles/home.css";
import {Context} from '../store/appContext'
import { Card } from "../component/card";

export const Home = () => {
	const {store, actions} = useContext(Context)
	const {cards} = store
	useEffect(() => {
		actions.fecthStarWars("planets")
		actions.fecthStarWars("people")
		actions.fecthStarWars("vehicles")

	}, [])
	return (
		<div className="text-center d-flex mt-5">
			<div className="list-group">
				<h1>Planets</h1>
				{cards.map((cardElement) =>
					<div key={cardElement.uuid}>
						<Card id={cardElement.uuid}/>
					</div>
				)}	
			</div>
		</div>
)};
