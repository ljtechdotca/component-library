import styles from "./ProgressBar.module.scss";

export interface ProgressBarProps {
  progress: number;
  steps: string[];
}

export const ProgressBar = ({ progress, steps }: ProgressBarProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {steps.map((item, i) => {
            if (i < steps.length - 1) {
              return (
                <li
                  className={
                    i <= progress - 1 ? styles.item__active : styles.item
                  }
                  key={`${item}-${i}`}
                >
                  {item}
                  <div
                    className={
                      i <= progress - 2 ? styles.line__active : styles.line
                    }
                  />
                </li>
              );
            } else {
              return (
                <li
                  className={
                    i <= progress - 1
                      ? styles.item_shrink__active
                      : styles.item_shrink
                  }
                  key={`${item}-${i}`}
                >
                  <div className={styles.content}>{item}</div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
