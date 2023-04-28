import propTypes from "prop-types";
import React, {useContext} from "react";
import {Context} from '../store/appContext'
import rigoImage from "../../img/rigo-baby.jpg";

export const DetailPlanet = (props) => {
    const {store} = useContext(Context)
    const planets = store.detailPlanets[props.id]
    const propertyDetail = planets?.properties
	return (
		<div className="detail-main card">
            <img src={rigoImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="detail-card-main">
                    <h5 className="card-title">{propertyDetail?.name}</h5>
                    <p className="card-text">{planets?.description}</p>
                </div>
                <div className="detail-card-information">
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">Name</label>
                        <p className="value-details">{propertyDetail?.name}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Climate</strong></label>
                        <p>{propertyDetail?.climate}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Population</strong></label>
                        <p>{propertyDetail?.population}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Orbital Period</strong></label>
                        <p>{propertyDetail?.orbital_period}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Rotation Period</strong></label>
                        <p>{propertyDetail?.rotation_period}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Diameter</strong></label>
                        <p>{propertyDetail?.diameter}</p>
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