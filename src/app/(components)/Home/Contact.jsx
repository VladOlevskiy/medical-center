import Image from "next/image";
import styles from "../../(styles)/Home/Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2>Contact</h2>
      <picture>
        <source
          srcSet="/media/pictures/contactImgMob.jpg"
          width={182}
          height={90}
          media="(max-width: 833px)"
        />
        <source
          srcSet="/media/pictures/contactImgTablet.jpg"
          width={770}
          height={348}
          media="(max-width: 1439px)"
        />
        <Image
          src="/media/pictures/contactImgPC.jpg"
          alt="woman and cosmetic procedure"
          width={390}
          height={368}
          className={styles.contactSection_img}
        />
      </picture>
    </section>
  );
};

export default Contact;
