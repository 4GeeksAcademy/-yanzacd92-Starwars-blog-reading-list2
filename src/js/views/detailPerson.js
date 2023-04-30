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
                    <img src={person?.img} className="card-img-detail" alt="..." />
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
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Height</strong></label>
                        <p>{person?.height}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Mass</strong></label>
                        <p>{person?.mass}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Hair Color</strong></label>
                        <p>{person?.hair_color}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Skin Color</strong></label>
                        <p>{person?.skin_color}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Eye Color</strong></label>
                        <p>{person?.eye_color}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Birth Year</strong></label>
                        <p>{person?.birth_year}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label"><strong>Gender</strong></label>
                        <p>{person?.gender}</p>
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