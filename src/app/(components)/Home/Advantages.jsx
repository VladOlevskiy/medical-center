"use client";

import styles from "../../(styles)/Home/Advantages.module.scss";
import containerStyle from "../../(styles)/Container.module.scss";
import { useEffect, useState } from "react";
import { WhiteLineBottom, WhiteLineTop } from "../DesignComponents/WhiteLines";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import LineAdvantagesTablet from "../icons/LineAdvantagesTablet";
import LineAdvantagesPC from "../icons/LineAdvantagesPC";

const Advantages = () => {
  const advantagesList = [
    {
      id: 1,
      label: "Індивідуальний підхід",
      content:
        "Кожен клієнт у нас унікальний, тому ми завжди враховуємо ваші особисті потреби та бажання",
    },
    {
      id: 2,
      label: "Кваліфікований персонал",
      content:
        "Наші спеціалісти - досвідчені фахівці, які постійно вдосконалюються та використовують найновіші техніки і технології",
    },
    {
      id: 3,
      label: "Безпека і комфорт",
      content:
        "Ми використовуємо сертифіковані продукти та обладнання, а наші приміщення створені для вашого комфорту та безпеки",
    },
  ];

  const [advantage, setAdvantage] = useState(advantagesList);
  const [activeAdvantage, setActiveAdvantage] = useState(advantagesList[1].id);
  const [activeText, setActiveText] = useState("");
  const [changeActive, setChangeActive] = useState(false);

  // const handleButtonClick = (id) => {
  //   setActiveAdvantage(id);
  //   const updatedAdvantages = [...advantage];
  //   const index = updatedAdvantages.findIndex((item) => item.id === id);
  //   const [selectedAdvantage] = updatedAdvantages.splice(index, 1);
  //   updatedAdvantages.splice(1, 0, selectedAdvantage);
  //   setAdvantage(updatedAdvantages);
  //   if (activeAdvantage === advantage[1].id) {
  //     setChangeActive((state) => !state);
  //   }
  // };
  const handleButtonClick = (id) => {
    setActiveAdvantage(id);
    if (window.innerWidth <= 833) {
      const updatedAdvantages = [...advantage];
      const index = updatedAdvantages.findIndex((item) => item.id === id);
      const [selectedAdvantage] = updatedAdvantages.splice(index, 1);
      updatedAdvantages.splice(1, 0, selectedAdvantage);
      setAdvantage(updatedAdvantages);
      if (activeAdvantage === advantage[1].id) {
        setChangeActive((state) => !state);
      }
    } else {
      setAdvantage(advantagesList);
    }
  };
  useEffect(() => {
    setActiveText(advantage[1].content);
  }, [advantage, changeActive]);

  return (
    <>
      <section className={styles.advantagesSection}>
        <WhiteLineTop />
        <div className={styles.advantagesSection_imgBackground} />
        <div className={styles.wrapper}>
          <div className={containerStyle.container}>
            <h2 className={styles.advantagesSection_title}>
              Ми надаємо{" "}
              <span className={styles.advantagesSection_title_firstSpan}>
                найкращий
              </span>{" "}
              <span className={styles.advantagesSection_title_secondSpan}>
                сервіс
              </span>
            </h2>
            <div className={styles.advantagesSection_listWrapper}>
              <ul className={styles.advantagesSection_list}>
                <AnimatePresence>
                  {advantage.map((adv) => (
                    <motion.li
                      // initial={{ opacity: 0 }}
                      // animate={{ opacity: 1 }}
                      // exit={{ opacity: 0 }}
                      // transition={{
                      //   ease: "linear",
                      //   duration: 0.4,
                      // }}
                      key={adv.id}
                      className={`${styles.advantagesSection_list_item} ${
                        activeAdvantage === adv.id && `${styles.activeItem}`
                      }`}
                    >
                      <motion.button
                        onClick={() => handleButtonClick(adv.id)}
                        className={`${styles.btn} ${
                          activeAdvantage === adv.id && `${styles.activeBtn}`
                        }`}
                        initial={{ opacity: 0, y: -30, scale: 0.7 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          ease: "linear",
                          duration: 0.45,
                        }}
                        key={changeActive}
                      >
                        {adv.label}
                      </motion.button>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>

              <ul>
                {advantage.map((adv) => (
                  <li
                    key={adv.id}
                    className={`${
                      styles.advantagesSection_textWrapperAbsolute
                    } ${
                      adv.id === 3 &&
                      styles.advantagesSection_textWrapperAbsolute_bottom
                    } ${
                      adv.id === 2 &&
                      styles.advantagesSection_textWrapperAbsolute_right
                    }`}
                  >
                    <p
                      className={`${
                        styles.advantagesSection_textWrapperAbsolute_text
                      } ${
                        activeAdvantage === adv.id &&
                        styles.advantagesSection_textWrapperAbsolute_active
                      }`}
                    >
                      {adv.content}
                    </p>
                  </li>
                ))}
              </ul>
              <LineAdvantagesTablet
                className={
                  styles.advantagesSection_textWrapperAbsolute_arrowImg
                }
              />
              <LineAdvantagesTablet
                className={`${styles.advantagesSection_textWrapperAbsolute_arrowImg} ${styles.advantagesSection_textWrapperAbsolute_arrowImg_bottom}`}
              />
              <LineAdvantagesTablet
                className={`${styles.advantagesSection_textWrapperAbsolute_arrowImg} ${styles.advantagesSection_textWrapperAbsolute_arrowImg_right}`}
              />
              <LineAdvantagesPC
                className={`${styles.advantagesSection_textWrapperAbsolute_arrowImgPC} ${styles.advantagesSection_textWrapperAbsolute_arrowImgPC_top}`}
              />
              <LineAdvantagesPC
                className={`${styles.advantagesSection_textWrapperAbsolute_arrowImgPC} ${styles.advantagesSection_textWrapperAbsolute_arrowImgPC_left}`}
              />
              <LineAdvantagesPC
                className={`${styles.advantagesSection_textWrapperAbsolute_arrowImgPC} ${styles.advantagesSection_textWrapperAbsolute_arrowImgPC_right}`}
              />
            </div>
            <AnimatePresence>
              <motion.div className={styles.advantagesSection_textWrapper}>
                <motion.p
                  className={styles.advantagesSection_textWrapper_text}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    ease: "linear",
                    duration: 0.4,
                    delay: 0.65,
                  }}
                  key={activeText}
                >
                  {activeText}
                </motion.p>
              </motion.div>
            </AnimatePresence>
            <WhiteLineBottom />
          </div>
        </div>
      </section>
    </>
  );
};

export default Advantages;
