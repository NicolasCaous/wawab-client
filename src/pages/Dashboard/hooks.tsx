import { useState } from "react";

interface ExposedHooks {
  currentPhoneActive: boolean;
}

const DashboardHooks: () => ExposedHooks = () => {
  const [currentPhoneActive, setCurrentPhoneActive] = useState(false);

  return { currentPhoneActive };
};

export default DashboardHooks;
