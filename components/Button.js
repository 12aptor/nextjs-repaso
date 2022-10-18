import styles from "./Button.module.css";
import { clsx } from "../helper/clsx";

export const Button = ({ label }) => {

  return (
    <button className={clsx(styles.button, styles.hover)}>
      {label}
    </button>
  );
};
