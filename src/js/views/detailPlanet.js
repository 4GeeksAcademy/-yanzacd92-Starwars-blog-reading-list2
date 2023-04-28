import propTypes from "prop-types";
import React, {useContext} from "react";
import {Context} from '../store/appContext'
import rigoImage from "../../img/rigo-baby.jpg";

export const DetailPlanet = (props) => {
    const {store} = useContext(Context)
    const planets = store.detailPlanets[props.id]
	return (
		<div className="card">
            <img src={rigoImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="detail-card-main">
                    <h5 className="card-title">{planets.properties.name}</h5>
                    <p className="card-text">{planets.description}</p>
                </div>
                <div className="detail-card-information">
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Name</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" value={planets.properties.name} />
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Climate</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" value={planets.properties.climate} />
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Population</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" value={planets.properties.population} />
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Orbital Period</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" value={planets.properties.orbital_period} />
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Rotation Period</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" value={planets.properties.rotation_period} />
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Diameter</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" value={planets.properties.diameter} />
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