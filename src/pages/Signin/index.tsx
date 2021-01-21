import React, { FC } from "react";

import { Button, Card, Divider, Form, Input, Spin, Steps } from "antd";

// Components
import RedirectIf from "../../components/RedirectIf";

// Hooks
import SigninHooks from "./hooks";

// Style
import {
  Container,
  CardContainer,
  FloatRight,
  LogoImg,
  LogoText,
} from "./style";

const Signin: FC = () => {
  const {
    authenticated,
    codeSubmit,
    currentStep,
    emailSubmit,
    emailSubmitAgain,
    form,
    goBack,
    loading,
  } = SigninHooks();

  return (
    <RedirectIf when={authenticated} to="/dashboard">
      <Container>
        <CardContainer>
          <Card>
            <Spin spinning={loading}>
              <LogoImg src="svg/logo-black.svg"></LogoImg>
              <LogoText src="svg/wawab.svg"></LogoText>
              <Divider />
              <Form form={form}>
                <Steps direction="vertical" size="small" current={currentStep}>
                  <Steps.Step
                    key="Enviar código por e-mail"
                    title="Enviar código por e-mail"
                  />
                  <Steps.Step key="Validar código" title="Validar código" />
                </Steps>
                {
                  [
                    <>
                      <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[
                          { required: true, message: "Digite um e-mail" },
                          { type: "email", message: "E-mail inválido" },
                        ]}
                      >
                        <Input onPressEnter={emailSubmit} />
                      </Form.Item>
                      <FloatRight>
                        <Button
                          type="primary"
                          htmlType="button"
                          onClick={emailSubmit}
                        >
                          Enviar Código
                        </Button>
                      </FloatRight>
                    </>,
                    <>
                      <Form.Item
                        label="Código"
                        name="code"
                        normalize={(value, prevValue, prevValues) =>
                          value.substr(0, 6)
                        }
                        validateFirst={true}
                        rules={[
                          { required: true, message: "Digite o código" },
                          {
                            len: 6,
                            message: "O código é composto por 6 números",
                          },
                          {
                            pattern: /\d{6}/,
                            message: "Apenas números são permitidos",
                          },
                        ]}
                      >
                        <Input onPressEnter={codeSubmit} />
                      </Form.Item>
                      <Button type="text" htmlType="button" onClick={goBack}>
                        Voltar
                      </Button>
                      <FloatRight>
                        <Button
                          type="primary"
                          htmlType="button"
                          onClick={codeSubmit}
                        >
                          Entrar
                        </Button>
                      </FloatRight>
                      <FloatRight>
                        <Button
                          type="default"
                          htmlType="button"
                          onClick={emailSubmitAgain}
                        >
                          Reenviar
                        </Button>
                      </FloatRight>
                    </>,
                  ][currentStep]
                }
              </Form>
            </Spin>
          </Card>
        </CardContainer>
      </Container>
    </RedirectIf>
  );
};

export default Signin;
