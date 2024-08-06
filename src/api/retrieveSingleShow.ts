import { Show } from "@/types/show";
import axios from "axios";

export default async function retrieveSingleShow(id: string): Promise<Show> {
  try {
    const result = await axios.get(`https://api.tvmaze.com/shows/${id}`);

    return result.data;
  } catch {
    throw new Error("Error fetching single show.");
  }
}
