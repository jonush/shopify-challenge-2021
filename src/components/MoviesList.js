import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import styled from "styled-components";
import { theme } from "../styles/ColorStyles";
import MovieCard from "./MovieCard";
import { SearchContext } from "../contexts/SearchContext";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding-bottom: 4rem;

  @media screen and (min-width: 768px) {
    width: 45%;
  }
`

const LoadButton = styled.button`
  width: 236px;
  margin: 1rem 0 2rem;
  padding: 0.5rem 2rem;
  color: ${theme.primary.main};
  background: ${theme.primary.lightest};
  font-weight: 600;
  outline: none;

  &:hover {
    cursor: pointer;
    background: ${theme.primary.dark};
  }
`

function MoviesList({page, setPage}) {
  const {movies, setMovies} = useContext(MoviesContext);
  const {search, results} = useContext(SearchContext);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let maxPages = Math.ceil(results / 10);

    if(page >= maxPages) {
      setVisible(false);
    }
  }, [movies, page, results])

  const fetchMovies = () => {
    return axios
      .get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}&page=${page+1}&type=movie`)
      .then(res => {
        console.log(res.data);
        setPage(page + 1);
        setMovies(res.data.Search);
        window.scrollTo(0,0);
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <Wrapper>
      {
        movies && movies.map((movie, index) => {
          return (
            <MovieCard key={index} movie={movie} />
          )
        })
      }
      
      {!visible ? null : <LoadButton onClick={fetchMovies}>Load More Results</LoadButton>}
    </Wrapper>
  )
};

export default MoviesList;