import React from "react";
import Error from "../images/Error.jpeg";
import { Link } from "react-router-dom";

export const NoMatch = () => {
  return (
    <div>
      <img src={Error} alt="notFound" className="error_img"/>
      <div>
        <Link to="/" className="back_link">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};
