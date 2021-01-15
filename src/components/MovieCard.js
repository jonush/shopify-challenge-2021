import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../styles/ColorStyles";
import { BodyText } from "../styles/TextStyles";
import MissingPoster from "../assets/MissingPoster";
import { MoviesContext } from "../contexts/MoviesContext";
import { NominationsContext } from "../contexts/NominationsContext";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 225px;
  margin: 0 auto 1rem;
  padding: 2rem;
  border-radius: 10px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.18);
`

const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

const Poster = styled.img`
  width: 80px;
  height: 120px;
  border-radius: 10px;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 120px;
  width: 129px;
  padding-left: 1rem;
`

const Title = styled(BodyText)`
  text-align: left;
  overflow-wrap: break-word;
`

const NominatedButton =  styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 0.4rem 2rem;
  color: ${theme.neutral.main};
  font-weight: 600;
  border: 2px solid ${theme.neutral.main};
`

const AddNominationButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  color: ${theme.primary.lightest};
  font-weight: 600;
  background: ${theme.primary.main};

  &:hover {
    background: ${theme.primary.dark};
  }
`

function MovieCard({ movie }) {
  const {addMovie} = useContext(MoviesContext);
  const {nominations} = useContext(NominationsContext);
  const [nominated, setNominated] = useState(false);

  useEffect(() => {
    checkIfNominated(movie);
  }, [nominations])

  const checkIfNominated = movie => {
    if(nominations.filter(n => n.imdbID === movie.imdbID).length > 0) {
      setNominated(true);
    } else {
      setNominated(false);
    }
  };

  return (
    <Card>
      <Info>
        { movie.Poster !== "N/A" ? <Poster src={movie.Poster} alt="movie poster" /> : <MissingPoster />}
        

        <Details>
          <Title>{movie.Title} ({movie.Year})</Title>
        </Details>
      </Info>

      {nominated ? <NominatedButton disabled>Nominated</NominatedButton> : <AddNominationButton onClick={() => addMovie(movie)}>Nominate</AddNominationButton>}
      
    </Card>
  )
};

export default MovieCard;