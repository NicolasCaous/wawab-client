import React, { FC } from "react";

import { Menu } from "antd";
import { HomeOutlined, SettingFilled } from "@ant-design/icons";

// Components
import Header from "./Header";

// Hooks
import DashboardHooks from "./hooks";

// Style
import { Container, Content, MenuFooter } from "./style";

const Dashboard: FC = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Menu
          style={{ width: 256, minWidth: 256 }}
          defaultSelectedKeys={["home"]}
          mode="inline"
        >
          <Menu.Item icon={<HomeOutlined />} key="home">
            Home
          </Menu.Item>
          <Menu.SubMenu
            icon={<SettingFilled />}
            key="config"
            title="Configurações"
          >
            <Menu.ItemGroup key="g1" title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
              <Menu.SubMenu key="sub2" title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="sub3" title="Submenu">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.SubMenu>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <MenuFooter>
            <SettingFilled />
            OI
            <SettingFilled />
          </MenuFooter>
        </Menu>
        <Content></Content>
      </Container>
    </>
  );
};

export default Dashboard;
