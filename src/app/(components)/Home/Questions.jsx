"use client";

import { useState } from "react";
import styles from "../../(styles)/Home/Questions.module.scss";
import containerStyle from "../../(styles)/Container.module.scss";
import { WhiteLineBottom, WhiteLineTop } from "../DesignComponents/WhiteLines";
import { motion, AnimatePresence } from "framer-motion";

const Questions = () => {
  const [questionId, setQuestionId] = useState(1);

  return (
    <section className={styles.questionsSection}>
      <div className={`${containerStyle.container} ${styles.wrapperPosition}`}>
        <img
          className={styles.questionsSection_imgBackground}
          src="/media/backgrounds/backgroundQuestions.png"
          alt=""
        />
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.questionsSection_title}
        >
          <span className={styles.questionsSection_title_spanFirst}>Ваші</span>
          <span className={styles.questionsSection_title_spanSecond}>
            <img
              className={styles.questionsSection_title_icon}
              src="/media/icons/arrowDownLeft.png"
              alt=""
            />
            <span className={styles.questionsSection_title_spanThird}>
              запитання
            </span>
          </span>
        </motion.h2>
        <AnimatePresence>
          <ul className={styles.questionsSection_list}>
            <motion.li
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.questionsSection_list_item}
            >
              <img
                className={styles.questionsSection_list_item_imgNumber}
                src="/media/icons/iconNumberOne.png"
                alt=""
              />

              <div className={styles.questionsSection_list_item_textWrapper}>
                <h3
                  className={
                    styles.questionsSection_list_item_textWrapper_titleItem
                  }
                >
                  Які кваліфікації мають ваші спеціалісти?
                </h3>

                {questionId === 1 && (
                  <motion.p
                    className={
                      styles.questionsSection_list_item_textWrapper_textItem
                    }
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      ease: "linear",
                      duration: 0.45,
                    }}
                    key={questionId}
                  >
                    Від процедур з догляду за шкірою обличчя до сучасних методів
                    відновлення і омолодження, ми пропонуємо повний спектр
                    косметологічних послуг для задоволення потреб кожного
                    клієнта
                  </motion.p>
                )}
              </div>
              <button
                className={styles.questionsSection_list_item_button}
                onClick={() => setQuestionId(1)}
              >
                {questionId === 1 ? (
                  <img
                    className={styles.questionsSection_list_item_button_icon}
                    src="/media/icons/iconMinus.png"
                    alt=""
                  />
                ) : (
                  <img
                    className={styles.questionsSection_list_item_button_icon}
                    src="/media/icons/iconPlus.png"
                    alt=""
                  />
                )}
              </button>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className={styles.questionsSection_list_item}
            >
              <img
                className={styles.questionsSection_list_item_imgNumber}
                src="/media/icons/iconNumberTwo.png"
                alt=""
              />

              <div className={styles.questionsSection_list_item_textWrapper}>
                <h3
                  className={
                    styles.questionsSection_list_item_textWrapper_titleItem
                  }
                >
                  Які продукти використовуються під час процедур у вашому
                  центрі?
                </h3>
                {questionId === 2 && (
                  <motion.p
                    className={
                      styles.questionsSection_list_item_textWrapper_textItem
                    }
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      ease: "linear",
                      duration: 0.45,
                    }}
                    key={questionId}
                  >
                    Від процедур з догляду за шкірою обличчя до сучасних методів
                    відновлення і омолодження, ми пропонуємо повний спектр
                    косметологічних послуг для задоволення потреб кожного
                    клієнта
                  </motion.p>
                )}
              </div>
              <button
                className={styles.questionsSection_list_item_button}
                onClick={() => setQuestionId(2)}
              >
                {questionId === 2 ? (
                  <img
                    className={styles.questionsSection_list_item_button_icon}
                    src="/media/icons/iconMinus.png"
                    alt=""
                  />
                ) : (
                  <img
                    className={styles.questionsSection_list_item_button_icon}
                    src="/media/icons/iconPlus.png"
                    alt=""
                  />
                )}
              </button>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className={styles.questionsSection_list_item}
            >
              <img
                className={styles.questionsSection_list_item_imgNumber}
                src="/media/icons/iconNumberThree.png"
                alt=""
              />

              <div className={styles.questionsSection_list_item_textWrapper}>
                <h3
                  className={
                    styles.questionsSection_list_item_textWrapper_titleItem
                  }
                >
                  Чи є у вас подарункові сертифікати?
                </h3>
                {questionId === 3 && (
                  <motion.p
                    className={
                      styles.questionsSection_list_item_textWrapper_textItem
                    }
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      ease: "linear",
                      duration: 0.45,
                    }}
                    key={questionId}
                  >
                    Від процедур з догляду за шкірою обличчя до сучасних методів
                    відновлення і омолодження, ми пропонуємо повний спектр
                    косметологічних послуг для задоволення потреб кожного
                    клієнта
                  </motion.p>
                )}
              </div>
              <button
                className={styles.questionsSection_list_item_button}
                onClick={() => setQuestionId(3)}
              >
                {questionId === 3 ? (
                  <img
                    className={styles.questionsSection_list_item_button_icon}
                    src="/media/icons/iconMinus.png"
                    alt=""
                  />
                ) : (
                  <img
                    className={styles.questionsSection_list_item_button_icon}
                    src="/media/icons/iconPlus.png"
                    alt=""
                  />
                )}
              </button>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className={styles.questionsSection_list_item}
            >
              <img
                className={styles.questionsSection_list_item_imgNumber}
                src="/media/icons/iconNumberFour.png"
                alt=""
              />

              <div className={styles.questionsSection_list_item_textWrapper}>
                <h3
                  className={
                    styles.questionsSection_list_item_textWrapper_titleItem
                  }
                >
                  Чи можна забронювати час для візиту заздалегідь?
                </h3>
                {questionId === 4 && (
                  <motion.p
                    className={
                      styles.questionsSection_list_item_textWrapper_textItem
                    }
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      ease: "linear",
                      duration: 0.45,
                    }}
                    key={questionId}
                  >
                    Від процедур з догляду за шкірою обличчя до сучасних методів
                    відновлення і омолодження, ми пропонуємо повний спектр
                    косметологічних послуг для задоволення потреб кожного
                    клієнта
                  </motion.p>
                )}
              </div>
              <button
                className={styles.questionsSection_list_item_button}
                onClick={() => setQuestionId(4)}
              >
                {questionId === 4 ? (
                  <img
                    className={styles.questionsSection_list_item_button_icon}
                    src="/media/icons/iconMinus.png"
                    alt=""
                  />
                ) : (
                  <img
                    className={styles.questionsSection_list_item_button_icon}
                    src="/media/icons/iconPlus.png"
                    alt=""
                  />
                )}
              </button>
            </motion.li>
          </ul>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Questions;
