import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import sithJarJar from "../../img/sithbinks.png"

export const Details = ({ category }) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const[imgErr, setImgErr] = useState(false);

    const getImageURL = () => {
        if (imgErr) {
            return sithJarJar;
        } else {
            return "https://starwars-visualguide.com/assets/img/" + category + "/" + (parseInt(params.id) + 1) + ".jpg"
        }
    }

    const character = store.characters.find((item, index) => index == params.id);
    const planet = store.planets.find((item, index) => index == params.id);
    const vehicle = store.vehicles.find((item, index) => index == params.id);

    let item;
    if (category === "characters") {
        item = character;
    } else if (category === "planets") {
        item = planet;
    } else if (category === "vehicles") {
        item = vehicle;
    }



    return (
        <div className="container text-center">
            <div className="row align-items-start">
                <img className="detImg" src={getImageURL()} onError={() => setImgErr(true)}></img>
                <div className="col">
                    <h1>
                        {item ? item.name : "Name not Found"}
                    </h1>
                    <p className="detPara">Phasellus molestie ac nisl vel aliquet. Donec quis tristique nunc, quis gravida erat. Integer scelerisque at ex quis vehicula. Cras accumsan interdum lacus, eu interdum ligula malesuada at. Sed auctor accumsan euismod. In hac habitasse platea dictumst. Integer quis leo fringilla, rhoncus orci at, imperdiet leo. Maecenas tristique aliquam sem at consequat. Suspendisse sodales tellus sed nibh tincidunt viverra. Mauris quis metus id nunc egestas rhoncus nec a ligula. Maecenas feugiat enim tellus, in tincidunt leo lacinia sit amet. Duis aliquet auctor quam, vitae condimentum lorem. Nulla a ipsum in purus scelerisque elementum et bibendum turpis. Maecenas diam tortor, pulvinar vitae efficitur non, tempus vel arcu.</p>
                </div>
            </div>
            <div className="fastFacts row align-items-start">
                <div className="cFacts col">
                    {
                        category == "characters" ? "Gender: " + item.gender :
                            category == "planets" ? "Population: " + item.population :
                                "Crew: " + item.crew
                    }
                </div>
                <div className="cFacts col">
                    {
                        category == "characters" ? "Birth Year: " + item.birth_year :
                            category == "planets" ? "Terrain: " + item.terrain :
                                "Vehicle Class: " + item.vehicle_class
                    }
                </div>
                <div className="cFacts col">
                    {
                        category == "characters" ? "Mass: " + item.mass :
                            category == "planets" ? "Diameter: " + item.diameter :
                                "Cost in Credits: " + item.cost_in_credits
                    }</div>
                <div className="cFacts col">
                    {
                        category == "characters" ? "Eye Color: " + item.eye_color :
                            category == "planets" ? "Climate: " + item.climate :
                                "Max Speed: " + item.max_atmosphering_speed
                    }
                </div>
                <div className="cFacts col">
                    {
                        category == "characters" ? "Hair Color: " + item.hair_color :
                            category == "planets" ? "Surface Water: " + item.surface_water :
                                "Passengers: " + item.passengers
                    }
                </div>
                <div className="cFacts col">
                    {
                        category == "characters" ? "Height: " + item.height :
                            category == "planets" ? "Gravity: " + item.gravity :
                                "Manufacturer: " + item.manufacturer
                    }
                </div>
            </div>
        </div>
    )
}
