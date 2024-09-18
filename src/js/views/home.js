import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";


export const Home = () => {
	const {store} = useContext(Context);

	return (

		<div className="body ms-2">
			<h2>Characters</h2>
			<div className="card-div d-flex flex-row align-items-center flex-nowrap overflow-scroll align-items-stretch">
					{store.characters.map((item, index) => {
						return (
							<Card item={item} index={index} key={index} category="characters" />
						)
					})}
			</div>

			<h2>Planets</h2>
			<div className="card-div d-flex flex-row align-items-center flex-nowrap overflow-scroll align-items-stretch">
					{store.planets.map((item, index) => {
						return (
							<Card item={item} index={index} key={index} category="planets" />
						)
					})}
			</div>

			<h2>Vehicles</h2>
			<div className="card-div d-flex flex-row align-items-center flex-nowrap overflow-scroll align-items-stretch">
					{store.vehicles.map((item, index) => {
						return (
							<Card item={item} index={index} key={index} category="vehicles" />
						)
					})}
			</div>
		</div>
	);
}

