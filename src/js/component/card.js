import propTypes from "prop-types";
import React, {useContext} from "react";
import {Context} from '../store/appContext'
import rigoImage from "../../img/rigo-baby.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const Card = (props) => {
    const {actions} = useContext(Context)
	return (
		<div className="card">
            <img src={rigoImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.url}</p>
                <a href="#" className="learn-more btn btn-primary">Learn More!</a>
                <button className="add-favorite-btn btn btn-primary" type="submit" onClick={() => actions.addToFavorites(props.id, props.name)}><FontAwesomeIcon className="add-favorite" icon={faHeart} /></button>
            </div>
        </div>
	);
};

Card.propTypes = {
    id: propTypes.string,
    name: propTypes.string,
    description: propTypes.string,
    url: propTypes.string
}