import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";


export const Home = () => {
	const {store} = useContext(Context);

	return (

		<div className="body">
			<h2 className="characters ms-4">Characters</h2>
			<div className="d-flex flex-column w-100 mt-3 align-items-center">
				<div class="d-flex flex-row flex-nowrap overflow-scroll align-items-stretch">
					{store.characters.map((item, index) => {
						return (
							<Card item={item} index={index} key={index} category="characters" />
						)
					})}
				</div>
			</div>
			<div className="d-flex flex-column w-100 mt-3 align-items-center">
				<h1>Planets</h1>
				<div class="d-flex flex-row flex-nowrap overflow-scroll align-items-stretch">
					{store.planets.map((item, index) => {
						return (
							<Card item={item} index={index} key={index} category="planets" />
						)
					})}
				</div>
			</div>
			<div className="d-flex flex-column w-100 mt-3 align-items-center">
				<h1>Vehicles</h1>
				<div class="d-flex flex-row flex-nowrap overflow-scroll align-items-stretch">
					{store.vehicles.map((item, index) => {
						return (
							<Card item={item} index={index} key={index} category="vehicles" />
						)
					})}
				</div>
			</div>
		</div>
	);
}

