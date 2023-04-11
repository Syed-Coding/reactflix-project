import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Wrapper from "./Wrapper";
// import { popularMovies } from "../Utils/data"; // local data dummy
import axios from "axios";
import Pagination from "./Pagination";
function Main() {
  const [popMovies, setPopMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  // console.log('popular movies is' , popMovies);
  // console.log("toalpages is ", totalPages);
  // console.log("page no  ", page);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: {
        api_key: "e3ef60114f3455d412ea55db83f798b2",
        page: page, //first page is property name in axios and other is state, so if 2 are same name in object , we can simply write one name (page)
      },
    }).then(({ data: { results, total_pages } }) => {
      return setPopMovies(results), setTotalPages(total_pages);
      // console.log("inside axios")
    });
  }, [page]); // useeffect work when page state updates and corrspond data fetches according to page

  return (
    <main>
      {/* {console.log("rendering started")} */}
      <div className="movieSlider">
        <p
          style={{
            textAlign: "center",
          }}
        >
          Movie slider goes here
        </p>
        {/* {console.log("rendering stopped")} */}
      </div>
      <Wrapper>
        <h2 className="sectionTitle">Popular Movies </h2>
        <div className="gallery">
          {popMovies &&
            popMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        <Pagination
          setPage={setPage}
          totalPages={totalPages}
          page={page}
        ></Pagination>
      </Wrapper>
    </main>
  );
}

export default Main;

//here key inside MovieCard is not a custom  props. it is inbuilt key props to identity similar components in same page
