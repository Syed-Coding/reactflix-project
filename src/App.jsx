import { Main } from "./Components/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Favourites } from "./Pages/Favourites";
import { MovieInfo } from "./Pages/MovieInfo";
import { UpcomingMovies } from "./Pages/UpcomingMovies";
import { PopularMovies } from "./Pages/PopularMovies";
import { PopularTvshows } from "./Pages/PopularTvshows";
import { AiringToday } from "./Pages/AiringToday";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Upcoming-Movies" element={<UpcomingMovies />} />
          <Route path="/Popular-TVShows" element={<PopularTvshows />} />
          <Route path="/Airing-today" element={<AiringToday />} />
          <Route path="/Popular-Movies" element={<PopularMovies />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="movie/:id" element={<MovieInfo />} />
        </Routes>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
