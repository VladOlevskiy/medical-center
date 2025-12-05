import style from "../../(styles)/Home/Info.module.scss";
import containerStyle from "../../(styles)/Container.module.scss";
import { WhiteLineTop, WhiteLineBottom } from "../DesignComponents/WhiteLines";
import Image from "next/image";
import IconNumberOne from "../icons/IconNumberOne";
import IconNumberTwo from "../icons/IconNumberTwo";
import IconLocation from "../icons/IconLocation";
import ArrowNavMenu from "../icons/ArrowNavMenu";
import { MotionDiv } from "../MotionComponents/MotionDiv";
import { MotionItem } from "../MotionComponents/MotionItem";

const Info = () => {
  return (
    <section className={style.infoSection}>
      <WhiteLineTop />
      <div className={style.imgBackground} />
      <div className={style.wrapper}>
        <div className={containerStyle.container}>
          <div className={style.mainWrapper}>
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="imgWrapper"
            >
              <picture>
                <source
                  srcSet="/media/pictures/infoImgMob.jpg"
                  width={380}
                  height={248}
                  media="(max-width: 833px)"
                />
                <source
                  srcSet="/media/pictures/infoImgTablet.jpg"
                  width={770}
                  height={348}
                  media="(max-width: 1439px)"
                />
                <Image
                  src="/media/pictures/infoImgPC.jpg"
                  alt="woman and cosmetic procedure"
                  width={390}
                  height={260}
                  className={style.infoSection_img}
                />
              </picture>
            </MotionDiv>
            <MotionDiv className="textWrapper">
              <ul className={style.infoSection_list}>
                <MotionItem
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.9 }}
                  viewport={{ once: true }}
                  className={style.infoSection_item}
                >
                  <IconNumberOne className={style.infoSection_item_icon} />
                  <h3 className={style.infoSection_item_title}>Хто ми?</h3>
                  <p className={style.infoSection_item_text}>
                    Ласкаво запрошуємо до нашого центру краси та здоров’я «Єва»,
                    де ми втілюємо ваші найзаповітніші красиві мрії у реальність
                    уже протягом 20 років
                  </p>
                </MotionItem>
                <MotionItem
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.9 }}
                  viewport={{ once: true }}
                  className={style.infoSection_item}
                >
                  <IconNumberTwo className={style.infoSection_item_icon} />
                  <h3 className={style.infoSection_item_title}>
                    Що ми роробимо ?
                  </h3>
                  <p className={style.infoSection_item_text}>
                    Наш центр поєднує у собі передові технології з найкращими
                    традиціями косметології та медицини, щоб надати Вам повний
                    спектр послуг і задовольнити всі Ваші потреби у догляді за
                    собою
                  </p>
                </MotionItem>
              </ul>
            </MotionDiv>
          </div>
          <div className={style.line}></div>
          <WhiteLineBottom />
          <MotionDiv
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            viewport={{ once: true }}
            className={style.infoSection_location}
          >
            <IconLocation className={style.infoSection_location_icon} />
            <div className={style.infoSection_location_wrapperText}>
              <h3 className={style.infoSection_location_title}>Локація</h3>
              <p className={style.infoSection_location_text}>
                м.Рівне, вул. Захисників Маріуполя,41
              </p>
            </div>
            <div>
              <a
                href="https://www.google.com/maps/place/%D0%84%D0%B2%D0%B0/@50.6241957,26.2832533,17z/data=!3m1!4b1!4m6!3m5!1s0x472f14a1d55eda4b:0x32eb6d0eca9b5245!8m2!3d50.6241923!4d26.2858282!16s%2Fg%2F1262p_jsg?entry=ttu"
                className={style.infoSection_location_link}
                target="blank"
              >
                На карті
                <ArrowNavMenu
                  className={style.infoSection_location_link_icon}
                />
              </a>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Info;
