import { useState } from "react";
import MovieCard from "../Components/MovieCard";
import Wrapper from "../Components/Wrapper";
import Pagination from "../Components/Pagination";
import Loader from "../Components/Loader";
import ErrorMessage from "../Components/ErrorMessage";
import { useFetch } from "../Hooks/useFetch";
import { Title } from "./Title";
import { title } from "../Utils/data";
import { useParams } from "react-router-dom";
import Slider from "./Slider";
import { useGlobalContext } from "../Context/Context";
function Collections() {
  const { url } = useParams();
  console.log(url);

  const { dispatch, state } = useGlobalContext();
  const [data, loading, error] = useFetch(`movie/${url}`, {
    page: state.page,
  }); // custom hooks for reusing and destructing the return value
  // console.log("data in main", data);
  const { results, total_pages } = data;
  return (
    <main>
      <Slider></Slider>
      <Wrapper>
        {loading && <Loader></Loader>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {/* {console.log("even loader is true it wll also check another line")} */}
        <div className="sectionHeading">
          {title.map((ele) => (
            <Title ele={ele} key={ele.id} />
          ))}
        </div>
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
      {/* {console.log("rendering stopped in main")} */}
    </main>
  );
}

export default Collections;

//here key inside MovieCard is not a custom  props. it is inbuilt key props to identity similar components in same page
