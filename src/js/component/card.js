import propTypes from "prop-types";
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

export const Card = (props) => {
	return (
		<div className="card">
            <img src={rigoImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Learn More!</a>
                <button className="btn btn-primary" type="submit">add Favorite</button>
            </div>
        </div>
	);
};

Card.propTypes = {
    id: propTypes.string,
    name: propTypes.string
}