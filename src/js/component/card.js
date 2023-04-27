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
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className="card-btns">
                    <a href="#" className="learn-more btn btn-primary" onClick={() => actions.getDetails(props.url, props.element)}>Learn More!</a>
                    <button className="add-favorite-btn btn btn-primary" type="submit" onClick={() => actions.addToFavorites((props.id + "-" + props.element), props.name, props.element)}><FontAwesomeIcon className="add-favorite" icon={faHeart} /></button>
                </div>
            </div>
        </div>
	);
};

Card.propTypes = {
    id: propTypes.string,
    element: propTypes.string,
    name: propTypes.string,
    description: propTypes.string,
    img: propTypes.string,
    url: propTypes.string
}