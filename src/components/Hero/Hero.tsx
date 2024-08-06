import { PropsWithChildren } from "react";
import styles from "./hero.module.scss";

interface HeroProps {
  title: string;
  subTitle: string;
  backgroundImage?: string; // Add this line
}

export default function Hero({
  children,
  title,
  subTitle,
  backgroundImage, // Add this line
}: PropsWithChildren<HeroProps>) {
  return (
    <section
      className={styles.Hero}
      style={{ backgroundImage: `url(${backgroundImage})` }} // Add this line
    >
      <div className={styles.HeroBlur} />

      <div className={styles.HeroContent}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>

      {children}
    </section>
  );
}
