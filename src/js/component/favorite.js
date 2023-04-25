import React from "react";
import propTypes from "prop-types";

export const Favorite = (props) => {
    return(
        <div className="ml-auto">
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
            </div>
        </div>
    );
};

Favorite.propTypes = {
    name: propTypes.string
}