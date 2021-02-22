import React, { FC, ReactNode } from "react";

// Style
import { Container, IndicatorContainer, InnerContainer } from "./style";

// Hooks
import OverflowContainerHooks from "./hooks";

interface Props {
  children?: ReactNode;
  indicator?: boolean;
}

const OverflowContainer: FC<Props> = ({
  children,
  indicator = false,
}: Props) => {
  const { setRef, showIndicator } = OverflowContainerHooks(indicator);

  return (
    <Container>
      <InnerContainer ref={setRef}>{children}</InnerContainer>
      <IndicatorContainer opacity={showIndicator ? 0.8 : 0} />
    </Container>
  );
};

export default OverflowContainer;
