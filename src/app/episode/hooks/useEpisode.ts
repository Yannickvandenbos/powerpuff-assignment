import retrieveEpisode from "@/api/retrieveEpisode";
import { Episode } from "@/types/episode";
import { useEffect, useState } from "react";

export default function useEpisode(episodeId: string) {
  const [episode, setEpisode] = useState<Episode>();

  const fetchResult = async () => {
    try {
      const episodeDetails = await retrieveEpisode(episodeId);

      setEpisode(episodeDetails);
    } catch {
      // throw error to client
    }
  };

  useEffect(() => {
    fetchResult();
  }, []);

  return {
    episode,
  };
}
