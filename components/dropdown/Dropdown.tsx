import ChevronDownIcon from "@public/icons/chevron-down.svg";
import ChevronUpIcon from "@public/icons/chevron-up.svg";
import { useEffect, useState } from "react";
import styles from "./Dropdown.module.scss";

export interface DropdownProps {
  list: string[];
}

export const Dropdown = ({ list }: DropdownProps) => {
  const [active, setActive] = useState(false);

  const onDropdown = () => {
    setActive(!active);
  };

  const closeDropdown = () => {
    setActive(false);
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className={styles.root}>
      <div
        className={styles.container}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className={active ? styles.button__active : styles.button}
          onClick={onDropdown}
        >
          Activate Dropdown
          {active ? (
            <div className={styles.icon}>
              <ChevronUpIcon height={24} width={24} />
            </div>
          ) : (
            <div className={styles.icon}>
              <ChevronDownIcon height={24} width={24} />
            </div>
          )}
        </button>
        {active && (
          <ul className={styles.list}>
            {list.map((item, i) => (
              <li key={i} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
