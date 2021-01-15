import styled from "styled-components";

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 48px;

  @media screen and (max-width: 375px) {
    font-size: 36px;
  }
`

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 36px;

  @media screen and (max-width: 375px) {
    font-size: 30px;
  }
`

export const H3 = styled.h3`
  font-weight: semi-bold;
  font-size: 30px;

  @media screen and (max-width: 375px) {
    font-size: 25px;
  }
`

export const BodyTitle = styled.p`
  font-size: 24px;

  @media screen and (max-width: 375px) {
    font-size: 20px;
  }
`

export const BodyText = styled.p`
  font-size: 18px;
  line-height: 1.5;

  @media screen and (max-width: 375px) {
    font-size: 16px;
  }
`