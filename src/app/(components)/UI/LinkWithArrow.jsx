import React from "react";
import styles from "../../(styles)/UI/link.module.scss";
import ArrowNavMenu from "../icons/ArrowNavMenu";

export const LinkWithArrow = ({
  text,
  classNameLink,
  classNameArrow,
  children,
  link,
}) => {
  return (
    <a href={link} target="true" className={`${styles.link} ${classNameLink}`}>
      {text}
      {children}
      <ArrowNavMenu className={`${styles.arrow} ${classNameArrow}`} />
    </a>
  );
};
