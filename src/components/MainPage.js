import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import TV from "../assets/TV";
import Banner from "./Banner";
import NominationsList from "./NominationList";
import MoviesList from "./MoviesList";
import { MoviesContext } from "../contexts/MoviesContext";
import { SearchContext } from "../contexts/SearchContext";
import { NominationsContext } from "../contexts/NominationsContext";
import styled from "styled-components";
import { theme } from "../styles/ColorStyles";

const Wrapper = styled.div`
  height: 100vh;
  z-index: 0;
`

const NominationsButton = styled.button`
  width: 236px;
  z-index: 1;
  position: fixed;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  color: ${theme.primary.lightest};
  background: ${theme.primary.main};
  font-weight: 600;
  box-shadow: 0px 2px 6px 2px ${theme.neutral.light};

  &:hover {
    background: ${theme.primary.dark};
  }
`

const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  
  @media screen and (min-width: 1080px) {
    width: 60%;
  }
`

function MainPage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [results,setResults] = useState(0);
  const [nominations, setNominations] = useState([]);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [banner, setBanner] = useState(false);

  // retrieve saved nominations, if there are any
  useEffect(() => {
    if(localStorage.getItem("nominations")) {
      setNominations(JSON.parse(localStorage.getItem("nominations")));
    }
  }, [])

  // automatically show nominations list if not on mobile view
  useEffect(() => {
    if(window.innerWidth >= 768) {
      setVisible(true);
    }
  }, [window.innerWidth])

  // display a banner if user has nominated 5 movies
  useEffect(() => {
    if(nominations.length === 5) {
      setBanner(true);
    } else {
      setBanner(false);
    }
    localStorage.setItem("nominations", JSON.stringify(nominations));
  }, [nominations]);

  // toggle nominations list view for mobile devices
  const seeNominations = () => {
    setVisible(true);
  };

  const addMovie = movie => {
    if(nominations.length < 5) {
      setNominations([...nominations, movie]);
    }
  };

  const removeMovie = movie => {
    setNominations(nominations.filter(n => n.imdbID !== movie.imdbID))
  };

  return (
    <Wrapper>
      <MoviesContext.Provider value={{ movies, setMovies, addMovie }}>
        <SearchContext.Provider value={{search, setSearch, results, setResults}}>
        <NominationsContext.Provider value={{nominations, setNominations, removeMovie}}>
            {banner ? <Banner /> : null}
            <SearchBar setPage={setPage} />

            <MoviesContainer>
              { !visible ? <NominationsButton onClick={seeNominations}>My Nominations</NominationsButton> : <NominationsList visible={visible} setVisible={setVisible} />}
              { movies && movies.length > 0 ? <MoviesList page={page} setPage={setPage} /> : <TV /> }
            </MoviesContainer>
          </NominationsContext.Provider>
        </SearchContext.Provider>
      </MoviesContext.Provider>
    </Wrapper>
  )
};

export default MainPage;