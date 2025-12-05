import React from "react";
import styles from "../../(styles)/UI/link.module.scss";
import ArrowNavMenu from "../icons/ArrowNavMenu";
import Link from "next/link";

export const NavLinkWithArrow = ({
  text,
  classNameLink,
  classNameArrow,
  children,
  toLink,
  target,
}) => {
  return (
    <Link
      href={toLink}
      target={target}
      className={`${styles.navLink} ${classNameLink}`}
    >
      {text}
      {children}
      <ArrowNavMenu className={`${styles.arrow} ${classNameArrow}`} />
    </Link>
  );
};
