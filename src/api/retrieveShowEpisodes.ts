import { Episode } from "@/types/episode";
import axios from "axios";

export default async function retrieveShowEpisodes(
  id: string
): Promise<Episode[]> {
  try {
    const result = await axios.get(
      ` https://api.tvmaze.com/shows/${id}/episodes`
    );

    return result.data;
  } catch {
    throw new Error("Error fetching episodes.");
  }
}
