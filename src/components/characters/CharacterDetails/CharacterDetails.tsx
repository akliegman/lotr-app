import { useState } from "react";
import { generatePath, Link } from "react-router-dom";

import { AttributePair } from "../../ui/AttributePair/AttributePair";
import { PageHeading } from "../../ui/PageHeading/PageHeading";
import { AttributesGrid } from "../../ui/AttributesGrid/AttributesGrid";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { charactersSelectors } from "../../../store/slice/characters/charactersSlice";
import { quotesSelectors } from "../../../store/slice/quotes/quotesSlice";
import { routes } from "../../../routes/routes";
import { EntitiesGrid } from "../../EntitiesGrid/EntitiesGrid";
import { CodeBlock } from "../../ui/CodeBlock/CodeBlock";
import { Button } from "../../ui/Button/Button";
import { EntityDetailGrid } from "../../EntityDetailGrid/EntityDetailGrid";

import styles from "./CharacterDetails.module.scss";

import { ModelEnum } from "../../../types/model.enum";
import type { CharacterDetailsProps } from "./CharacterDetails.type";

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({ data }) => {
  const spouseId = useAppSelector(
    charactersSelectors.selectIdByName(data?.spouse!)
  );
  const quotes = useAppSelector(
    quotesSelectors.selectQuotesByCharacterId(data?._id!)
  );
  const [truncatedQuotes, setTruncatedQuotes] = useState(quotes.slice(0, 20));

  return (
    <div className={styles.Container}>
      <EntityDetailGrid>
        <div>
          <PageHeading title="Details" />
          <AttributesGrid>
            <AttributePair label="Name" value={data?.name} />
            <AttributePair label="Birth" value={data?.birth} />
            <AttributePair label="Death" value={data?.death} />
            <AttributePair label="Hair" value={data?.hair} />
            <AttributePair label="Height" value={data?.height} />
            <AttributePair label="Gender" value={data?.gender} />
            <AttributePair label="Realm" value={data?.realm} />
            <AttributePair
              label="Spouse"
              value={
                spouseId ? (
                  <Link
                    to={generatePath(routes.Character.path, { id: spouseId })}
                  >
                    {data?.spouse}
                  </Link>
                ) : (
                  data?.spouse
                )
              }
            />
            <AttributePair label="Race" value={data?.race} />
            <AttributePair
              label="WikiUrl"
              value={
                data?.wikiUrl && (
                  <a target="_blank" rel="noreferrer" href={data?.wikiUrl}>
                    {data?.wikiUrl}
                  </a>
                )
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
          <PageHeading title="Quotes by this character" />
          <EntitiesGrid
            model={ModelEnum.Quotes}
            data={truncatedQuotes}
            hideAuthor={true}
          />
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
