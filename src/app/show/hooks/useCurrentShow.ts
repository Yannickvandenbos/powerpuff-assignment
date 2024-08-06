import retrieveShowEpisodes from "@/api/retrieveShowEpisodes";
import retrieveSingleShow from "@/api/retrieveSingleShow";
import { Episode } from "@/types/episode";
import { Show } from "@/types/show";
import { useEffect, useState } from "react";

export default function useCurrentShow(showId: string) {
  const [show, setShow] = useState<Show>();
  const [episodes, setEpisodes] = useState<Episode[]>();

  const fetchResult = async () => {
    try {
      const showDetails = await retrieveSingleShow(showId);
      const showEpisodes = await retrieveShowEpisodes(showId);

      setShow(showDetails);
      setEpisodes(showEpisodes);
    } catch {
      // throw some error
    }
  };

  useEffect(() => {
    fetchResult();
  }, []);

  return {
    show,
    episodes,
  };
}
