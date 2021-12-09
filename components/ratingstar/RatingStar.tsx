import styles from "./RatingStar.module.scss";
export interface RatingStarProps {
  onRating: (rating: number) => void;
  rating: number;
}

export const RatingStar = ({ onRating, rating }: RatingStarProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={rating >= 1 ? styles.item__active : styles.item}>
            <button className={styles.button} onClick={() => onRating(1)}>
              ⭐
            </button>
          </li>
          <li className={rating >= 2 ? styles.item__active : styles.item}>
            <button className={styles.button} onClick={() => onRating(2)}>
              ⭐
            </button>
          </li>
          <li className={rating >= 3 ? styles.item__active : styles.item}>
            <button className={styles.button} onClick={() => onRating(3)}>
              ⭐
            </button>
          </li>
          <li className={rating >= 4 ? styles.item__active : styles.item}>
            <button className={styles.button} onClick={() => onRating(4)}>
              ⭐
            </button>
          </li>
          <li className={rating == 5 ? styles.item__active : styles.item}>
            <button className={styles.button} onClick={() => onRating(5)}>
              ⭐
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
