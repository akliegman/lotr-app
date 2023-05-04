import { useLocation } from "react-router-dom";

import { routes } from "../../routes/routes";
import { toTitleCase } from "../../utils/toTitleCase";
import { useAppSelector } from "../../hooks/useAppSelector";
import { charactersSelectors } from "../../store/slice/characters/charactersSlice";
import { Breadcrumbs } from "../../components/ui/Breadcrumbs/Breadcrumbs";
import { PageTitle } from "../../components/ui/PageTitle/PageTitle";
import { CharacterDetails } from "../../components/characters/CharacterDetails/CharacterDetails";
import { Helmet } from "../../components/Helmet/Helmet";

import styles from "./CharacterPage.module.scss";

export const CharacterPage: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split("/");

  const data = useAppSelector(
    charactersSelectors.selectCharactersById(paths[2])
  );

  return (
    <div className={styles.Container}>
      <Helmet title={data?.name!} />
      <Breadcrumbs
        routes={[
          { name: routes.Home.name, path: routes.Home.path },
          {
            name: toTitleCase(paths[1]),
            path: `/${paths[1]}`,
          },
          {
            name: data?.name!,
            path: location.pathname,
          },
        ]}
      />
      <PageTitle title={data?.name!} subtitle={location.pathname} />
      <CharacterDetails data={data!} />
    </div>
  );
};
