import React, {useEffect, useContext} from "react";
import "../../styles/home.css";
import {Context} from '../store/appContext'
import { Card } from "../component/card";
import { Favorite } from "../component/favorite";

export const Home = () => {
	const {store, actions} = useContext(Context)
	const cards = store
	useEffect(() => {
		actions.fecthStarWars("planets")
		actions.fecthStarWars("people")
		actions.fecthStarWars("vehicles")
	}, [])
	return (
		<div className="text-center mt-5">
			<div className="list-group d-flex flex-column">	
				<Card element={"planets"} img={`https://starwars-visualguide.com/assets/img/planets/2.jpg`} />
				<Card element={"people"} img={`https://starwars-visualguide.com/assets/img/characters/2.jpg`} />
				<Card element={"vehicles"} img={`https://starwars-visualguide.com/assets/img/vehicles/4.jpg`} />
			</div>
		</div>
)};
