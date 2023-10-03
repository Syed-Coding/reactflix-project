import { Main } from "./Components/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Favourites } from "./Pages/Favourites";
import { MovieInfo } from "./Pages/MovieInfo";
import Collections from "./Components/Collections";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route
            path="/Upcoming-Movies"
            element={<Home url="movie/upcoming"></Home>}
          />
          <Route path="/Popular-Movies" element={<Home url="movie/popular"></Home> /> */}
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
          {/* <Route path="/collections/*" element={<Collections />} /> */}
          <Route path="/collections/movie/:url" element={<Collections />} />
        </Routes>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
