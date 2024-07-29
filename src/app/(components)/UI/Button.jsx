import React from "react";
import styles from "../../(styles)/UI/button.module.scss";

export const Button = ({ type, text, className, children }) => {
  return (
    <button type={type} className={`${styles.button} ${className}`}>
      {text}
      {children}
    </button>
  );
};
