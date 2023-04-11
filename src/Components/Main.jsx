import MovieCard from "./MovieCard";
import Wrapper from "./Wrapper";
import { popularMovies } from "../Utils/data";
function Main() {
  return (
    <main>
      <div className="movieSlider">
        <p
          style={{
            textAlign: "center",
          }}
        >
          Movie slider goes here
        </p>
        <Wrapper>
          <h2 className="sectionTitle">Popular Movies </h2>
          <div className="gallery">
            {popularMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </Wrapper>
      </div>
    </main>
  );
}

export default Main;

//here key inside MovieCard is not a custom  props. it is inbuilt key props to identity similar components in same page
