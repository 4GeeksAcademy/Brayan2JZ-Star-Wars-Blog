import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import sithJarJar from "../../img/sithbinks.png"

export const Card = ({ item, index, category }) => {
	const { store, actions } = useContext(Context);
	const [imgErr, setImgErr] = useState(false);

	
	const GUIDE_URL = "https://starwars-visualguide.com/assets/img"
	const getImageURL = () => {
		if (imgErr) {
			return sithJarJar;
		} else{
			return `${GUIDE_URL}/${category}/${index + 1}.jpg`
		}
	}
	
	const imageStyle = {
		height: category === "vehicles" ? "190px" : 
			category === "planets" ? "268px" :
			"auto"
	}

	const isFavorite = store.favorites.some(fav => fav.name === item.name && fav.category === category)
	const handleFavorites = () => {
		const isFavorite = store.favorites.some(fav => fav.name === item.name && fav.category === category)
		if (isFavorite) {
			const indexToDelete = store.favorites.findIndex(fav => fav.name === item.name && fav.category === category)
			if (indexToDelete !== -1) {
				actions.deleteFavorites(indexToDelete)
			}
		} else {
			actions.addFavorites({ name: item.name, index, category })
		}
	}
	return (
		<div className="card" style={{ minWidth: "18rem" }}>
			<img
				src={getImageURL()}
				className="card-img-top" alt="..."
				onError={() => setImgErr(true)}
				style={imageStyle}
			/>
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
						<button className="btn btn-outline-primary">Learn More!</button>
					</Link>
					<i className={`fa-heart btn ${isFavorite ? "fa-solid" : "fa-regular"}`} style={{ color: "blueviolet", fontSize: "1.5rem" }} onClick={handleFavorites}></i>
				</div>
			</div>
		</div>
	);
};