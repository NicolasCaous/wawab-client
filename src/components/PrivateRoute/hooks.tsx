import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectAuthenticated, signoutIfExpired } from "../../redux/authSlice";

interface ExposedHooks {
  authenticated: boolean;
}

const PrivateRouteHooks: () => ExposedHooks = () => {
  const dispatch = useDispatch();

  const authenticated = useSelector(selectAuthenticated);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(signoutIfExpired());
    }, 200);

    return () => clearInterval(interval);
  }, [dispatch]);

  return { authenticated };
};

export default PrivateRouteHooks;
