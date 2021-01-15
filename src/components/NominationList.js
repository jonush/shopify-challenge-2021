import { useContext, useState, useEffect }from "react";
import styled from "styled-components";
import { theme } from "../styles/ColorStyles";
import { BodyTitle, BodyText }from "../styles/TextStyles";
import { NominationsContext } from "../contexts/NominationsContext";
import CloseButton from "../assets/CloseButton";

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  padding: 2rem 0 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: ${theme.neutral.lightest};
  box-shadow: 0px -4px 8px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 0 0;

  @media screen and (min-width: 768px) {
    width: 50%;
    padding-top: 0;
    position: relative;
    background: #FFFFFF;
    border: 1px solid ${theme.neutral.light};
    border-radius: 10px;
    box-shadow: none;
  }

  @media screen and (min-width: 1080px) {
    width: 35%;
    margin: 0 auto;
  }
`

const Title = styled(BodyTitle)`
  margin-bottom: 1rem;
  padding-top: 1rem;
  font-weight: bold;
`

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  border-top: 1px solid ${theme.neutral.light};
  margin-bottom: 1rem 0;
`

const MovieTitle = styled(BodyText)`
  text-align: left;
`

const RemoveNominationButton = styled.button`
  font-weight: bold;
  color: ${theme.danger.dark};
  background: ${theme.danger.light};

  &:hover {
    color: ${theme.danger.light};
    background: ${theme.danger.main};
  }
`

const PlaceholderText = styled(BodyText)`
  color: ${theme.neutral.main};
  margin: 1rem 0;
`

function NominationsList({setVisible}) {
  const {nominations, removeMovie} = useContext(NominationsContext);
  const [closeButton, hideCloseButton] = useState(false);

  useEffect(() => {
    if(window.innerWidth >= 768) {
      hideCloseButton(true);
    } else {
      hideCloseButton(false);
    }
  }, [nominations])

  return (
    <Wrapper>
      {!closeButton ? <CloseButton setVisible={setVisible} /> : null}
      <Title>My Nominations</Title>

      {
        nominations.length > 0 ? nominations.map((movie, index) => {
          return (
            <Card key={index}>
              <MovieTitle>{movie.Title} ({movie.Year})</MovieTitle>
              <RemoveNominationButton onClick={() => removeMovie(movie)}>Remove</RemoveNominationButton>
            </Card>
          )
        }) : <PlaceholderText>Your nominated movies will go here.</PlaceholderText>
      }
    </Wrapper>
  )
};

export default NominationsList;