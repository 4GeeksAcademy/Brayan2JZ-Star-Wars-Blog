import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Details = ({ category }) => {
    const { store } = useContext(Context);
    let { id } = useParams();
    
    

    return (
        <div className="detBody">
            <h1>I HATE THIS</h1>
            <h1>{id}</h1>
            <div className="d-flex flex-row align-items-center">
                
            </div>
        </div>
    )
}
