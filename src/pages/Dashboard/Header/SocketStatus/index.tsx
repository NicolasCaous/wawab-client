import React, { FC } from "react";

import { Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

// Hooks
import HeaderHooks from "./hooks";

// Style
import { SpinContainer, StatusContainer } from "./style";

const SocketStatus: FC = () => {
  const { socketStatus } = HeaderHooks();

  return (
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
    </StatusContainer>
  );
};

export default SocketStatus;
