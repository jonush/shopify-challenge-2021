import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import styled from "styled-components";
import { theme } from "../styles/ColorStyles";
import ShoppiesLogo from "../assets/Logo.png";
import axios from "axios";
import { SearchContext } from "../contexts/SearchContext";

const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 2rem;
  }
`

const Logo = styled.img`
  width: 100px;
  margin: 2rem 0 1rem;
`

const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 500px;
  }
`

const SearchInput = styled.input`
  width: 234px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  color: ${theme.neutral.darkest};
  background: ${theme.neutral.lighter};
  outline: none;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin: 0;
    border-radius: 10px 0 0 10px;
  }
`

const SearchButton = styled.button`
  width: 250px;
  color: ${theme.primary.lightest};
  background: ${theme.primary.main};
  font-weight: bold;

  &:hover {
    background: ${theme.primary.dark};
  }

  @media screen and (min-width: 768px) {
    border-radius: 0 10px 10px 0;
  }
`

function SearchBar({setPage}) {
  const {setMovies} = useContext(MoviesContext);
  const {search, setSearch, setResults} = useContext(SearchContext);

  const handleInput = e => {
    setSearch(e.target.value);
  };

  const submitSearch = e => {
    e.preventDefault();

    return axios
      .get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}&type=movie`)
      .then(res => {
        setResults(res.data.totalResults);
        setMovies(res.data.Search);
        setPage(1);
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <Wrapper>
      <Logo src={ShoppiesLogo} alt="The Shoppies Logo" />

      <SearchContainer onSubmit={submitSearch}>
        <SearchInput
          value={search}
          onClick={e => e.target.select()}
          onChange={handleInput}
          placeholder="Search for a movie"
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchContainer>
    </Wrapper>
  )
};

export default SearchBar;