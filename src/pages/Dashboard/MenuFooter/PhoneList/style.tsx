import styled from "styled-components";

export const AddContainer = styled.div`
  margin-top: 16px;
  margin-left: 24px;
  margin-right: 24px;
  padding-bottom: 16px;
`;

export const Container: any = styled.div.attrs(({ height }: any) => ({
  style: {
    height,
  },
}))`
  margin-top: -24px;
  margin-bottom: -24px;
  transition: height 500ms;
  max-height: 328px;
  width: 256px;

  h2:first-child {
    text-align: center;
    padding-top: 16px;
    padding-bottom: 24px;
    margin-bottom: 0;
  }

  & > div:first-child > div:first-child::-webkit-scrollbar {
    width: 0px;
    scrollbar-width: none;
  }
`;
