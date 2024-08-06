// RatingIndicator.tsx
import React from "react";
import styles from "./ratingindicator.module.scss";

interface RatingIndicatorProps {
  rating: number;
}

export default function RatingIndicator({ rating }: RatingIndicatorProps) {
  const ratingColor = Math.max(0, Math.min(10, rating));
  return (
    <div
      className={styles.ratingIndicator}
      style={
        {
          "--rating-color": getRatingColor(ratingColor),
        } as React.CSSProperties
      }
    >
      <div className={styles.score}>{ratingColor}</div>
    </div>
  );
}

function getRatingColor(rating: number): string {
  if (rating >= 8) return "#00c853";
  if (rating >= 6) return "#ffeb3b";
  if (rating >= 4) return "#ff9800";
  return "#f44336";
}
