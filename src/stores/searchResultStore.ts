import { SearchResult } from "@/types/searchResult";
import { create } from "zustand";

interface SearchResultStore {
  results: SearchResult[];
  setSearchResult: (result: SearchResult[]) => void;
}

export const useSearchResultStore = create<SearchResultStore>()((set) => ({
  results: [],
  setSearchResult: (result) => set({ results: result }),
}));
