import styles from "./Toggle.module.scss";
export interface ToggleProps {
  boolean: boolean;
  onToggle: (boolean: boolean) => void;
}

export const Toggle = ({ boolean, onToggle }: ToggleProps) => {
  return (
    <div
      className={boolean ? styles.root__active : styles.root}
      onClick={() => onToggle(!boolean)}
    >
      <input
        className={boolean ? styles.container__active : styles.container}
        type="checkbox"
        name="toggle"
        id="toggle"
        onChange={() => onToggle(!boolean)}
        checked={boolean}
      />
    </div>
  );
};
