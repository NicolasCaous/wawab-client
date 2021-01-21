import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 48px);
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  height: 48px;
  width: 100vw;
  position: fixed;
  z-index: 10;

  background-color: ${(props) => (props.theme.active ? "#52c41a" : "#f5222d")};
`;

Header.defaultProps = {
  theme: {
    active: false,
  },
};

export const HeaderFiller = styled.div`
  height: 48px;
`;
