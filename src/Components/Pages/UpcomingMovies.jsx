import React from "react";
import { useFetch } from "../../Hooks/useFetch";
import Home from "./Home";

export const UpcomingMovies = () => {
  return <Home url="movie/upcoming"></Home>;
};
