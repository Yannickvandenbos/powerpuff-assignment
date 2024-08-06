import { SearchResult } from "@/types/searchResult";
import axios from "axios";

export default async function searchApi(
  searchQuery: string
): Promise<SearchResult[]> {
  try {
    const result = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchQuery}`
    );

    return result.data;
  } catch {
    throw new Error("Error fetching search results.");
  }
}
