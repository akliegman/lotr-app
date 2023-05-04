import { useLocation } from "react-router-dom";

import { routes } from "../../routes/routes";
import { toTitleCase } from "../../utils/toTitleCase";
import { useAppSelector } from "../../hooks/useAppSelector";
import { moviesSelectors } from "../../store/slice/movies/moviesSlice";
import { Breadcrumbs } from "../../components/ui/Breadcrumbs/Breadcrumbs";
import { PageTitle } from "../../components/ui/PageTitle/PageTitle";
import { MovieDetails } from "../../components/movies/MovieDetails/MovieDetails";
import { Helmet } from "../../components/Helmet/Helmet";

import styles from "./MoviePage.module.scss";

export const MoviePage: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split("/");

  const data = useAppSelector(moviesSelectors.selectMoviesById(paths[2]));

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
      <MovieDetails data={data!} />
    </div>
  );
};
