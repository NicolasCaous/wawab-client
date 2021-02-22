import React, { FC, ReactNode } from "react";

import { Avatar, Typography } from "antd";

// Style
import { Container, TextContainer } from "./style";

interface Props {
  //icon: ReactNode;
  iconSrc: string;
  title: string;
  description: string;
}

const Phone: FC<Props> = ({ iconSrc, title, description }: Props) => {
  return (
    <Container>
      <Avatar size="large" src={iconSrc} />
      <TextContainer>
        <Typography.Text strong ellipsis>
          {title}
        </Typography.Text>
        <Typography.Text ellipsis>{description}</Typography.Text>
      </TextContainer>
    </Container>
  );
};

export default Phone;
