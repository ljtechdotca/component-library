import styles from "./RatingEmoji.module.scss";

export interface RatingEmojiProps {
  onRating: (rating: number) => void;
  rating: number;
}

export const RatingEmoji = ({ onRating, rating }: RatingEmojiProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.list}>
          <li className={rating == 1 ? styles.item__active : styles.item}>
            <button className={styles.button} onClick={() => onRating(1)}>
              😠
            </button>
          </li>
          <li className={rating == 2 ? styles.item__active : styles.item}>
            <button className={styles.button} onClick={() => onRating(2)}>
              😞
            </button>
          </li>
          <li className={rating == 3 ? styles.item__active : styles.item}>
            <button className={styles.button} onClick={() => onRating(3)}>
              🤔
            </button>
          </li>
          <li className={rating == 4 ? styles.item__active : styles.item}>
            <button className={styles.button} onClick={() => onRating(4)}>
              🙂
            </button>
          </li>
          <li className={rating == 5 ? styles.item__active : styles.item}>
            <button className={styles.button} onClick={() => onRating(5)}>
              😁
            </button>
          </li>
        </div>
      </div>
    </div>
  );
};
