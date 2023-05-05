import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export const useScrollTop = (ref: React.RefObject<HTMLDivElement>) => {
  const { pathname } = useLocation();
  const [params] = useSearchParams();
  const page = params.get("page");

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollTo(0, 0);
    }
  }, [pathname, page, ref]);

  return null;
};
