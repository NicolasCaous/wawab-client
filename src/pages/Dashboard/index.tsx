import React, { FC } from "react";

import { Layout, Menu } from "antd";
import { HomeOutlined, SettingFilled } from "@ant-design/icons";

// Outer Components
import OverflowContainer from "../../components/OverflowContainer";

// Inner Components
import Header from "./Header";
import MenuFooter from "./MenuFooter";

// Hooks
import DashboardHooks from "./hooks";

// Style
import { Container, Content, MenuContainer, MenuStyleOverride } from "./style";

const Dashboard: FC = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Layout>
          <Layout.Sider theme="light" width={256}>
            <MenuContainer>
              <OverflowContainer>
                <Menu
                  style={MenuStyleOverride}
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
                </Menu>
              </OverflowContainer>
              <MenuFooter></MenuFooter>
            </MenuContainer>
          </Layout.Sider>
          <Layout.Content>
            <Content>
              <OverflowContainer>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
                <h1>AAA</h1>
              </OverflowContainer>
            </Content>
          </Layout.Content>
        </Layout>
      </Container>
    </>
  );
};

export default Dashboard;
