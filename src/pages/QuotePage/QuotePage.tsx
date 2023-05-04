import { useLocation } from "react-router-dom";

import { routes } from "../../routes/routes";
import { toTitleCase } from "../../utils/toTitleCase";
import { shortenString } from "../../utils/shortenString";
import { useAppSelector } from "../../hooks/useAppSelector";
import { quotesSelectors } from "../../store/slice/quotes/quotesSlice";
import { Breadcrumbs } from "../../components/ui/Breadcrumbs/Breadcrumbs";
import { PageTitle } from "../../components/ui/PageTitle/PageTitle";
import { QuoteDetails } from "../../components/quotes/QuoteDetails/QuoteDetails";
import { Helmet } from "../../components/Helmet/Helmet";

import styles from "./QuotePage.module.scss";

export const QuotePage: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split("/");

  const data = useAppSelector(quotesSelectors.selectQuotesById(paths[2]));

  return (
    <div className={styles.Container}>
      <Helmet title={`"${shortenString(data?.dialog!, 15)}"`} />
      <Breadcrumbs
        routes={[
          { name: routes.Home.name, path: routes.Home.path },
          {
            name: toTitleCase(paths[1]),
            path: `/${paths[1]}`,
          },
          {
            name: shortenString(data?.dialog!, 40),
            path: location.pathname,
          },
        ]}
      />
      <PageTitle
        title={shortenString(data?.dialog!, 40)}
        subtitle={location.pathname}
      />
      <QuoteDetails data={data!} />
    </div>
  );
};
