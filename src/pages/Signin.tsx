import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Button, Card, Divider, Form, Input, message, Spin, Steps } from "antd";
import { WebAuth } from "auth0-js";
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

  const webAuth = new WebAuth({
    domain: "wawab.eu.auth0.com",
    clientID: "DtvGvLtWw4EWIKx4CO9PkMCGnV50REdQ",
    responseType: "code",
  });

  const steps = [
    {
      title: "Código de verificação por e-mail",
      content: (submit: any) => (
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
            <Button type="primary" htmlType="button" onClick={submit}>
              Enviar Código
            </Button>
          </FloatRight>
        </>
      ),
      submit: async () => {
        try {
          await form.validateFields();
        } catch (error) {
          return;
        }

        let values = form.getFieldsValue();

        setLoading(true);
        let ret = await startPasswordless(webAuth, values.email);
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
            setEmail(values.email);
            setCurrentStep(currentStep + 1);
            break;
          default:
            message.warn("No ret.status handler");
        }
      },
    },
    {
      title: "Validação do código",
      content: (submit: any) => (
        <>
          <Form.Item
            label="Código"
            name="code"
            normalize={(value, prevValue, prevValues) => value.substr(0, 6)}
            validateFirst={true}
            rules={[
              { required: true, message: "Digite o código" },
              { len: 6, message: "O código é composto por 6 números" },
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
            <Button type="primary" htmlType="button" onClick={submit}>
              Entrar
            </Button>
          </FloatRight>
          <FloatRight>
            <Button
              type="default"
              htmlType="button"
              onClick={async () => {
                setLoading(true);
                let ret = await startPasswordless(webAuth, email);
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
                    break;
                  default:
                    message.warn("No ret.status handler");
                }
              }}
            >
              Reenviar
            </Button>
          </FloatRight>
        </>
      ),
      submit: async () => {
        try {
          await form.validateFields();
        } catch (error) {
          return;
        }

        let values = form.getFieldsValue();

        setLoading(true);
        let ret = await finishPasswordless(webAuth, email, values.code);
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
          case RetStatus.ERROR:
            console.log(ret);
            message.error("Erro do servidor");
            break;
          case RetStatus.OK:
            message.success("Yaaay");
            break;
          default:
            message.warn("No ret.status handler");
        }
      },
    },
  ];

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
                {steps.map((item) => (
                  <Steps.Step key={item.title} title={item.title} />
                ))}
              </Steps>
              {steps[currentStep].content(steps[currentStep].submit)}
            </Form>
          </Spin>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Signin;
