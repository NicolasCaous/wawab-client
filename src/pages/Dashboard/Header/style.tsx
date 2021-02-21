import styled from "styled-components";

export const ArrowButtonContainer: any = styled.div.attrs(
  ({ rotate }: any) => ({
    style: {
      transform: `rotate(${rotate}deg)`,
    },
  })
)`
  > button {
    height: 48px;
    width: 48px;
    color: white !important;
  }
`;

export const Divider = styled.div`
  margin: 12px 16px 12px 16px;
  border-left: 1px solid rgb(255 255 255 / 80%);
  border-right: 1px solid rgb(255 255 255 / 80%);
`;

export const FloatRightContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin-right: 16px;
`;

export const HeaderColors = {
  WAITING_TO_CONNECT: "#404040",
  CONNECTING: "#404040",
  IDLE: "#ff8e35",
  BUSY: "#52c41a",
  FAILED_TO_CONNECT: "#f5222d",
  CONCURRENT_LIMIT_REACHED: "#f5222d",
};

export const HeaderContainer: any = styled.div.attrs(({ bgcolor }: any) => ({
  style: {
    backgroundColor: bgcolor,
  },
}))`
  height: 48px;
  width: 100vw;
  position: fixed;
  transition: background-color 200ms;
  z-index: 10;
`;

export const HeaderFiller = styled.div`
  height: 48px;
`;
