import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Single = ({ item, index, category }) => {
	const { store, actions } = useContext(Context);
	const GUIDE_URL = "https://starwars-visualguide.com/assets/img"
	return (
		<div className="single">
		</div>
	)
}
