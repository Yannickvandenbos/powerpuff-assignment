import searchApi from "@/api/searchApi";
import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";
import { useSearchResultStore } from "@/stores/searchResultStore";

const INITIAL_SEARCH_QUERY = "The Powerpuff Girls";

export default function useSearchDatabase() {
  const [searchQuery, setSearchQuery] = useState(INITIAL_SEARCH_QUERY);
  const [searchValue] = useDebounce(searchQuery, 2000);

  const [loading, setLoading] = useState(true);

  const { results, setSearchResult } = useSearchResultStore();

  const updateSearchQuery = (value: string) => {
    setLoading(true);

    setSearchQuery(value);
  };

  // Function to retrieve database entries
  const fetchResults = async () => {
    try {
      const apiResults = await searchApi(searchQuery);

      setSearchResult(apiResults);
    } catch {
      // Set error
    } finally {
      setLoading(false);
    }
  };

  // Run once to fetch initial results and fetch after each change of searchValue
  useEffect(() => {
    fetchResults();
  }, [searchValue]);

  return {
    searchQuery,
    updateSearchQuery,

    results,

    loading,
    setLoading,
  };
}
