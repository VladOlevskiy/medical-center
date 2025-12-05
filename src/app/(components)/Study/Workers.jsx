"use client";
import { useState } from "react";
import styleContainer from "../../(styles)/Container.module.scss";
import styles from "../../(styles)/Study/Workers.module.scss";
import { WhiteLineTop, WhiteLineBottom } from "../DesignComponents/WhiteLines";
import { LinkWithArrow } from "../UI/LinkWithArrow";
import { NavLinkWithArrow } from "../UI/NavLinkWithArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const Workers = () => {
  const [my_swiper, set_my_swiper] = useState({});

  const nextImg = () => {
    my_swiper.slideNext();
  };

  return (
    <>
      <section className={styles.workers} id="section-workers">
        <WhiteLineTop />
        <div className={styles.workers_imgBackground} />
        <div className={styles.workers_wrapper}>
          <div className={styleContainer.container}>
            <h2 className={styles.workers_title}>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className={styles.workers_title_startSpan}
              >
                Наші спеціалісти {""}
              </motion.span>
              <motion.span className={styles.workers_title_mainSpan}>
                {" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                  className={styles.workers_title_firstSpan}
                >
                  найкращі
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  viewport={{ once: true }}
                  className={styles.workers_title_secondSpan}
                >
                  в своїх нішах {""}
                </motion.span>
              </motion.span>
            </h2>
            <ul className={styles.list}>
              <Swiper
                onInit={(ev) => {
                  set_my_swiper(ev);
                }}
                loop="true"
                effect="coverflow"
                pagination={{ type: "fraction" }}
                modules={[EffectCoverflow]}
                scrollbar={{ draggable: true }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 0,
                  modifier: 1,
                  slideShadows: false,
                }}
                breakpoints={{
                  1440: {
                    spaceBetween: 30,
                    slidesPerView: 4,
                  },
                  834: {
                    spaceBetween: 32,
                    slidesPerView: 2.6,
                  },
                  300: {
                    spaceBetween: 48,
                    slidesPerView: 1.4,
                  },
                }}
                className={styles.swiper}
                style={{ position: "relative" }}
              >
                <SwiperSlide style={{ position: "relative" }}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className={styles.workers_sliderMainWrapper}
                  >
                    <img
                      src="/media/pictures/workersMalesh.jpg"
                      alt="photo of worker"
                      height={428}
                      width={285}
                      className={styles.img}
                    />
                    <div
                      style={{ position: "absolute" }}
                      className={styles.workers_sliderMainWrapper_linkWrapper}
                    >
                      <LinkWithArrow
                        classNameLink={`${styles.workers_sliderMainWrapper_linkWrapper_link} ${styles.workers_sliderMainWrapper_linkWrapper_linkWorkers}
            `}
                        classNameArrow={
                          styles.workers_sliderMainWrapper_linkWrapper_arrow
                        }
                        text={"Консультація"}
                        link={"tel:+380986018076"}
                      />
                    </div>
                    <div
                      style={{ position: "absolute" }}
                      className={styles.workers_sliderMainWrapper_textWrapper}
                    >
                      <h2 className={styles.workers_sliderMainWrapper_name}>
                        Малеш Сергій
                      </h2>

                      <p className={styles.workers_sliderMainWrapper_text}>
                        Лікар-косметолог. Засновниця медичного центру «Єва» та
                        однойменного навчального центру. Головний косметолог
                        центру. Спеціалізується на косметології широкого
                        профілю: класична, апаратна, лазерна, ін’єкційна. Тренер
                        бренду Esensa Mediterana. Стаж – 24 роки.
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide style={{ position: "relative" }}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className={styles.workers_sliderMainWrapper}
                  >
                    <img
                      src="/media/pictures/workersRuda.jpg"
                      alt="photo of worker"
                      height={428}
                      width={285}
                      className={styles.img}
                    />
                    <div
                      style={{ position: "absolute" }}
                      className={styles.workers_sliderMainWrapper_linkWrapper}
                    >
                      <LinkWithArrow
                        classNameLink={`${styles.workers_sliderMainWrapper_linkWrapper_link} ${styles.workers_sliderMainWrapper_linkWrapper_linkWorkers}
            `}
                        classNameArrow={
                          styles.workers_sliderMainWrapper_linkWrapper_arrow
                        }
                        text={"Консультація"}
                        link={"tel:+380986018076"}
                      />
                    </div>
                    <div
                      style={{ position: "absolute" }}
                      className={styles.workers_sliderMainWrapper_textWrapper}
                    >
                      <h2 className={styles.workers_sliderMainWrapper_name}>
                        Руда Людмила
                      </h2>

                      <p className={styles.workers_sliderMainWrapper_text}>
                        Лікар-косметолог. Засновниця медичного центру «Єва» та
                        однойменного навчального центру. Головний косметолог
                        центру. Спеціалізується на косметології широкого
                        профілю: класична, апаратна, лазерна, ін’єкційна. Тренер
                        бренду Esensa Mediterana. Стаж – 24 роки.
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide style={{ position: "relative" }}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className={styles.workers_sliderMainWrapper}
                  >
                    <img
                      src="/media/pictures/workersGrinchuk.jpg"
                      alt="photo of worker"
                      height={428}
                      width={285}
                      className={styles.img}
                    />
                    <div
                      style={{ position: "absolute" }}
                      className={styles.workers_sliderMainWrapper_linkWrapper}
                    >
                      <LinkWithArrow
                        classNameLink={`${styles.workers_sliderMainWrapper_linkWrapper_link} ${styles.workers_sliderMainWrapper_linkWrapper_linkWorkers}
            `}
                        classNameArrow={
                          styles.workers_sliderMainWrapper_linkWrapper_arrow
                        }
                        text={"Консультація"}
                        link={"tel:+380986018076"}
                      />
                    </div>
                    <div
                      style={{ position: "absolute" }}
                      className={styles.workers_sliderMainWrapper_textWrapper}
                    >
                      <h2 className={styles.workers_sliderMainWrapper_name}>
                        Гринчук Анжела
                      </h2>

                      <p className={styles.workers_sliderMainWrapper_text}>
                        Лікар-косметолог. Засновниця медичного центру «Єва» та
                        однойменного навчального центру. Головний косметолог
                        центру. Спеціалізується на косметології широкого
                        профілю: класична, апаратна, лазерна, ін’єкційна. Тренер
                        бренду Esensa Mediterana. Стаж – 24 роки.
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.slide} ${styles.slideText}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <p className={styles.textSlide}>
                      Наші фахівці мають багаторічний досвід і високий рівень
                      кваліфікації. Вони постійно вдосконалюються, щоб надавати
                      найкращі послуги та навчати вас новітнім методикам.
                    </p>
                    <NavLinkWithArrow
                      classNameLink={`${styles.link} ${styles.linkWorkers}`}
                      classNameArrow={`${styles.link} ${styles.link_icon}`}
                      text={"Переглянути курси"}
                      toLink={"/study/#section-courses"}
                    />
                  </motion.div>
                </SwiperSlide>
                <div className={styles.wrapperButtonNext}>
                  <button
                    className={styles.wrapperButtonNext_buttonNext}
                    onClick={nextImg}
                  ></button>
                </div>
              </Swiper>
            </ul>
          </div>
        </div>
        <WhiteLineBottom />
      </section>
      <div className={styles.workers_bottomPadding}></div>
    </>
  );
};

export default Workers;
