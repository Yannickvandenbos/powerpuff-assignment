import { SearchResult } from "@/types/searchResult";

import styles from "./resultcard.module.scss";
import formatDate from "@/utils/formatDate";
import RatingIndicator from "./RatingIndicator";
import Link from "next/link";

interface ResultCardProps {
  item: SearchResult;
}

export default function ResultCard({ item }: ResultCardProps) {
  if (!item.show.image) return null;

  return (
    <Link className={styles.ResultCard} href={`/show/${item.show.id}`}>
      <section className={styles.Cover}>
        <img src={item?.show?.image?.medium} />

        <RatingIndicator rating={item.show.rating.average} />
      </section>

      <section className={styles.Details}>
        <h4>{item.show.name}</h4>
        <h5>{formatDate(item.show.premiered)}</h5>
      </section>
    </Link>
  );
}
