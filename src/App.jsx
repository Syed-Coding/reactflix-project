import { Main } from "./Components/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import { Favourites } from "./Components/Pages/Favourites";
import { MovieInfo } from "./Components/Pages/MovieInfo";
import { UpcomingMovies } from "./Components/Pages/UpcomingMovies";
import { PopularMovies } from "./Components/Pages/PopularMovies";
import { PopularTvshows } from "./Components/Pages/PopularTvshows";
import { AiringToday } from "./Components/Pages/AiringToday";
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
