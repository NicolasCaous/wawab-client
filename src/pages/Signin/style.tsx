import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const CardContainer = styled.div`
  margin: auto;
  padding: 16px;
  width: 100%;

  @media (min-width: 400px) {
    width: 400px;
  }
`;

export const FloatRight = styled.div`
  padding-left: 8px;
  float: right;
`;

export const LogoImg = styled.img`
  width: 18%;
`;

export const LogoText = styled.img`
  width: 82%;
`;
