import { useLocation } from "react-router-dom";

import { Breadcrumbs } from "../../components/ui/Breadcrumbs/Breadcrumbs";
import { routes } from "../../routes/routes";
import { toTitleCase } from "../../utils/toTitleCase";
import { PageTitle } from "../../components/ui/PageTitle/PageTitle";
import { useAppSelector } from "../../hooks/useAppSelector";
import { charactersSelectors } from "../../store/slice/characters/charactersSlice";
import { EntitiesGrid } from "../../components/EntitiesGrid/EntitiesGrid";
import { Pagination } from "../../components/ui/Pagination/Pagination";
import { Helmet } from "../../components/Helmet/Helmet";

import styles from "./CharactersPage.module.scss";

import { ModelEnum } from "../../types/model.enum";

export const CharactersPage: React.FC = () => {
  const location = useLocation();
  const model = ModelEnum.Characters;

  const { data, pagination } = useAppSelector(charactersSelectors.selectAll);

  const paginatedData = data.slice(
    (pagination.page - 1) * pagination.limit,
    pagination.page * pagination.limit
  );

  return (
    <div className={styles.Container}>
      <Helmet title={toTitleCase(model)} />
      <Breadcrumbs
        routes={[
          { name: routes.Home.name, path: routes.Home.path },
          {
            name: model,
            path: location.pathname,
          },
        ]}
      />
      <PageTitle
        title={toTitleCase(model)}
        subtitle={location.pathname}
        withMargin
      />
      <EntitiesGrid model={model as ModelEnum} data={paginatedData} />
      {pagination.total > pagination.limit && (
        <Pagination model={model as ModelEnum} pagination={pagination} />
      )}
    </div>
  );
};
