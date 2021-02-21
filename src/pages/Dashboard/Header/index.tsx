import React, { FC } from "react";

import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

// Outer Components
import FloatRight from "../../../components/FloatRight";

// Inner Components
import SocketStatus from "./SocketStatus";

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
                <SocketStatus />,
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
