import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { Card } from '../src/components/card';
import Filters from '../src/components/filters';
import { useListPagination } from '../src/pagination';
import { ICard } from '../src/types';
import classes from "./index.module.css";
import _ from "lodash";
import { useFilter } from '../src/filter';
import config from "../next.config";

const Home: NextPage = () => {
  const router = useRouter();
  const [cards, setCards] = useState<ICard[]>([]);
  useEffect(() => {
    fetch(`${config.basePath}/data.json`).then(res => res.json()).then(rows => setCards(rows));
  }, []);

  const handlePage = (e: any) => {
    router.push(`?${new URLSearchParams({...router.query, page: e.target.value})}`);
  }
  const matchedCards = useFilter(cards, router.query);
  const [allCards, total] = useListPagination(matchedCards, parseInt(router.query.page as any || 1));
  return (
    <div className={classes.container}>
      <div className="no-print">
        { cards.length > 0 && <Filters card={cards[0]} /> }
        <div className={classes.totalResults}>
          Total results: <strong>{cards.length}</strong>
        </div>
        <div className={classes.totalResults}>
          Total matched: <strong>{matchedCards.length}</strong>
        </div>
        </div>
        <div className={classes.cards}>
          {allCards.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </div>
        <div className="no-print">{_.range(1, Math.min(total, 20) + 1).map((n) => (<button onClick={handlePage} value={n} key={n} type="button">{n}</button>))}</div>
    </div>
  )
}

export default Home
