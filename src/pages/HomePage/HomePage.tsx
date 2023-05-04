import { Breadcrumbs } from "../../components/ui/Breadcrumbs/Breadcrumbs";
import { PageTitle } from "../../components/ui/PageTitle/PageTitle";
import { ModelsGrid } from "../../components/ModelsGrid/ModelsGrid";
import { routes } from "../../routes/routes";

import styles from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
  return (
    <div className={styles.Container}>
      <Breadcrumbs
        routes={[{ name: routes.Home.name, path: routes.Home.path }]}
      />
      <PageTitle title="Welcome to the API Explorer" withMargin />
      <ModelsGrid />
    </div>
  );
};
