import React, { FC } from "react";

import { Skeleton } from "antd";

// Style
import { Container, TitleContainer } from "./style";

const PhoneSkeleton: FC = () => {
  return (
    <Container>
      <Skeleton.Avatar active size={"large"} shape="circle" />
      <TitleContainer>
        <Skeleton
          active
          title={{
            style: { height: 24, width: "calc(100% - 16px)" },
          }}
          paragraph={{ rows: 0 }}
        />
      </TitleContainer>
    </Container>
  );
};

export default PhoneSkeleton;
