import React, { FC } from "react";

import { Button, Spin, Typography } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";

// Outer Components
import OverflowContainer from "../../../../components/OverflowContainer";

// Inner Components
import Phone from "./Phone";
import PhoneSkeleton from "./PhoneSkeleton";

// Hooks
import PhoneListHooks from "./hooks";

// Style
import { AddContainer, Container } from "./style";

import { useState } from "react";

const PhoneList: FC = () => {
  const { loading } = PhoneListHooks();

  const [phones, setPhones] = useState([
    {
      title: "Telefone Nicolas",
      description: "+5511971575437",
      iconSrc:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
  ]);

  return (
    <Container
      height={loading ? 80 + 48 + 16 : 80 + 48 * phones.length + 40 + 16}
    >
      <OverflowContainer>
        <Spin spinning={loading}>
          <Typography.Title level={2}>Telefones</Typography.Title>
          {loading ? (
            <PhoneSkeleton />
          ) : (
            <>
              {phones.map((phone: any) => (
                <Phone {...phone} />
              ))}
              <AddContainer>
                <Button
                  icon={<WhatsAppOutlined />}
                  onClick={() => {
                    setPhones(
                      phones.concat([
                        {
                          title: "Telefone Nicolas",
                          description: "+5511971575437",
                          iconSrc:
                            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                        },
                      ])
                    );
                  }}
                  block
                >
                  Adicionar
                </Button>
              </AddContainer>
            </>
          )}
        </Spin>
      </OverflowContainer>
    </Container>
  );
};

export default PhoneList;
