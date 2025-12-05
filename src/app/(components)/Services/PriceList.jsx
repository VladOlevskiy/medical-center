import stylesContainer from "../../(styles)/Container.module.scss";
import styles from "../../(styles)/Services/PriceList.module.scss";
import Link from "next/link";

const PriceList = () => {
  return (
    <section className={styles.priceListSection}>
      <div className={stylesContainer.container}>
        <Link href={`/services/injections`}>Injections</Link>
      </div>
    </section>
  );
};

export default PriceList;
