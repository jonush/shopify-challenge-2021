import styled from "styled-components";
import { theme } from "../styles/ColorStyles";
import { BodyText } from "../styles/TextStyles";
import MissingPoster from "../assets/MissingPoster";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 1rem auto;
  padding: 2rem;
  border-radius: 10px;
  background: #FFFFFF;
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
  width: 156px;
  padding-left: 1rem;
`

const Title = styled(BodyText)`
  text-align: left;
`

const NominateButton = styled.button`
  width: 236px;
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  border: none;
  color: ${theme.primary.lightest};
  font-weight: 600;
  background: ${theme.primary.main};

  &:hover {
    cursor: pointer;
    background: ${theme.primary.dark};
  }
`

function MovieCard({ movie }) {
  return (
    <Card>
      <Info>
        { movie.Poster !== "N/A" ? <Poster src={movie.Poster} alt="movie poster" /> : <MissingPoster />}
        

        <Details>
          <Title>{movie.Title} ({movie.Year})</Title>
        </Details>
      </Info>

      <NominateButton>Nominate</NominateButton>
    </Card>
  )
};

export default MovieCard;