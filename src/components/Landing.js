import styled from "styled-components";
import ShoppiesLogo from "../assets/Logo.png";
import { theme } from "../styles/ColorStyles";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Logo = styled.img`
  width: 200px;
`

const Button = styled.button`
  width: 200px;
  margin: 4rem auto 2rem;
  padding: 8px 2px;
  border: none;
  border-radius: 10px;
  color: ${theme.neutral.lightest};
  background: ${theme.primary.main};
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background: ${theme.primary.dark};
  }
`

function Landing() {
  return (
    <Wrapper>
      <Logo src={ShoppiesLogo} alt="The Shoppies Logo" />
      <Link to="/search"><Button>Get Started</Button></Link>
    </Wrapper>
  )
};

export default Landing;