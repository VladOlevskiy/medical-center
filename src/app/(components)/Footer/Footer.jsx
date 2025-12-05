import NavigationList from "../NavBar/NavigationList";
import containerStyle from "../../(styles)/Container.module.scss";
import styles from "../../(styles)/Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footer_lineTop}></div>
      <section className={styles.footer}>
        <div className={containerStyle.container}>
          <div className={styles.footer_mainWrapper}>
            <div className={styles.footer_infoWrapper}>
              <p className={styles.footer_infoWrapper_text}>
                м.Рівне, вул. Захисників Маріуполя,41
              </p>
              <div className={styles.footer_infoWrapper_linksWrapper}>
                <ul className={styles.footer_infoWrapper_linksWrapper_list}>
                  <li
                    className={styles.footer_infoWrapper_linksWrapper_list_item}
                  >
                    <a
                      className={
                        styles.footer_infoWrapper_linksWrapper_list_item_link
                      }
                      href="https://www.instagram.com/beautycentr.eva/"
                      target="blank"
                    >
                      <img
                        className={
                          styles.footer_infoWrapper_linksWrapper_list_item_link_icon
                        }
                        src="/media/icons/iconFooterInstagram.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li
                    className={styles.footer_infoWrapper_linksWrapper_list_item}
                  >
                    <a
                      className={
                        styles.footer_infoWrapper_linksWrapper_list_item_link
                      }
                      href="tel:+380986018076"
                    >
                      <img
                        className={
                          styles.footer_infoWrapper_linksWrapper_list_item_link_icon
                        }
                        src="/media/icons/iconFooterTel.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li
                    className={styles.footer_infoWrapper_linksWrapper_list_item}
                  >
                    <a
                      className={
                        styles.footer_infoWrapper_linksWrapper_list_item_link
                      }
                      href="mailto:evarivne@gmail.com"
                      target="blank"
                    >
                      <img
                        className={
                          styles.footer_infoWrapper_linksWrapper_list_item_link_icon
                        }
                        src="/media/icons/iconFooterMail.png"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footer_navWrapper}>
              <NavigationList className={styles.footer_navWrapper_navList} />
            </div>
          </div>
          <div className={styles.footer_lineMiddle}></div>
          <div className={styles.footer_bottomWrapper}>
            <p className={styles.footer_bottomWrapper_text}>
              Договір публічної оферти{" "}
            </p>
            <p className={styles.footer_bottomWrapper_text}>
              Політика конфіденційності
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
