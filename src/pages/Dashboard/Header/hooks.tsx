import { useState } from "react";

interface ExposedHooks {
  currentPhoneActive: boolean;
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderHooks: () => ExposedHooks = () => {
  const [currentPhoneActive, setCurrentPhoneActive] = useState(true);
  const [expanded, setExpanded] = useState(false);

  return { currentPhoneActive, expanded, setExpanded };
};

export default HeaderHooks;
