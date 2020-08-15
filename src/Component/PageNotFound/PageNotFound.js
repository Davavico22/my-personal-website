import React from "react";
import "./PageNotFound.css";
import { NavLink } from "react-router-dom";


function PageNotFound(props) {
  return (
    <div className="PageNotFound">
      <h1 className="PageNotFound_number">Error 404</h1>
      <h1 className="PageNotFound_text">The requested page does not exist.</h1><br></br>
      <h1 className="PageNotFound_link">Go home <NavLink to={"/"} className="PageNotFound_link_color">here</NavLink>.</h1>  
    </div>
  );
}

export default PageNotFound;