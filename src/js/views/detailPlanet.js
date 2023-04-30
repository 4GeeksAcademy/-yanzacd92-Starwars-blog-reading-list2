import propTypes from "prop-types";
import React, {useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import {Context} from '../store/appContext'
import rigoImage from "../../img/rigo-baby.jpg";

export const DetailPlanet = () => {
    const {store, actions} = useContext(Context)
    const {id} = useParams()
    const planet = store.detailPlanets.find(item => item.uid === id)
    
    useEffect(() => {
        actions.getDetails(id, "planets")
    }, [])

	return (
		<div className="detail-main card">
            <div className="card-body">
                <div className="detail-card-main d-flex">
                    <img src={planet?.img} className="card-img-detail" alt="..." />
                    <div className="title-description">
                        <h5 className="card-title">{planet?.name}</h5>
                        <p className="card-text">{planet?.description}</p>
                    </div>
                </div>
                <hr className="dropdown-divider" />
                <div className="detail-card-information">
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Name</strong></label>
                        <p className="value-details">{planet?.name}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Climate</strong></label>
                        <p>{planet?.climate}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Population</strong></label>
                        <p>{planet?.population}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Orbital Period</strong></label>
                        <p>{planet?.orbital_period}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Rotation Period</strong></label>
                        <p>{planet?.rotation_period}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Diameter</strong></label>
                        <p>{planet?.diameter}</p>
                    </div>
                </div>
                <a href="/" className="learn-more btn btn-primary">back!</a>
            </div>
        </div>
	);
};

DetailPlanet.propTypes = {
    id: propTypes.string
}