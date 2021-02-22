import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 8px;
`;

export const TitleContainer = styled.div`
  height: 40px;

  & h3 {
    margin: 8px !important;
  }
`;
