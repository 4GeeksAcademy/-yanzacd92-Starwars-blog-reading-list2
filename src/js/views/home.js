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
				<h1>Planets</h1>
				<div key="planets" className="d-flex flex-row">
					{cards.planets?.map((planet) =>
						<div key={planet.uid}>
							<Card id={planet.uid} name={planet.name} url={planet.url} element={"planets"} />
						</div>
					)}
				</div>
				
				<h1>People</h1>
				<div key="people" className="d-flex flex-row">
					{cards.people?.map((person) =>
						<div key={person.uid}>
							<Card id={person.uid} name={person.name} url={person.url} element={"people"} />
						</div>
					)}
				</div>

				<h1>Vehicles</h1>
				<div key="vehicles" className="d-flex flex-row">
					{cards.vehicles?.map((vehicle) =>
						<div key={vehicle.uid}>
							<Card id={vehicle.uid} name={vehicle.name} url={vehicle.url} element={"vehicles"} />
						</div>
					)}
				</div>
			</div>
		</div>
)};
