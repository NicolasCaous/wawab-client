import React from "react";

import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { signout as signoutAction } from "../../../redux/authSlice";
import { useDispatch } from "react-redux";

interface ExposedHooks {
  signout: () => void;
}

const MenuFooterHooks: () => ExposedHooks = () => {
  const dispatch = useDispatch();

  const signout = () => {
    let modal = Modal.confirm({
      title: "Você tem certeza que deseja sair?",
      icon: <ExclamationCircleOutlined />,
      okText: "Sim",
      okType: "danger",
      cancelText: "Não",
      onOk() {
        dispatch(signoutAction());
        modal.destroy();
      },
    });
  };

  return {
    signout,
  };
};

export default MenuFooterHooks;
