import { routes } from "../../routes/routes";
import { ModelCard } from "../ModelCard/ModelCard";
import { ReactComponent as Ring } from "../../assets/ring.svg";
import { ReactComponent as Ogre } from "../../assets/ogre.svg";
import { ReactComponent as Quote } from "../../assets/quote.svg";

import styles from "./ModelsGrid.module.scss";

export const ModelsGrid: React.FC = () => {
  return (
    <div className={styles.Container}>
      <ModelCard
        path={routes.Movies.path}
        name={routes.Movies.name}
        icon={<Ring />}
      />
      <ModelCard
        path={routes.Characters.path}
        name={routes.Characters.name}
        icon={<Ogre />}
      />
      <ModelCard
        path={routes.Quotes.path}
        name={routes.Quotes.name}
        icon={<Quote />}
      />
    </div>
  );
};
