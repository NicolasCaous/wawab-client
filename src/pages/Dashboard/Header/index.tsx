import React, { FC } from "react";
import { Animate } from "react-move";
import { easeQuadInOut } from "d3-ease";
import { interpolate } from "d3-interpolate";

import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

// Hooks
import HeaderHooks from "./hooks";

// Style
import {
  ArrowButtonContainer,
  ExpandableContainer,
  FloatRight,
  HeaderContainer,
  HeaderFiller,
} from "./style";

const Header: FC = () => {
  const { currentPhoneActive, expanded, setExpanded } = HeaderHooks();

  return (
    <>
      <Animate
        start={{
          expandableHeight: 0,
          headerColor: expanded ? "#52c41a" : "#f5222d",
          rotation: 0,
        }}
        update={{
          expandableHeight: [expanded ? 100 : 0],
          headerColor: [expanded ? "#52c41a" : "#f5222d"],
          rotation: [expanded ? 180 : 0],
          timing: { duration: 200, ease: easeQuadInOut },
        }}
        interpolation={(begValue, endValue, attr, namespace) => {
          return interpolate(begValue, endValue);
        }}
      >
        {({ expandableHeight, headerColor, rotation }) => (
          <HeaderContainer bgcolor={headerColor}>
            <FloatRight>
              <ExpandableContainer
                bgcolor={headerColor}
                height={expandableHeight}
              >
                <FloatRight>
                  <ArrowButtonContainer rotate={rotation}>
                    <Button
                      type="text"
                      icon={<DownOutlined />}
                      onClick={() => setExpanded(!expanded)}
                    />
                  </ArrowButtonContainer>
                </FloatRight>
              </ExpandableContainer>
            </FloatRight>
          </HeaderContainer>
        )}
      </Animate>
      <HeaderFiller></HeaderFiller>
    </>
  );
};

export default Header;
