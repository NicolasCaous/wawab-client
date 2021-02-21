import { useSelector } from "react-redux";

import {
  selectSocketStatus,
  SocketStatus,
} from "../../../../redux/socketSlice";

interface ExposedHooks {
  socketStatus: SocketStatus;
}

const SocketStatusHooks: () => ExposedHooks = () => {
  const socketStatus = useSelector(selectSocketStatus);

  return { socketStatus };
};

export default SocketStatusHooks;
