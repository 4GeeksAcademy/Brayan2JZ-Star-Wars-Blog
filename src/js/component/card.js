import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Card = ({ item, index, category }) => {
	const { store, actions } = useContext(Context);
	const GUIDE_URL = "https://starwars-visualguide.com/assets/img"
	return (
		<div className="card" style={{ minWidth: "18rem" }}>
			<img src={`${GUIDE_URL}/${category}/${index + 1}.jpg`}
				className="card-img-top" alt="..." />
			<div className="card-body d-flex flex-column">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text">
					{
						category == "characters" ? "Gender: " + item.gender :
							category == "planets" ? "Population: " + item.population :
								"Crew: " + item.crew
					}
				</p>
				<p className="card-text">
					{
						category == "characters" ? "Hair Color: " + item.hair_color :
							category == "planets" ? "Terrain: " + item.terrain :
								"Vehicle Class: " + item.vehicle_class
					}
				</p>
				<div className="buttons-div mt-auto d-flex justify-content-between">
					<Link to={`/details/${category}/${index}`}>
						<button class="btn btn-outline-primary">Learn More!</button>
					</Link>

					<button type="button" class="btn btn-outline-warning" disabled>♥</button>
				</div>
			</div>
		</div>
	);
};