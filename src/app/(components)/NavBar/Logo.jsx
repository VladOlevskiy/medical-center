import React from "react";
import Link from "next/link";
import styles from "../../(styles)/NavBar.module.scss";

const Logo = () => {
  const linkHome = "/";
  return (
    <Link href={linkHome} className={styles.logo}>
      <img src="/media/logo/logo.png" alt="logo" className={styles.logo} />
    </Link>
  );
};

export default Logo;
