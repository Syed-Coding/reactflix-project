import React, { useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { Link } from "react-router-dom";

export const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [data] = useFetch("search/movie", { query });
  return (
    <div className="searchBox">
      <input
        className="searchField"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="resultBox">
        <ul>
          {data?.results?.map((res) => {
            return (
              <Link to={`/movie/${res.id}`} key={res.id}>
                <li>
                  <img
                    src={
                      res.poster_path
                        ? `https://image.tmdb.org/t/p/w200/${res.poster_path}`
                        : "https://images.unsplash.com/photo-1633524588221-ae94a1947870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                    }
                    alt={res.title}
                  />
                  <div>
                    <h4>{res.title}</h4>
                    <p>{res.release_date.slice(0, 4)}</p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
