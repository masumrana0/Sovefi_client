import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
      const onChange = (event: MediaQueryListEvent) => {
        setIsMobile(event.matches);
      };

      setIsMobile(mql.matches); // Set initial value based on the current window size
      mql.addEventListener("change", onChange);

      return () => mql.removeEventListener("change", onChange);
    }
  }, []);

  return isMobile;
}
