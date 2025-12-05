"use client";
import { useState, useEffect } from "react";
import styles from "../../(styles)/Services/PriceListMoreInfo.module.scss";
import stylesContainer from "../../(styles)/Container.module.scss";
import { useRouter } from "next/navigation";
import { ButtonWithArrow } from "../UI/ButtonWithArrow";

export default function One({ list, id, type }) {
  const [info, infoSet] = useState(null);
  const router = useRouter();

  useEffect(() => {
    list.map((obj) => {
      if (obj.id === type) {
        obj.groupServices.map((x) => {
          if (x.id == id) {
            infoSet(x);
          }
        });
      }
    });
  }, [id, list, infoSet]);
  return (
    <section className={styles.moreInfoSection}>
      <div className={stylesContainer.container}>
        <ButtonWithArrow
          classNameBtn={`${styles.btn} ${styles.button}`}
          type="button"
          onClick={() => {
            router.back();
          }}
        >
          Назад
        </ButtonWithArrow>
        {info && (
          <>
            <h2 className={styles.title}>{info.title}</h2>
            <p className={styles.text}>{info.description}</p>
            <div className={styles.wrapper}>
              <div className={styles.textWrapper}>
                <h3 className={styles.subTitle}>{info.title}</h3>
                <p className={styles.price}>{info.price}</p>
              </div>
              <div className={styles.line} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
