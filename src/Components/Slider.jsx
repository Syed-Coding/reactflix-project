import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import splideOptions from "../Utils/splideoptions";
import axios from "axios";
function Slider() {
  const [latestMovies, setLatestMovies] = useState([]);
  console.log("latest is ", latestMovies);

  useEffect(() => {
    console.log("inside use effect in slider");
    const fetchData = async () => {
      let {
        data: { results },
      } = await axios({
        method: "get",
        url: " https://api.themoviedb.org/3/movie/now_playing",
        params: {
          api_key: "e3ef60114f3455d412ea55db83f798b2",
        },
      });
      setLatestMovies(results);
    };
    fetchData();
  }, []);

  return (
    <div className="movieSlider">
      {console.log("rendering started in slider")}
      <Splide options={splideOptions}>
        {latestMovies?.map(({ backdrop_path, title, id }) => (
          <SplideSlide key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
              alt={title}
            />
            <div className="slideCaption">
              <h2>{title}</h2>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      {console.log("rendering stopped in slider")}
    </div>
  );
}

export default Slider;
