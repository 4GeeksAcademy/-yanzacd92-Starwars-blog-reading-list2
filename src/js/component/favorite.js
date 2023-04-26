import React, {useContext} from "react";
import propTypes from "prop-types";
import {Context} from '../store/appContext'

export const Favorite = (props) => {
    const {store, actions} = useContext(Context)
	const favorites = store.favorites
    return(
        <div className="ml-auto">
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                </button>
                <ul className="dropdown-menu">
                    {favorites.map((favorite) =>
                        <li key={favorite.id}><a className="dropdown-item" href="#">{favorite.name}</a></li>
                    )}
                </ul>
            </div>
        </div>
    );
};

Favorite.propTypes = {
    name: propTypes.string
}