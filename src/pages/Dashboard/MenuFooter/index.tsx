import React, { FC } from "react";

import { Button, Divider } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

// Inner Components
import PhoneList from "./PhoneList";

// Hooks
import MenuFooterHooks from "./hooks";

// Style
import {
  Container,
  DividerOverride,
  LogoContainer,
  LogoImg,
  LogoText,
  SignoutContainer,
} from "./style";

const MenuFooter: FC = () => {
  const { signout } = MenuFooterHooks();

  return (
    <Container>
      <Divider style={DividerOverride} />
      <PhoneList />
      <Divider />
      <SignoutContainer>
        <LogoContainer>
          <LogoImg src="svg/logo-black.svg"></LogoImg>
          <LogoText src="svg/wawab.svg"></LogoText>
        </LogoContainer>
        <Button icon={<LogoutOutlined />} onClick={signout} block>
          Sair
        </Button>
      </SignoutContainer>
    </Container>
  );
};

export default MenuFooter;
