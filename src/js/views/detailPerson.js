import propTypes from "prop-types";
import React, {useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import {Context} from '../store/appContext'
import rigoImage from "../../img/rigo-baby.jpg";

export const DetailPerson = () => {
    const {store, actions} = useContext(Context)
    const {id} = useParams()
    const person = store.detailPeople.find(item => item.uid === id)
    
    useEffect(() => {
        actions.getDetails(id, "people")
    }, [])

	return (
		<div className="detail-main card">
            <div className="card-body">
                <div className="detail-card-main d-flex">
                    <img src={rigoImage} className="card-img-detail" alt="..." />
                    <div className="title-description">
                        <h5 className="card-title">{person?.name}</h5>
                        <p className="card-text">{person?.description}</p>
                    </div>
                </div>
                <hr className="dropdown-divider" />
                <div className="detail-card-information">
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Name</strong></label>
                        <p className="value-details">{person?.name}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Climate</strong></label>
                        <p>{person?.climate}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Population</strong></label>
                        <p>{person?.population}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Orbital Period</strong></label>
                        <p>{person?.orbital_period}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Rotation Period</strong></label>
                        <p>{person?.rotation_period}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Diameter</strong></label>
                        <p>{person?.diameter}</p>
                    </div>
                </div>
                <a href="/" className="learn-more btn btn-primary">back!</a>
            </div>
        </div>
	);
};

DetailPerson.propTypes = {
    id: propTypes.string
}