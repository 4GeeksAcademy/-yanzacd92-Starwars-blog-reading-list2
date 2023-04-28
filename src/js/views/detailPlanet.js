import propTypes from "prop-types";
import React, {useContext} from "react";
import {Context} from '../store/appContext'
import rigoImage from "../../img/rigo-baby.jpg";

export const DetailPlanet = (props) => {
    const {store} = useContext(Context)
    const planets = store.detailPlanets[props.id]
    const propertyDetail = planets?.properties
    console.log("props: " + props)
    console.log("store.planets: " + store.planets)
    console.log("store.detailPlanets[props.id]: " + store.detailPlanets[props.id])
    console.log("props.id: " + props.uid)
	return (
		<div className="detail-main card">
            <div className="card-body">
                <div className="detail-card-main">
                    <img src={rigoImage} className="card-img-detail" alt="..." />
                    <h5 className="card-title">{propertyDetail?.name}</h5>
                    <p className="card-text">{planets?.description}</p>
                </div>
                <div className="detail-card-information">
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Name</strong></label>
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