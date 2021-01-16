import styled from "styled-components";
import { theme } from "../styles/ColorStyles";
import { BodyTitle, BodyText } from "../styles/TextStyles";
import MissingPoster from "../assets/MissingPoster";
import CloseButton from "../assets/CloseButton";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  background: #FFFFFF;
  box-shadow: 0 0 0 1000px rgba(0,0,0,0.38);
  border-radius: 10px;
  width: 250px;

  @media screen and (min-width: 768px) {
    width: 85%;
    height: 400px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  @media screen and (min-width: 1080px) {
    width: 50%;
    height: 500px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`

const Poster = styled.img`
  width: 250px;
  height: 350px;
  border-radius: 10px 10px 0 0;

  @media screen and (min-width: 768px) {
    width: 250px;
    height: 100%;
    border-radius: 10px 0 0 10px;
  }

  @media screen and (min-width: 1080px) {
    width: 300px;
    height: 100%;
    border-radius: 10px 0 0 10px;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    padding: 2rem;
  }
`

const Score = styled(BodyText)`
  position: absolute;
  top: 3%;
  left: 0;
  border-radius: 0 10px 10px 0;
  background: ${theme.primary.darker};
  padding: 0.5rem 2rem;
  color: ${theme.primary.lightest};
  font-weight: bold;
`

const Title = styled(BodyTitle)`
  font-weight: bold;
  color: ${theme.primary.dark};
  padding-top: 1rem;
`

const Rated = styled(BodyText)`
  color: ${theme.neutral.main};
  font-weight: 800;
`

const Plot = styled(BodyText)`
  margin-top: 1rem;
  color: ${theme.neutral.darker};
  height: 300px;
  overflow: scroll;
  font-size: 16px;
  padding-bottom: 1rem;

  @media screen and (min-width: 1080px) {
    font-size: 18px;
  }
`

function MovieDetails({details, setVisible}) {
  return(
    <Card>
      <CloseButton setVisible={setVisible} />
      { details.Poster !== "N/A" ? <Poster src={details.Poster} alt="movie poster" /> : <MissingPoster />}
      <Score>{details.imdbRating} / 10</Score>

      <Details>
        <Title>{details.Title} ({details.Year})</Title>
        <Rated>{details.Rated}</Rated>
        <Plot>{details.Plot}</Plot>
      </Details>
    </Card>
  )
};

export default MovieDetails;