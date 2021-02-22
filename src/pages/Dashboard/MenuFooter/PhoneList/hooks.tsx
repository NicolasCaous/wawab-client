import { useState } from "react";

interface ExposedHooks {
  loading: boolean;
}

const PhoneListHooks: () => ExposedHooks = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 1000);

  return { loading };
};

export default PhoneListHooks;
