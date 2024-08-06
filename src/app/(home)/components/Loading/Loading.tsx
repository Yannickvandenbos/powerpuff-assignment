import styles from "./loading.module.scss";

interface LoadingProps {
  loading: boolean;
}

export default function Loading({ loading }: LoadingProps) {
  if (!loading) return null;

  return (
    <div className={styles.Container}>
      <h3>Retrieving results from database, hold on.</h3>

      <img src="./loading.gif" className={styles.Img} />
    </div>
  );
}
