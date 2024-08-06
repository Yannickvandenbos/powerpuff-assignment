"use client";

import { useParams } from "next/navigation";

import styles from "./episodepage.module.scss";
import Hero from "@/components/Hero/Hero";
import useEpisode from "../hooks/useEpisode";
import formatDate from "@/utils/formatDate";

export default function EpisodePage() {
  const params = useParams<{ id: string }>();

  const { episode } = useEpisode(params.id);

  if (!episode) {
    return <div>Not found</div>;
  }

  return (
    <main className={styles.Page}>
      <Hero
        title={episode.name}
        subTitle=""
        backgroundImage={episode?.image?.original}
      />

      <section className={styles.Content}>
        <h4>{formatDate(episode.airdate)}</h4>

        <p dangerouslySetInnerHTML={{ __html: episode.summary }} />
      </section>
    </main>
  );
}
