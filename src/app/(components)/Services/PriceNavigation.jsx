"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowNavMenu from "../icons/ArrowNavMenu";
import styles from "../../(styles)/Services/PriceListNavigation.module.scss";
import styleContainer from "../../(styles)/Container.module.scss";

export default function PriceNavigation() {
  const path = usePathname();
  const lastPart = path.split("/").pop();
  const navData = [
    { id: "cosmetological", name: "Косметологічні послуги" },
    { id: "hardware-cosmetology", name: "Апаратна косметологія" },
    { id: "massages", name: "Масажі та корекція фігури" },
    { id: "medical", name: "Медичні послуги" },
    { id: "injections", name: "Ін'єкційні методики" },
  ];

  return (
    <div className={styleContainer.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.wrapperTitle}>
          <h2 className={styles.title}>
            {lastPart === "cosmetological" && (
              <>
                <span className={styles.title_firstSpan}>Косметологічні </span>
                <span className={styles.title_secondSpan}>послуги</span>
              </>
            )}
            {lastPart === "hardware-cosmetology" && (
              <>
                <span className={styles.title_firstSpan}>Апаратна </span>
                <span className={styles.title_secondSpan}>косметологія</span>
              </>
            )}
            {lastPart === "massages" && (
              <>
                <span className={styles.title_firstSpan}>Масажі та </span>
                <span className={styles.title_secondSpan}>корекція фігури</span>
              </>
            )}
            {lastPart === "medical" && (
              <>
                <span className={styles.title_firstSpan}>Медичні </span>
                <span className={styles.title_secondSpan}>послуги</span>
              </>
            )}
            {lastPart === "injections" && (
              <>
                <span className={styles.title_firstSpan}>Ін'єкційні </span>
                <span className={styles.title_secondSpan}>методики</span>
              </>
            )}
          </h2>
        </div>
        <div className={styles.wrapperNav}>
          <ul className={styles.navList}>
            {navData.map((item) => {
              if (item.id !== lastPart) {
                return (
                  <li key={item.id}>
                    <Link href={`/services/${item.id}`}>
                      {item.name}
                      <ArrowNavMenu className={styles.icon} />
                      <div className={styles.navList_line}></div>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
