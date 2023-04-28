import propTypes from "prop-types";
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from '../store/appContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeartRegular } from '@fortawesome/free-regular-svg-icons'

export const Card = (props) => {
    const {store, actions} = useContext(Context)
	const cards = store

    function checkFavorites(id) {
        if(store.favorites.some(item => item.id == `${id}-${props.element}`)) return faHeart
        return farHeartRegular
    }

	return (
        <div className="list-group d-flex flex-column">
            <h1 className="titles">{props.element}</h1>
			<div key={props.element} className="card-list d-flex flex-row">
				{cards[props.element]?.map((elm) =>
					<div key={elm.uid}>
						<div className="card">
                            <img src={elm.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{elm.name}</h5>
                                <div className="card-btns">
                                    <Link to={"planets/" + elm.uid}>
                                        <a href="#" className="learn-more btn btn-primary" onClick={() => actions.getDetails(elm.url, props.element)}>Learn More!</a>
                                    </Link>
                                    <button className="add-favorite-btn btn btn-primary" type="submit" onClick={() => actions.addToFavorites((elm.uid + "-" + props.element), elm.name, props.element)}><FontAwesomeIcon className="add-favorite" icon={checkFavorites(elm.uid)} /></button>
                                </div>
                            </div>
                        </div>
					</div>
				)}
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