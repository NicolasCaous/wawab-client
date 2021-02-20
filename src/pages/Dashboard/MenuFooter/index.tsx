import React, { FC } from "react";

import { Divider } from "antd";

// Hooks
import MenuFooterHooks from "./hooks";

// Style
import { Container, DividerOverride } from "./style";

const MenuFooter: FC = () => {
  return (
    <Container>
      <Divider style={DividerOverride} />
      MENU FOOTER
    </Container>
  );
};

export default MenuFooter;
