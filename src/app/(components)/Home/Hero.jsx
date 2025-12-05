import styles from "../../(styles)/Home/Hero.module.scss";
import containerStyle from "../../(styles)/Container.module.scss";
import IconLicense from "../icons/IconLicense";
import { NavLinkWithArrow } from "../UI/NavLinkWithArrow";

import { MotionSpan } from "../MotionComponents/MotionSpan";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={`${containerStyle.container} ${styles.wrapperPosition}`}>
        <img
          className={`${styles.heroSection_bg} ${styles.heroSection_bg_mob}`}
          src="./media/backgrounds/bgHeroMob.png"
          alt=""
        />
        <img
          className={`${styles.heroSection_bg} ${styles.heroSection_bg_tablet}`}
          src="./media/backgrounds/bgHeroTab.png"
          alt=""
        />
        <img
          className={`${styles.heroSection_bg} ${styles.heroSection_bg_pc}`}
          src="./media/backgrounds/bgHeroPC.png"
          alt=""
        />
        <div className={styles.heroSection_mainTitleWrapper}>
          <div>
            <h1 className={styles.heroTitle}>
              <MotionSpan
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5, ease: "linear" }}
                viewport={{ once: false }}
                className={styles.accentText}
              >
                <span className={styles.number}>20 </span>років
              </MotionSpan>
            </h1>
          </div>
          <div className={styles.heroSection_mainTitleWrapper_innerWrapper}>
            <h1 className={`${styles.heroTitle} ${styles.rightText}`}>
              <MotionSpan
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.5 }}
                viewport={{ once: false }}
              >
                про&shy;фесійного
              </MotionSpan>{" "}
              <MotionSpan
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 1.5 }}
                viewport={{ once: false }}
                className={styles.aaa}
              >
                підходу
              </MotionSpan>
              <MotionSpan
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                viewport={{ once: false }}
                className={`${styles.accentText} ${styles.accentText_right}`}
              >
                {" "}
                до
              </MotionSpan>{" "}
              <MotionSpan
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 1.5 }}
                viewport={{ once: false }}
              >
                вашої краси &
              </MotionSpan>
              <MotionSpan
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2.8, duration: 1.5 }}
                viewport={{ once: false }}
                className={`${styles.accentText} ${styles.accentText_left}`}
              >
                {" "}
                здоров'я
              </MotionSpan>
            </h1>
          </div>
        </div>

        <img
          className={styles.heroImg}
          src="./media/pictures/heroImg.jpg"
          alt=""
        />
        <div className={styles.bottomWrapper}>
          <div className={styles.heroSection_wrapperLicense}>
            <div className={styles.innerWrapper}>
              <IconLicense className={styles.icon} />
              <p className={styles.heroText_license}>
                Ліцензії МОЗ України №43012 від 01.11.2018 року
              </p>
            </div>
          </div>
          <div className={styles.hero_buttonWrapper}>
            <NavLinkWithArrow
              classNameLink={`${styles.btn} ${styles.left}`}
              text={"Консультація"}
              toLink={"/#section-contact"}
              classNameArrow={`${styles.arrow} ${styles.left}`}
            />
            <NavLinkWithArrow
              classNameLink={`${styles.btn} ${styles.right}`}
              text={"Послуги"}
              toLink={"/services/medical"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
