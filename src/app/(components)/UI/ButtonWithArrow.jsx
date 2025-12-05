import React from "react";
import styles from "../../(styles)/UI/button.module.scss";
import ArrowNavMenu from "../icons/ArrowNavMenu";

export const ButtonWithArrow = ({
  type,
  text,
  classNameBtn,
  classNameArrow,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${classNameBtn}`}
    >
      {text}
      {children}
      <ArrowNavMenu className={`${styles.arrow} ${classNameArrow}`} />
    </button>
  );
};
