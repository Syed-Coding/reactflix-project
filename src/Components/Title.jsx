import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Title = ({ ele }) => {
  // console.log(props);
  return (
    <NavLink to={`/collections/${ele.url}`}>
      <h2 className="sectionTitle"> {ele.title}</h2>
    </NavLink>
  );
};
