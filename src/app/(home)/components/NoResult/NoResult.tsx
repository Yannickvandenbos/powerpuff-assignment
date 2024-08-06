import styles from "./noresult.module.scss";

interface NoResultProps {
  results: number;
  loading: boolean;
}

export default function NoResult({ results, loading }: NoResultProps) {
  if (results > 0 || loading) return null;

  return (
    <div className={styles.Container}>
      <h3>No results found for your search. Try again.</h3>

      <img src="./sad.png" className={styles.Img} />
    </div>
  );
}
