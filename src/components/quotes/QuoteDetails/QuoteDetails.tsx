import { generatePath, Link } from "react-router-dom";

import { AttributePair } from "../../ui/AttributePair/AttributePair";
import { PageHeading } from "../../ui/PageHeading/PageHeading";
import { AttributesGrid } from "../../ui/AttributesGrid/AttributesGrid";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { charactersSelectors } from "../../../store/slice/characters/charactersSlice";
import { moviesSelectors } from "../../../store/slice/movies/moviesSlice";
import { routes } from "../../../routes/routes";
import { CodeBlock } from "../../ui/CodeBlock/CodeBlock";
import { EntityDetailGrid } from "../../EntityDetailGrid/EntityDetailGrid";

import type { QuoteDetailsProps } from "./QuoteDetails.type";

import styles from "./QuoteDetails.module.scss";

export const QuoteDetails: React.FC<QuoteDetailsProps> = ({ data }) => {
  const characterName = useAppSelector(
    charactersSelectors.selectNameById(data.character!)
  );
  const movieName = useAppSelector(
    moviesSelectors.selectMovieNameById(data.movie!)
  );

  return (
    <div className={styles.Container}>
      <EntityDetailGrid>
        <div>
          <PageHeading title="Details" />
          <AttributesGrid>
            <AttributePair
              label="Full Quote"
              value={data.dialog}
              isFullWidth={true}
            />
            <AttributePair
              label="Movie"
              value={
                data.movie &&
                movieName && (
                  <Link
                    to={generatePath(routes.Movie.path, { id: data.movie })}
                  >
                    {movieName}
                  </Link>
                )
              }
            />
            <AttributePair
              label="Character"
              value={
                data.character &&
                characterName && (
                  <Link
                    to={generatePath(routes.Character.path, {
                      id: data.character,
                    })}
                  >
                    {characterName}
                  </Link>
                )
              }
            />
            <AttributePair label="ID" value={<code>{data._id}</code>} />
          </AttributesGrid>
        </div>
        <div>
          <PageHeading title="Payload" />
          <CodeBlock code={JSON.stringify(data, null, 2)} />
        </div>
      </EntityDetailGrid>
    </div>
  );
};
