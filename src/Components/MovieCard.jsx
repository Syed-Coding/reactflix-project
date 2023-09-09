import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { id, title, vote_average, poster_path, original_name } = movie;
  //or  {movie:{id, title, vote_average, poster_path}}
  // console.log(title);
  // console.log(id);

  return (
    <div className="movieCard">
      <Link to={`movie/${id}`}>
        <img
          className="moviePoster"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
        />
      </Link>

      <div className="movieCardFooter">
        <div className="movieCardDetails">
          <h2 className="movieCardTitle">{title || original_name}</h2>
          <p className="movieCardRating">{vote_average}</p>
        </div>
        <div className="favButton">#</div>
      </div>
    </div>
  );
}

export default MovieCard;
