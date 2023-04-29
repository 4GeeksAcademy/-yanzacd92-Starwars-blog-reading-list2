import propTypes from "prop-types";
import React, {useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import {Context} from '../store/appContext'
import rigoImage from "../../img/rigo-baby.jpg";

export const DetailVehicle = () => {
    const {store, actions} = useContext(Context)
    const {id} = useParams()
    const vehicle = store.detailVehicles.find(item => item.uid === id)
    
    useEffect(() => {
        actions.getDetails(id, "vehicles")
    }, [])

	return (
		<div className="detail-main card">
            <div className="card-body">
                <div className="detail-card-main d-flex">
                    <img src={rigoImage} className="card-img-detail" alt="..." />
                    <div className="title-description">
                        <h5 className="card-title">{vehicle?.name}</h5>
                        <p className="card-text">{vehicle?.description}</p>
                    </div>
                </div>
                <hr className="dropdown-divider" />
                <div className="detail-card-information">
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Name</strong></label>
                        <p className="value-details">{vehicle?.name}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Climate</strong></label>
                        <p>{vehicle?.climate}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Population</strong></label>
                        <p>{vehicle?.population}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Orbital Period</strong></label>
                        <p>{vehicle?.orbital_period}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Rotation Period</strong></label>
                        <p>{vehicle?.rotation_period}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Diameter</strong></label>
                        <p>{vehicle?.diameter}</p>
                    </div>
                </div>
                <a href="/" className="learn-more btn btn-primary">back!</a>
            </div>
        </div>
	);
};

DetailVehicle.propTypes = {
    id: propTypes.string
}