import "../../styles/home.css";
import React from "react";

export const NotFoundPage = () => {
	return (
		<div id="error-page">
         <div className="content">
            <h2 className="header" data-text="404">
               404
            </h2>
            <h4 data-text="Opps! Page not found">
               Opps! Page not found
            </h4>
            <p>
               Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
            </p>
            <div className="btns">
               <a href="/">Return Home</a>
            </div>
         </div>
      </div>
)};