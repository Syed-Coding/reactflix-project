import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Wrapper from "./Wrapper";
// import { popularMovies } from "../Utils/data"; // local data dummy
import Pagination from "./Pagination";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Slider from "./Slider";
import axios from "axios";
function Main() {
  const [popMovies, setPopMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  console.log("popular movies is", popMovies);
  // console.log("toalpages is ", totalPages);
  // console.log("page no  ", page);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api_url = "https://api.themoviedb.org/3/movie/popular";

  // console.log(setPopMovies);
  useEffect(() => {
    // console.log("inisde use effect");

    console.log("inside use effect in main");
    const getfetch = async () => {
      try {
        let {
          data: { results, total_pages },
        } = await axios({
          method: "get",
          url: api_url,
          params: {
            api_key: "e3ef60114f3455d412ea55db83f798b2",
            page: page,
          },
        });
        // console.log("hiii in try");
        // console.log(results);
        setPopMovies(results), setTotalPages(total_pages);
        // setTimeout(() => {
        //   setLoading(false);
        // }, 5000);
        setLoading(false);
      } catch ({ message }) {
        setError(message);
        setLoading(false);
        // console.log("hiii in catch");
      }
    };
    getfetch();
  }, [page]);

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://api.themoviedb.org/3/movie/popular",
  //     params: {
  //       api_key: "e3ef60114f3455d412ea55db83f798b2",
  //       page: page, //first page is property name in axios and other is state, so if 2 are same name in object , we can simply write one name (page)
  //     },
  //   }).then(({ data: { results, total_pages } }) => {
  //     return setPopMovies(results), setTotalPages(total_pages);
  //     // console.log("inside axios")
  //   });
  // }, [page]); // useeffect work when page state updates and corrspond data fetches according to page

  return (
    <main>
      {console.log("rendering started in main")}

      <Slider></Slider>

      <Wrapper>
        {loading && <Loader></Loader>}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <h2 className="sectionTitle">Popular Movies </h2>
        {/* {console.log("even loader is true it wll also check another line")} */}
        {!loading && !error && (
          <>
            <div className="gallery">
              {popMovies?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            <Pagination
              setPage={setPage}
              totalPages={totalPages}
              page={page}
            ></Pagination>
          </>
        )}
        {console.log("rendering stopped in main")}
      </Wrapper>
    </main>
  );
}

export default Main;

//here key inside MovieCard is not a custom  props. it is inbuilt key props to identity similar components in same page
