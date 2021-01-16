import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Button, Card, Divider, Form, Input, message, Spin, Steps } from "antd";
import { startPasswordless, finishPasswordless, RetStatus } from "../api/auth";

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const CardContainer = styled.div`
  margin: auto;
  padding: 16px;
  width: 100%;

  @media (min-width: 400px) {
    width: 400px;
  }
`;

const FloatRight = styled.div`
  padding-left: 8px;
  float: right;
`;

const LogoImg = styled.img`
  width: 18%;
`;

const LogoText = styled.img`
  width: 82%;
`;

const Signin: FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [currentStep, setCurrentStep] = React.useState(0);
  const [email, setEmail] = React.useState("");

  const emailSubmit = async () => {
    try {
      await form.validateFields();
    } catch (error) {
      return;
    }

    let values = form.getFieldsValue();

    setLoading(true);
    let ret = await startPasswordless(values.email);
    setLoading(false);

    switch (ret.status) {
      case RetStatus.BAD_EMAIL:
        form.setFields([
          { errors: ["E-mail digitado não é válido"], name: "email" },
        ]);
        break;
      case RetStatus.ERROR:
        message.error(ret.error);
        break;
      case RetStatus.OK:
        message.success("Código enviado");
        setEmail(values.email);
        setCurrentStep(currentStep + 1);
        break;
      default:
        message.warn("No ret.status handler");
    }
  };

  const codeSubmit = async () => {
    try {
      await form.validateFields();
    } catch (error) {
      return;
    }

    let values = form.getFieldsValue();

    setLoading(true);
    let ret = await finishPasswordless(email, values.code);
    console.log(ret);
    setLoading(false);

    switch (ret.status) {
      case RetStatus.ACCESS_DENIED:
        form.setFields([
          {
            errors: ["Código incorreto"],
            name: "code",
          },
        ]);
        break;
      case RetStatus.INVALID_GRANT:
        form.setFields([
          {
            errors: ["Código expirado"],
            name: "code",
          },
        ]);
        break;
      case RetStatus.ERROR:
        console.log(ret);
        message.error("Erro do servidor");
        break;
      case RetStatus.OK:
        history.push("/dashboard");
        break;
      default:
        message.warn("No ret.status handler");
    }
  };

  const emailSubmitAgain = async () => {
    setLoading(true);
    let ret = await startPasswordless(email);
    setLoading(false);

    switch (ret.status) {
      case RetStatus.BAD_EMAIL:
        message.error("E-mail digitado não é válido");
        break;
      case RetStatus.ERROR:
        console.log(ret);
        message.error("Erro do servidor");
        break;
      case RetStatus.OK:
        message.success("Código reenviado");
        break;
      default:
        message.warn("No ret.status handler");
    }
  };

  return (
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
                      <Input />
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
                      <Input />
                    </Form.Item>
                    <Button
                      type="text"
                      htmlType="button"
                      onClick={() => {
                        setEmail("");
                        setCurrentStep(currentStep - 1);
                      }}
                    >
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
  );
};

export default Signin;
