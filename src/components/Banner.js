import styled from "styled-components";
import { theme } from "../styles/ColorStyles";
import { BodyText } from "../styles/TextStyles";

const SuccessBanner = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background: ${theme.alert.light};
  padding: 0.5rem 0;
  z-index: 2;
`

const Message = styled(BodyText)`
  color: ${theme.alert.dark};
`

function Banner() {
  return (
    <SuccessBanner>
      <Message>🥳 Congratulations! You've selected your five nominations for The Shoppies! 🥳</Message>
    </SuccessBanner>
  )
};

export default Banner;