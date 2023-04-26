import React, {useContext, useState} from "react";
import propTypes from "prop-types";
import {Context} from '../store/appContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Favorite = (props) => {
    const [totalFavorites, setTotalFavorites] = useState(0)
    const {store, actions} = useContext(Context)
	const favorites = store.favorites
    setTotalFavorites(store.favorites.lentgh)
    return(
        <div className="ml-auto">
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                    <span> {totalFavorites}</span>
                </button>
                <ul className="dropdown-menu">
                    {favorites.map((favorite) =>
                        <div className="d-flex" key={favorite.id}>
                            <li><a className="dropdown-item" href="#">{favorite.name}</a></li>
                            <button className="col-4 dropdown-item" type="button" onClick={actions.removeFromFavorites(favorite.id)}>
                                <FontAwesomeIcon className="add-favorite" icon={faTrash} />
                            </button>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
};

Favorite.propTypes = {
    name: propTypes.string
}