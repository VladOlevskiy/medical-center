import { promises as fs } from "fs";
import path from "path";
import List from "@/app/(components)/Services/List";
import getPrice from "@/app/(components)/Functions/GetPrice";
import PriceNavigation from "@/app/(components)/Services/PriceNavigation";
import styles from "../../(styles)/Services/PriceList.module.scss";
import Reviews from "@/app/(components)/Services/Reviews";
import getReviews from "@/app/(components)/Functions/GetReviews";

export default async function InjectionsPage({ params }) {
  const priceList = await getPrice();
  const reviews = await getReviews();

  return (
    <section className={styles.pricePage}>
      <PriceNavigation />
      <List id={params} priceList={priceList} />
      <Reviews reviewsData={reviews} />
    </section>
  );
}
