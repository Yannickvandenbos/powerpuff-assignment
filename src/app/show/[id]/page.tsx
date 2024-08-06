"use client";

import Hero from "@/components/Hero/Hero";
import { useParams } from "next/navigation";

import styles from "./showpage.module.scss";
import useCurrentShow from "../hooks/useCurrentShow";
import GenresChips from "../components/GenresChips/GenresChips";
import formatDate from "@/utils/formatDate";
import EpisodeItem from "../components/EpisodeItem/EpisodeItem";

export default function ShowPage() {
  const params = useParams<{ id: string }>();

  const { show, episodes } = useCurrentShow(params.id);

  if (!show || !episodes) {
    return <div>Not found</div>;
  }

  return (
    <main className={styles.Page}>
      <Hero
        title={show.name}
        subTitle=""
        backgroundImage={show.image.original}
      />

      <section className={styles.Content}>
        <GenresChips genres={show.genres} />

        <h4>{formatDate(show.premiered)}</h4>

        <p dangerouslySetInnerHTML={{ __html: show.summary }} />

        <div className={styles.Episodes}>
          <h4>Episodes</h4>

          {episodes.map((episode, index) => {
            return <EpisodeItem key={index} episode={episode} />;
          })}
        </div>
      </section>
    </main>
  );
}
