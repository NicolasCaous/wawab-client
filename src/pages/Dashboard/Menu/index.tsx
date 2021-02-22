import React, { FC } from "react";

import { Menu as AntMenu } from "antd";
import { HomeOutlined, SettingFilled } from "@ant-design/icons";

// Outer Components
import OverflowContainer from "../../../components/OverflowContainer";

// Hooks
import MenuHooks from "./hooks";

// Style
import { MenuStyleOverride } from "./style";

const Menu: FC = () => {
  return (
    <OverflowContainer indicator>
      <AntMenu
        style={MenuStyleOverride}
        defaultSelectedKeys={["home"]}
        mode="inline"
      >
        <AntMenu.Item icon={<HomeOutlined />} key="home">
          Home
        </AntMenu.Item>
        <AntMenu.SubMenu
          icon={<SettingFilled />}
          key="config"
          title="Configurações"
        >
          <AntMenu.ItemGroup key="g1" title="Item 1">
            <AntMenu.Item key="1">Option 1</AntMenu.Item>
            <AntMenu.Item key="2">Option 2</AntMenu.Item>
          </AntMenu.ItemGroup>
          <AntMenu.ItemGroup key="g2" title="Item 2">
            <AntMenu.SubMenu key="sub2" title="Navigation Two">
              <AntMenu.Item key="5">Option 5</AntMenu.Item>
              <AntMenu.Item key="6">Option 6</AntMenu.Item>
            </AntMenu.SubMenu>
            <AntMenu.SubMenu key="sub3" title="Submenu">
              <AntMenu.Item key="3">Option 3</AntMenu.Item>
              <AntMenu.Item key="4">Option 4</AntMenu.Item>
            </AntMenu.SubMenu>
          </AntMenu.ItemGroup>
        </AntMenu.SubMenu>
      </AntMenu>
    </OverflowContainer>
  );
};

export default Menu;
