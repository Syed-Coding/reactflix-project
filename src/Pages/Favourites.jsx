import React from "react";
import Wrapper from "../Components/Wrapper";
import { useGlobalContext } from "../Context/Context";
import MovieCard from "../Components/MovieCard";
export const Favourites = () => {
  const { state } = useGlobalContext();

  return (
    <Wrapper>
      <h2 className="sectionTitle">Favorites Movies</h2>

      <div className="gallery">
        {state.favorites.length ? (
          state.favorites.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })
        ) : (
          <img
            style={{ maxWidth: "150%" }}
            src="https://img.freepik.com/premium-vector/modern-flat-design-concept-no-favorites-empty-favorites-popup-design_637684-90.jpg?w=2000"
          />
        )}
      </div>
    </Wrapper>
  );
};
