import styles from "./genreschips.module.scss";

interface GenresChipsProps {
  genres: string[];
}

export default function GenresChips({ genres }: GenresChipsProps) {
  function Chip({ genre }: { genre: string }) {
    return <div className={styles.Chip}>{genre}</div>;
  }

  return (
    <div className={styles.Genres}>
      {genres.map((genre, index) => {
        return <Chip key={index} genre={genre} />;
      })}
    </div>
  );
}
