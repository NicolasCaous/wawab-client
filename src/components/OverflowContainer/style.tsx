import styled from "styled-components";

export const BottomIndicatorContainer: any = styled.div.attrs(
  ({ opacity }: any) => ({
    style: {
      opacity,
    },
  })
)`
  pointer-events: none;
  width: 100%;
  height: 12px;
  position: absolute;
  bottom: 0;

  transition-property: opacity;
  transition-duration: 200ms;

  background-color: #e6f7ff;

  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;

  z-index: 10;
`;

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export const InnerContainer: any = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    ${(props: any) => (!props.scroll ? "width: 0px;" : "")}
    ${(props: any) => (!props.scroll ? "scrollbar-width: none;" : "")}
  }
`;

export const TopIndicatorContainer: any = styled.div.attrs(
  ({ opacity }: any) => ({
    style: {
      opacity,
    },
  })
)`
  pointer-events: none;
  width: 100%;
  height: 12px;
  position: absolute;
  top: 0;

  transition-property: opacity;
  transition-duration: 200ms;

  background-color: #e6f7ff;

  border-bottom-left-radius: 50% 100%;
  border-bottom-right-radius: 50% 100%;

  z-index: 10;
`;
