import React from "react";
import styles from "../../(styles)/DesignComponents/WhiteLines.module.scss";

const WhiteLineTop = () => {
  return (
    <>
      <div className={styles.whiteLineFirst} />
      <div className={styles.whiteLineSecond} />
      <div className={styles.whiteLineThird} />
    </>
  );
};
const WhiteLineBottom = () => {
  return (
    <>
      <div
        className={`${styles.whiteLineFirst} ${styles.whiteLineFirst_bottom}`}
      />
      <div
        className={`${styles.whiteLineSecond} ${styles.whiteLineSecond_bottom}`}
      />
      <div
        className={`${styles.whiteLineThird} ${styles.whiteLineThird_bottom}`}
      />
    </>
  );
};

export { WhiteLineTop, WhiteLineBottom };
