import propTypes from "prop-types";
import React, {useContext} from "react";
import {Context} from '../store/appContext'
import rigoImage from "../../img/rigo-baby.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const DetailCard = (props) => {
    const {actions} = useContext(Context)
	return (
		<div className="card">
            <img src={rigoImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="detail-card-main">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.url}</p>
                </div>
                <div className="detail-card-information">
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Name</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" />
                    </div>
                </div>
                <a href="#" className="learn-more btn btn-primary">back!</a>
            </div>
        </div>
	);
};

DetailCard.propTypes = {
    id: propTypes.string,
    name: propTypes.string,
    description: propTypes.string,
    url: propTypes.string
}