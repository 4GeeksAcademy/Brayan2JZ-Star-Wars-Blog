import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const PlanCards = () => {
	return (
		<div class="d-flex flex-row flex-nowrap overflow-auto">
			<div className="card" style={{ width: "18rem" }}>
				<img src="https://img.freepik.com/premium-vector/silhouette-death-star-black-color-only_925376-222189.jpg?w=1380"
					className="card-img-top" alt="..." />
				<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
				<button type="button" class="btn btn-outline-primary" disabled>Primary button</button>
				<button type="button" class="btn btn-outline-warning" disabled>♥</button>
				</div>
			</div>
		</div>
	);
  };