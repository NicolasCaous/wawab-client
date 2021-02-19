import styled from "styled-components";

export const ArrowButtonContainer: any = styled.div.attrs(
  ({ rotate }: any) => ({
    style: {
      transform: `rotate(${rotate}deg)`,
    },
  })
)`
  display: inline-block;

  > button {
    height: 48px;
    width: 48px;
    color: white !important;
  }
`;

export const ExpandableContainer: any = styled.div.attrs(
  ({ bgcolor, height }: any) => ({
    style: {
      backgroundColor: bgcolor,
      height: `${height}vh`,
    },
  })
)`
  width: calc(100vw - 256px);
`;

export const FloatRight = styled.div`
  float: right;
`;

export const HeaderContainer: any = styled.div.attrs(({ bgcolor }: any) => ({
  style: {
    backgroundColor: bgcolor,
  },
}))`
  height: 48px;
  width: 100vw;
  position: fixed;
  z-index: 10;
`;

export const HeaderFiller = styled.div`
  height: 48px;
`;
