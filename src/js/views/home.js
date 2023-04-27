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
				<Card element={"planets"} />
				<Card element={"people"} />
				<Card element={"vehicles"} />
			</div>
		</div>
)};
