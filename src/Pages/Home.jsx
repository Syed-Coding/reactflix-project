import { useState } from "react";
import MovieCard from "../Components/MovieCard";
import Wrapper from "../Components/Wrapper";
// import { popularMovies } from "../Utils/data"; // local data dummy
import Pagination from "../Components/Pagination";
import Loader from "../Components/Loader";
import ErrorMessage from "../Components/ErrorMessage";
import Slider from "../Components/Slider";
import { useFetch } from "../Hooks/useFetch";
import { Title } from "../Components/Title";
import { title } from "../Utils/data";
import { useGlobalContext } from "../Context/Context";
function Home({ url }) {
  const { dispatch, state } = useGlobalContext();
  const [data, loading, error] = useFetch(url, {
    page: state.page,
  }); // custom hooks for reusing and destructing the return value
  // console.log("data in main", data);
  const { results, total_pages } = data;
  console.log("results", results);
  console.log("totalpages", total_pages);

  // const [popMovies, setPopMovies] = useState([]);
  // const [totalPages, setTotalPages] = useState(null);
  // console.log("popular movies is", popMovies);
  // console.log("toalpages is ", totalPages);
  // console.log("page no  ", page);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const api_url = "https://api.themoviedb.org/3/movie/popular";

  // // console.log(setPopMovies);
  // useEffect(() => {
  //   // console.log("inisde use effect");

  //   console.log("inside use effect in main");
  //   const getfetch = async () => {
  //     try {
  //       let {
  //         data: { results, total_pages },
  //       } = await axios({
  //         method: "get",
  //         url: api_url,
  //         params: {
  //           api_key: "e3ef60114f3455d412ea55db83f798b2",
  //           page: page,
  //         },
  //       });
  //       // console.log("hiii in try");
  //       // console.log(results);
  //       setPopMovies(results), setTotalPages(total_pages);
  //       // setTimeout(() => {
  //       //   setLoading(false);
  //       // }, 5000);
  //       setLoading(false);
  //     } catch ({ message }) {
  //       setError(message);
  //       setLoading(false);
  //       // console.log("hiii in catch");
  //     }
  //   };
  //   getfetch();
  // }, [page]);

  // below is fetching using .then method

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
        <div className="sectionHeading">
          {title.map((ele) => (
            <Title ele={ele} />
          ))}
        </div>
        {/* {console.log("even loader is true it wll also check another line")} */}
        {!loading && !error && (
          <>
            <div className="gallery">
              {results?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}

              {/* <div className="gallery">
              {results?.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} /> // or we can just simply use () insted of return
              })} */}
            </div>
            <Pagination
              dispatch={dispatch}
              page={state.page}
              totalPages={total_pages}
            ></Pagination>
          </>
        )}
      </Wrapper>
      {console.log("rendering stopped in main")}
    </main>
  );
}

export default Home;

//here key inside MovieCard is not a custom  props. it is inbuilt key props to identity similar components in same page
