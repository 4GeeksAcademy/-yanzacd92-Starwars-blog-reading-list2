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
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Model</strong></label>
                        <p>{vehicle?.model}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Vehicle Class</strong></label>
                        <p>{vehicle?.vehicle_class}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Manufacturer</strong></label>
                        <p>{vehicle?.manufacturer}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Cost in Credits</strong></label>
                        <p>{vehicle?.cost_in_credits}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Length</strong></label>
                        <p>{vehicle?.length}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Crew</strong></label>
                        <p>{vehicle?.crew}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Passengers</strong></label>
                        <p>{vehicle?.passengers}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Max Atmosphering Speed</strong></label>
                        <p>{vehicle?.max_atmosphering_speed}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Cargo Capacity</strong></label>
                        <p>{vehicle?.cargo_capacity}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Consumables</strong></label>
                        <p>{vehicle?.consumables}</p>
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