import styles from "./search.module.scss";

interface SearchProps {
  onChange: (value: string) => void;
  value: string;
}

export default function Search({ onChange, value }: SearchProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.SearchInput}
      placeholder="Search for a movie or tv show"
    />
  );
}
