function MovieCard({ movie }) {
  const { id, title, vote_average, poster_path } = movie;
  // console.log(title);
  // console.log(id);

  return (
    <div className="movieCard">
      <img
        className="moviePoster"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
      />

      <div className="movieCardFooter">
        <div className="movieCardDetails">
          <h2 className="movieCardTitle">{title}</h2>
          <p className="movieCardRating">{vote_average}</p>
        </div>
        <div className="favButton">#</div>
      </div>
    </div>
  );
}

export default MovieCard;
