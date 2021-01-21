import React, { FC } from "react";

import { Menu } from "antd";

// Hooks
import DashboardHooks from "./hooks";

// Style
import { Container, Content, Header, HeaderFiller } from "./style";

const Dashboard: FC = () => {
  const { currentPhoneActive } = DashboardHooks();

  return (
    <>
      <Header theme={{ active: currentPhoneActive }}></Header>
      <HeaderFiller></HeaderFiller>
      <Container>
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={["home"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.SubMenu key="sub1" title="Navigation One">
            <Menu.ItemGroup key="g1" title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" title="Navigation Two">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub4" title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" title="Navigation Two">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub4" title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <Content></Content>
      </Container>
    </>
  );
};

export default Dashboard;
