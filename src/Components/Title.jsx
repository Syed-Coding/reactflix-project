import React from "react";
import { Link } from "react-router-dom";

export const Title = ({ name }) => {
  return (
    <Link to={`/${name}`}>
      <h2 className="sectionTitle"> {name}</h2>
    </Link>
  );
};
