import React from "react";
import Link from "next/link";
import styles from "../../(styles)/NavBar.module.scss";
import ArrowNavMenu from "../icons/ArrowNavMenu";

const NavigationList = ({ className }) => {
  return (
    <ul className={`${styles.navList} ${className}`}>
      <li>
        <Link href={`/one`}>
          Головна
          <ArrowNavMenu className={styles.icon} />
          <div className={styles.navList_line}></div>
        </Link>
      </li>
      <li>
        <Link href={"/two"}>
          Послуги
          <ArrowNavMenu className={styles.icon} />
          <div className={styles.navList_line}></div>
        </Link>
      </li>
      <li>
        <Link href={"/three"}>
          Навчання
          <ArrowNavMenu className={styles.icon} />
          <div className={styles.navList_line}></div>
        </Link>
      </li>
      <li>
        <Link href={"/four"}>
          Зв'язатися
          <ArrowNavMenu className={styles.icon} />
          <div className={styles.navList_line}></div>
        </Link>
      </li>
    </ul>
  );
};

export default NavigationList;
