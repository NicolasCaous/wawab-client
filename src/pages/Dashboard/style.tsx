import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 48px);
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 48px);
  background-color: white;
`;

export const MenuContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr max-content;
  height: calc(100vh - 48px);
  border-right: 1px solid #f0f0f0;

  & > div:first-child::-webkit-scrollbar {
    width: 0px;
    scrollbar-width: none;
  }
`;

export const MenuStyleOverride = { width: 256, minWidth: 256 };
