import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import TV from "../assets/TV";
import MoviesList from "./MoviesList";
import { MoviesContext } from "../contexts/MoviesContext";
import { SearchContext } from "../contexts/SearchContext";

const Wrapper = styled.div`
  height: 100vh;
`

function MainPage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [results,setResults] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <Wrapper>
      <MoviesContext.Provider value={{ movies, setMovies }}>
        <SearchContext.Provider value={{search, setSearch, results, setResults}}>
          <SearchBar setPage={setPage} />

          { movies.length > 0 ? <MoviesList page={page} setPage={setPage} /> : <TV /> }
        </SearchContext.Provider>
      </MoviesContext.Provider>
    </Wrapper>
  )
};

export default MainPage;