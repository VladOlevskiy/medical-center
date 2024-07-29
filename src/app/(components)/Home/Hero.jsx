import { Button } from "../UI/Button";
import styles from "../../(styles)/Home/Hero.module.scss";
import containerStyle from "../../(styles)/Container.module.scss";
import IconLicense from "../icons/IconLicense";
import ArrowNavMenu from "../icons/ArrowNavMenu";

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
              <span className={styles.accentText}>
                <span className={styles.number}>20 </span>років
              </span>
            </h1>
          </div>
          <div className={styles.heroSection_mainTitleWrapper_innerWrapper}>
            <h1 className={`${styles.heroTitle} ${styles.rightText}`}>
              про&shy;фесійного <span className={styles.aaa}>підходу</span>
              <span
                className={`${styles.accentText} ${styles.accentText_right}`}
              >
                {" "}
                до
              </span>{" "}
              вашої краси &
              <span
                className={`${styles.accentText} ${styles.accentText_left}`}
              >
                {" "}
                здоров'я
              </span>
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
            <Button
              className={`${styles.btn} ${styles.left}`}
              type={"button"}
              text={"Консультація"}
              children={<ArrowNavMenu className={styles.iconArrowLeft} />}
            />
            <Button
              className={`${styles.btn} ${styles.right}`}
              type={"button"}
              text={"Послуги"}
              children={<ArrowNavMenu className={styles.iconArrowRight} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
