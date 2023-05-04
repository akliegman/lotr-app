import { useState } from "react";

import { AttributePair } from "../../ui/AttributePair/AttributePair";
import { EntitiesGrid } from "../../EntitiesGrid/EntitiesGrid";
import { ModelEnum } from "../../../types/model.enum";
import { quotesSelectors } from "../../../store/slice/quotes/quotesSlice";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { PageHeading } from "../../ui/PageHeading/PageHeading";
import { AttributesGrid } from "../../ui/AttributesGrid/AttributesGrid";
import { ReactComponent as TomatoIcon } from "../../../assets/rottentomato.svg";
import { CodeBlock } from "../../ui/CodeBlock/CodeBlock";
import { Button } from "../../ui/Button/Button";
import { EntityDetailGrid } from "../../EntityDetailGrid/EntityDetailGrid";

import type { MovieDetailsProps } from "./MovieDetails.type";

import styles from "./MovieDetails.module.scss";

export const MovieDetails: React.FC<MovieDetailsProps> = ({ data }) => {
  const quotes = useAppSelector(
    quotesSelectors.selectQuotesByMovieId(data?._id!)
  );
  const [truncatedQuotes, setTruncatedQuotes] = useState(quotes.slice(0, 20));

  return (
    <div className={styles.Container}>
      <EntityDetailGrid>
        <div>
          <PageHeading title="Details" />
          <AttributesGrid>
            <AttributePair label="Name" value={data?.name} />

            <AttributePair
              label="Runtime"
              value={`${data?.runtimeInMinutes} min`}
            />
            <AttributePair
              label="Budget"
              value={`$${(data?.budgetInMillions * 1000000).toLocaleString(
                "en-US"
              )}`}
            />
            <AttributePair
              label="Box Office"
              value={`$${(
                data?.boxOfficeRevenueInMillions * 1000000
              ).toLocaleString("en-US")}`}
            />
            <AttributePair
              label="Academy Award Nominations"
              value={data?.academyAwardNominations}
            />
            <AttributePair
              label="Academy Award Wins"
              value={data?.academyAwardWins}
            />
            <AttributePair
              label="Rotten Tomatoes Score"
              value={
                <div className={styles.Tomatoes}>
                  <TomatoIcon />
                  {data?.rottenTomatoesScore}%
                </div>
              }
            />
            <AttributePair label="ID" value={<code>{data?._id}</code>} />
          </AttributesGrid>
        </div>
        <div>
          <PageHeading title="Payload" />
          <CodeBlock code={JSON.stringify(data, null, 2)} />
        </div>
      </EntityDetailGrid>

      {quotes.length > 0 && (
        <div className={styles.Quotes}>
          <PageHeading title="Quotes from this movie" />
          <EntitiesGrid model={ModelEnum.Quotes} data={truncatedQuotes} />
          {quotes.length > 20 && quotes.length > truncatedQuotes.length && (
            <Button
              className={styles.ShowAll}
              onClick={() => setTruncatedQuotes(quotes)}
            >
              Show All
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
