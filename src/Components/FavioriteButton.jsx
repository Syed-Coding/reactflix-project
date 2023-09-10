import React from "react";
import { useGlobalContext } from "../Context/Context";
import heartFill from "../assets/heart-filled.svg";
import heartlined from "../assets/heart-lined.svg";
export const FavioriteButton = ({ movie }) => {
  const { state, dispatch } = useGlobalContext();
  // console.log(state, dispatch);

  const favorited = state.favorites.some((ele) => ele.id === movie.id);

  // console.log(favorited);
  const handlefavorite = () => {
    favorited
      ? dispatch({ type: "Remove Favorite", payload: movie.id })
      : dispatch({ type: "Add to Favorite", payload: movie });
  };
  return (
    <div className="favButton" onClick={handlefavorite}>
      {favorited ? (
        <img src={heartFill} alt="" />
      ) : (
        <img src={heartlined} alt="" />
      )}
    </div>
  );
};
