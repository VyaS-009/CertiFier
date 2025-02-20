import React from "react";
import styles from "./Button.module.css";

const Button = ({ btnName, handleClick }) => {
  return (
    <div className={styles.box}>
      <button className={styles.button} onClick={handleClick}>
        {btnName}
      </button>
    </div>
  );
};

export default Button;
