import { useState } from "react";
import { useSelector } from "react-redux";

import { selectSocketStatus, SocketStatus } from "../../../redux/socketSlice";

interface ExposedHooks {
  socketStatus: SocketStatus;
}

const HeaderHooks: () => ExposedHooks = () => {
  const socketStatus = useSelector(selectSocketStatus);

  return { socketStatus };
};

export default HeaderHooks;
