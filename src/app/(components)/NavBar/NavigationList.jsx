import React from "react";
import Link from "next/link";
import styles from "../../(styles)/NavBar.module.scss";
import ArrowNavMenu from "../icons/ArrowNavMenu";

const NavigationList = ({ className, currentPage = "" }) => {
  const isActive = (page) => currentPage.includes(page);
  const isHome = (page) => {
    return currentPage === JSON.stringify(page);
  };

  return (
    <ul className={`${styles.navList} ${className}`}>
      <li>
        <Link href={`/`} style={{ color: isHome("/") ? "#a3957b" : "inherit" }}>
          Головна
          <ArrowNavMenu
            className={styles.icon}
            style={{ stroke: isHome("/") ? "#a3957b" : "black" }}
          />
          <div
            style={{ backgroundColor: isHome("/") ? "#a3957b" : "black" }}
            className={styles.navList_line}
          ></div>
        </Link>
      </li>
      <li>
        <Link
          href={"/services/medical"}
          style={{ color: isActive("services") ? "#a3957b" : "inherit" }}
        >
          Послуги
          <ArrowNavMenu
            style={{ stroke: isActive("services") ? "#a3957b" : "black" }}
            className={styles.icon}
          />
          <div
            style={{
              backgroundColor: isActive("services") ? "#a3957b" : "black",
            }}
            className={styles.navList_line}
          ></div>
        </Link>
      </li>
      <li>
        <Link
          href={"/study"}
          style={{ color: isActive("study") ? "#a3957b" : "inherit" }}
        >
          Навчання
          <ArrowNavMenu
            style={{ stroke: isActive("study") ? "#a3957b" : "black" }}
            className={styles.icon}
          />
          <div
            style={{
              backgroundColor: isActive("study") ? "#a3957b" : "back",
            }}
            className={styles.navList_line}
          ></div>
        </Link>
      </li>
      <li>
        <Link href={"/study#section-workers"}>
          Викладачі
          <ArrowNavMenu className={styles.icon} />
          <div className={styles.navList_line}></div>
        </Link>
      </li>
      <li>
        <Link href={"/#section-contact"}>
          Зв'язатися
          <ArrowNavMenu className={styles.icon} />
          <div className={styles.navList_line}></div>
        </Link>
      </li>
    </ul>
  );
};

export default NavigationList;
