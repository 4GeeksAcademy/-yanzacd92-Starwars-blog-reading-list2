import propTypes from "prop-types";
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import {Context} from '../store/appContext'

export const Card = (props) => {
	return (
		<div className="card">
            <img src={rigoImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Learn More!</a>
                <button class="btn btn-primary" type="submit">add Favorite</button>
            </div>
        </div>
	);
};

Card.propTypes = {
    id: propTypes.string
}