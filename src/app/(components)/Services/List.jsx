"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useData } from "./data-provider";
import styles from "../../(styles)/Services/PriceList.module.scss";
import containerStyle from "../../(styles)/Container.module.scss";

export default function List({ priceList, id }) {
  const [filteredPriceList, setFilteredPriceList] = useState(priceList[0]);
  const [pageList, setPageList] = useState([]);
  const [page, setPage] = useState(1);
  const { data, setData } = useData();

  const amount = 32;

  const totalPages = Math.ceil(filteredPriceList.groupServices.length / amount);

  const foo = (newPage) => {
    if (newPage <= totalPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    const startIdx = (page - 1) * amount;
    const endIdx = startIdx + amount;
    setPageList(filteredPriceList.groupServices.slice(startIdx, endIdx));
  }, [filteredPriceList, page, amount]);

  useEffect(() => {
    const foundItem = priceList.find((obj) => obj.id === id.typeService);
    if (foundItem) {
      setFilteredPriceList(foundItem);
      setData(foundItem);
    }
  }, [id, priceList, setData]);

  useEffect(() => {}, [data]);
  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <li key={i} className={styles.itemBtn}>
          <button
            onClick={() => foo(i)}
            className={styles.btnPagination}
            style={{ color: i === page && "black" }}
          >
            {i}
          </button>
        </li>
      );
    }
    return buttons;
  };
  return (
    <div className={containerStyle.container}>
      <ul className={styles.priceList}>
        {pageList.length >= 1 &&
          pageList.map((item) => (
            <li className={styles.item} key={item.title}>
              <div className={styles.wrapper}>
                <div className={styles.titleWrapper}>
                  <h3
                    className={`${styles.title} ${
                      item.type === "title" ? styles.groupName : ""
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.price}>{item.price}</p>
                  {item.description !== "" && (
                    <Link
                      className={styles.link}
                      href={`/services/${filteredPriceList.id}/${item.id}`}
                    >
                      (Детальніше)
                    </Link>
                  )}
                </div>
              </div>
              <div
                className={`${styles.line} ${
                  item.type === "title" ? styles.line_accent : ""
                }`}
              />
            </li>
          ))}
      </ul>
      {totalPages > 1 && (
        <div className={styles.paginationWrapper}>
          <span className={styles.span}>(</span>
          <ul className={styles.listBtns}>
            {pageList.length >= 1 && renderPageButtons()}
          </ul>
          <span className={styles.span}>)</span>
        </div>
      )}
    </div>
  );
}
