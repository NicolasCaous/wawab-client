import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 8px;
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 40px;
  margin-left: 8px;

  & > * {
    height: 20px;
  }
`;
