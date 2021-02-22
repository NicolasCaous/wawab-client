import { useCallback, useEffect, useRef, useState } from "react";

import useMutationObserver from "@rooks/use-mutation-observer";

interface ExposedHooks {
  setRef: (node: any) => void;
  showIndicator: boolean;
}

const OverflowContainerHooks: (indicator: boolean) => ExposedHooks = (
  indicator: boolean
) => {
  const [showIndicator, setShowIndicator] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const onChange = useCallback(() => {
    if (indicator !== true) return;

    const callback = () => {
      if (ref.current) {
        setShowIndicator(
          ref.current.getBoundingClientRect().height + ref.current.scrollTop <
            ref.current.scrollHeight
        );
      }
    };
    callback();
    for (let i = 1; i <= 5; ++i) setTimeout(callback, 200 * i);
  }, [ref, indicator, setShowIndicator]);

  useMutationObserver(ref, onChange);

  useEffect(() => {
    if (ref.current && indicator === true)
      ref.current.addEventListener("scroll", onChange);

    return () => {
      if (ref.current && indicator === true)
        ref.current.removeEventListener("scroll", onChange);
    };
  }, [ref, indicator, onChange]);

  const setRef = useCallback((node: HTMLDivElement | null) => {
    ref.current = node;
  }, []);

  return { setRef, showIndicator };
};

export default OverflowContainerHooks;
