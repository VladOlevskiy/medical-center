import styleContainer from "../../(styles)/Container.module.scss";
import Image from "next/image";
import styles from "../../(styles)/Home/Instagram.module.scss";
import { LinkWithArrow } from "../UI/LinkWithArrow";
import { MotionDiv } from "../MotionComponents/MotionDiv";

const Instagram = () => {
  return (
    <div className={styleContainer.container}>
      <section className={styles.instagramSection}>
        <div className={styles.instagramSection_mainWrapper}>
          <MotionDiv
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.instagramSection_wrapperImgPC}
          >
            <picture className={styles.instagramSection_wrapperImgPC_img}>
              <source
                srcSet="/media/pictures/instagramImgOneMob.jpg"
                width={182}
                height={182}
                media="(max-width: 833px)"
              />
              <source
                srcSet="/media/pictures/instagramImgOneTablet.jpg"
                width={369}
                height={369}
                media="(max-width: 1439px)"
              />
              <Image
                src="/media/pictures/instagramImgOnePC.jpg"
                alt="woman and cosmetic procedure"
                width={352.5}
                height={352}
              />
            </picture>
            <picture className={styles.instagramSection_wrapperImgPC_img}>
              <source
                srcSet="/media/pictures/instagramImgTwoMob.jpg"
                width={182}
                height={182}
                media="(max-width: 833px)"
              />
              <source
                srcSet="/media/pictures/instagramImgTwoTablet.jpg"
                width={369}
                height={369}
                media="(max-width: 1439px)"
              />
              <Image
                src="/media/pictures/instagramImgTwoPC.jpg"
                alt="woman and cosmetic procedure"
                width={352.5}
                height={352}
              />
            </picture>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.instagramSection_wrapperContent}
          >
            <h2 className={styles.instagramSection_wrapperContent_title}>
              <span
                className={styles.instagramSection_wrapperContent_title_span1}
              >
                Ми в{" "}
              </span>
              <span
                className={styles.instagramSection_wrapperContent_title_span2}
              >
                Instagram
              </span>
            </h2>

            <MotionDiv
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className={styles.instagramSection_wrapperContent_wrapperImg}
            >
              <picture
                className={
                  styles.instagramSection_wrapperContent_wrapperImg_img
                }
              >
                <source
                  srcSet="/media/pictures/instagramImgOneMob.jpg"
                  width={182}
                  height={182}
                  media="(max-width: 833px)"
                />
                <source
                  srcSet="/media/pictures/instagramImgOneTablet.jpg"
                  width={369}
                  height={369}
                  media="(max-width: 1439px)"
                />
                <Image
                  src="/media/pictures/instagramImgOnePC.jpg"
                  alt="woman and cosmetic procedure"
                  width={352.5}
                  height={352}
                />
              </picture>
              <picture
                className={
                  styles.instagramSection_wrapperContent_wrapperImg_img
                }
              >
                <source
                  srcSet="/media/pictures/instagramImgTwoMob.jpg"
                  width={182}
                  height={182}
                  media="(max-width: 833px)"
                />
                <source
                  srcSet="/media/pictures/instagramImgTwoTablet.jpg"
                  width={369}
                  height={369}
                  media="(max-width: 1439px)"
                />
                <Image
                  src="/media/pictures/instagramImgTwoPC.jpg"
                  alt="woman and cosmetic procedure"
                  width={352.5}
                  height={352}
                />
              </picture>
            </MotionDiv>
            <p className={styles.instagramSection_wrapperContent_text}>
              Звідайтеся з нами на Instagram, щоб залишатися в курсі всіх наших
              останніх новин, подій та цікавих моментів і разом з нами відкрийте
              нові можливості та враження!
            </p>
            <LinkWithArrow
              classNameLink={`${styles.link} ${styles.instagramSection_wrapperContent_link}`}
              text={"Переглянути більше"}
              link={"https://www.instagram.com/beautycentr.eva/"}
            />
          </MotionDiv>
        </div>
      </section>
    </div>
  );
};

export default Instagram;
