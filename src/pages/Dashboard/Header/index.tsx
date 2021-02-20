import React, { FC } from "react";

import { Button, Spin, Typography } from "antd";
import { DownOutlined, LoadingOutlined } from "@ant-design/icons";

// Components
import FloatRight from "../../../components/FloatRight";

// Hooks
import HeaderHooks from "./hooks";

// Style
import {
  ArrowButtonContainer,
  Divider,
  FloatRightContainer,
  HeaderColors,
  HeaderContainer,
  HeaderFiller,
  SpinContainer,
  StatusContainer,
} from "./style";

import { connect } from "../../../redux/socketSlice";
import { useDispatch } from "react-redux";

const Header: FC = () => {
  const { socketStatus } = HeaderHooks();

  const dispatch = useDispatch();

  return (
    <>
      <HeaderContainer bgcolor={HeaderColors[socketStatus]}>
        <FloatRight>
          <FloatRightContainer>
            {(() => {
              let nodes: any = [
                <ArrowButtonContainer>
                  <Button
                    type="text"
                    icon={<DownOutlined />}
                    onClick={() => dispatch(connect())}
                  />
                </ArrowButtonContainer>,
                <StatusContainer>
                  <Typography.Text strong>
                    {
                      {
                        WAITING_TO_CONNECT: "Inicializando...",
                        CONNECTING: (
                          <>
                            <SpinContainer>
                              <LoadingOutlined style={{ fontSize: 14 }} spin />
                            </SpinContainer>
                            Conectando...
                          </>
                        ),
                        IDLE: "Ocioso",
                        BUSY: "Ativo",
                        FAILED_TO_CONNECT: "Falha ao Conectar",
                        CONCURRENT_LIMIT_REACHED: "Limite de Conexões Atingido",
                      }[socketStatus]
                    }
                  </Typography.Text>
                </StatusContainer>,
              ];

              return nodes.reduce(
                (acc: any, x: any) =>
                  acc === null ? (
                    x
                  ) : (
                    <>
                      {acc}
                      <Divider />
                      {x}
                    </>
                  ),
                null
              );
            })()}
          </FloatRightContainer>
        </FloatRight>
      </HeaderContainer>
      <HeaderFiller></HeaderFiller>
    </>
  );
};

export default Header;
