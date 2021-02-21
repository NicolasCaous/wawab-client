import React, { FC } from "react";

import { Layout } from "antd";

// Outer Components
import OverflowContainer from "../../components/OverflowContainer";

// Inner Components
import Header from "./Header";
import Menu from "./Menu";
import MenuFooter from "./MenuFooter";

// Hooks
import DashboardHooks from "./hooks";

// Style
import { Container, Content, MenuContainer } from "./style";

const Dashboard: FC = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Layout>
          <Layout.Sider theme="light" width={256}>
            <MenuContainer>
              <Menu />
              <MenuFooter />
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
