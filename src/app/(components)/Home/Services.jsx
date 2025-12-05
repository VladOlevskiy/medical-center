import styles from "../../(styles)/Home/Services.module.scss";
import containerStyle from "../../(styles)/Container.module.scss";
import ArrowNavMenu from "../icons/ArrowNavMenu";
import { Button } from "../UI/Button";
import { NavLinkWithArrow } from "../UI/NavLinkWithArrow";
import { MotionDiv } from "../MotionComponents/MotionDiv";
import { MotionItem } from "../MotionComponents/MotionItem";

const Services = ({ allServices }) => {
  return (
    <section className={styles.services}>
      <div className={containerStyle.container}>
        <div className={styles.services_titleWrapper}>
          <div className={styles.services_iconWrapper}>
            <img
              src="/media/icons/arrowDownLeft.png"
              width={58}
              height={58}
              alt="arrow"
            />
          </div>
          <MotionDiv
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.services_title}>
              <span className={styles.services_title_spanFirst}>Ми</span>{" "}
              <span className={styles.services_title_spanSecond}>
                <span>
                  спеціа&shy;
                  <span className={styles.services_title_spanThird}>
                    лізуємось{" "}
                  </span>
                  <span className={styles.services_title_spanFourth}>на</span>
                </span>
              </span>
            </h2>
          </MotionDiv>
        </div>
        <ul className={styles.services_list}>
          {allServices &&
            allServices.map((service) => (
              <MotionItem
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.9 }}
                viewport={{ once: true }}
                className={styles.services_list_item}
                key={service.id}
              >
                <div className={styles.services_list_item_imgWrapper}>
                  <img
                    src={`${service.icon}`}
                    width={32}
                    height={32}
                    alt=""
                    className={styles.services_list_item_img}
                  />
                </div>
                <div className={styles.services_list_item_wrapper}>
                  <div className={styles.services_list_item_textWrapper}>
                    <h3 className={styles.services_list_item_title}>
                      {service.title}
                    </h3>
                    <p className={styles.services_list_item_text}>
                      {service.text}
                    </p>
                  </div>
                  <div className={styles.services_list_item_linkWrapper}>
                    <a href="" className={styles.services_list_item_link}>
                      Детальніше
                      <ArrowNavMenu
                        className={styles.services_list_item_link_icon}
                      />
                    </a>
                  </div>
                </div>
              </MotionItem>
            ))}
        </ul>
        <MotionDiv
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          viewport={{ once: true }}
        >
          <NavLinkWithArrow
            classNameLink={`${styles.btn} ${styles.btnServices}`}
            text={"Консультація"}
            toLink={"/#section-contact"}
            classNameArrow={`${styles.arrow} ${styles.white}`}
          />
        </MotionDiv>
      </div>
    </section>
  );
};

export default Services;
