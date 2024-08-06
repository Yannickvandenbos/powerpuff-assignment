import { Episode } from "@/types/episode";
import styles from "./episodeitem.module.scss";
import formatDate from "@/utils/formatDate";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_SEEN_KEY = "seen_episodes";

interface EpisodeItemProps {
  episode: Episode;
}

export default function EpisodeItem({ episode }: EpisodeItemProps) {
  const [seenBefore, setSeenBefore] = useState(false);

  const router = useRouter();

  const handleItemPress = () => {
    const seenEpisodes = localStorage.getItem(STORAGE_SEEN_KEY);

    let seenEpisodesArray = seenEpisodes ? JSON.parse(seenEpisodes) : [];

    if (!seenEpisodesArray.includes(episode.id)) {
      seenEpisodesArray.push(episode.id);
    }

    localStorage.setItem(STORAGE_SEEN_KEY, JSON.stringify(seenEpisodesArray));

    router.push(`/episode/${episode.id}`);
  };

  const hasUserClickedEpisodeBefore = () => {
    const seenEpisodes = localStorage.getItem(STORAGE_SEEN_KEY);

    let seenEpisodesArray = seenEpisodes ? JSON.parse(seenEpisodes) : [];

    const includesCurrentEpisodeId = seenEpisodesArray.includes(episode.id);

    setSeenBefore(includesCurrentEpisodeId);
  };

  useEffect(() => {
    hasUserClickedEpisodeBefore();
  }, []);

  return (
    <div onClick={handleItemPress} className={styles.EpisodeItem}>
      <div className={styles.Card}>
        <div className={styles.Details}>
          <h3 className={styles.Title}>{episode.name}</h3>
          <p className={styles.Info}>
            Season {episode.season}, Episode {episode.number}
          </p>
          <p className={styles.Info}>
            Airdate: {formatDate(episode.airdate)} at {episode.airtime}
          </p>
        </div>

        {seenBefore && <div className={styles.SeenChip}>SEEN BEFORE</div>}
      </div>
    </div>
  );
}
