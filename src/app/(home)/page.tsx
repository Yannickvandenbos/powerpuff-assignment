"use client";

import Search from "@/components/Search/Search";
import useSearchDatabase from "./hooks/useSearchDatabase";
import styles from "./homepage.module.scss";
import NoResult from "./components/NoResult/NoResult";
import Loading from "./components/Loading/Loading";
import ResultCard from "./components/ResultCard/ResultCard";
import Hero from "../../components/Hero/Hero";

export default function Home() {
  const { searchQuery, updateSearchQuery, results, loading } =
    useSearchDatabase();

  return (
    <main className={styles.Page}>
      <Hero title="Welcome" subTitle="The serie/movie database">
        <Search
          onChange={(searchValue) => updateSearchQuery(searchValue)}
          value={searchQuery}
        />
      </Hero>

      <section className={styles.ResultsContainer}>
        <NoResult results={results.length} loading={loading} />
        <Loading loading={loading} />

        <div className={styles.Results}>
          {results?.map((item, index) => {
            return <ResultCard item={item} key={index} />;
          })}
        </div>
      </section>
    </main>
  );
}
