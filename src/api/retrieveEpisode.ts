import { Episode } from "@/types/episode";
import axios from "axios";

export default async function retrieveEpisode(id: string): Promise<Episode> {
  try {
    const result = await axios.get(`https://api.tvmaze.com/episodes/${id}`);

    return result.data;
  } catch {
    throw new Error("Error fetching episode detail.");
  }
}
