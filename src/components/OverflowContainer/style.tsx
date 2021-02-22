import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export const IndicatorContainer: any = styled.div.attrs(({ opacity }: any) => ({
  style: {
    opacity,
  },
}))`
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
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
