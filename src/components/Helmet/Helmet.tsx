import { Helmet as ReactHelmet } from "react-helmet";

import type { HelmetProps } from "./Helmet.type";

export const Helmet: React.FC<HelmetProps> = ({ title, children }) => {
  let pageTitle = "API Explorer - Lord of the Rings";
  if (title) {
    pageTitle = `${title} | ${pageTitle}`;
  }

  return (
    <ReactHelmet>
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
      {children}
    </ReactHelmet>
  );
};
