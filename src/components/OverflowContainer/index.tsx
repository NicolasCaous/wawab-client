import React, { FC, ReactNode } from "react";

// Style
import {
  BottomIndicatorContainer,
  Container,
  InnerContainer,
  TopIndicatorContainer,
} from "./style";

// Hooks
import OverflowContainerHooks from "./hooks";

interface Props {
  children?: ReactNode;
  indicator?: boolean;
  scroll?: boolean;
}

const OverflowContainer: FC<Props> = ({
  children,
  indicator = false,
  scroll = true,
}: Props) => {
  const {
    setRef,
    showBottomIndicator,
    showTopIndicator,
  } = OverflowContainerHooks(indicator);

  return (
    <Container>
      <TopIndicatorContainer opacity={showTopIndicator ? 0.8 : 0} />
      <InnerContainer ref={setRef} scroll={scroll}>
        {children}
      </InnerContainer>
      <BottomIndicatorContainer opacity={showBottomIndicator ? 0.8 : 0} />
    </Container>
  );
};

export default OverflowContainer;
