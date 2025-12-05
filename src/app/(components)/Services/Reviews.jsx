"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import NextReview from "../icons/NextReview";
import PrevReview from "../icons/PrevReview";
import styles from "../../(styles)/Services/Reviews.module.scss";
import stylesContainer from "../../(styles)/Container.module.scss";
import { motion } from "framer-motion";

const Reviews = ({ reviewsData }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentReviews, setCurrentReviews] = useState([]);

  const showNextReviews = () => {
    if (currentIndex + itemsPerPage < reviewsData.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };
  const showPreviousReviews = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };
  useEffect(() => {
    setCurrentReviews(
      reviewsData.slice(currentIndex, currentIndex + itemsPerPage)
    );
  }, [currentIndex, itemsPerPage]);
  useEffect(() => {
    if (windowWidth < 833) {
      setItemsPerPage(1);
    }
    if (windowWidth >= 834) {
      setItemsPerPage(2);
    }
    if (windowWidth >= 1440) {
      setItemsPerPage(4);
    }
  }, [windowWidth]);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <section className={styles.reviewsSection}>
      <div className={stylesContainer.container}>
        <div className={styles.btnsWrapper}>
          <button
            onClick={showPreviousReviews}
            disabled={currentIndex === 0}
            className={styles.btn}
          >
            <PrevReview />
          </button>

          <button
            onClick={showNextReviews}
            disabled={currentIndex + itemsPerPage >= reviewsData.length}
            className={styles.btn}
          >
            <NextReview />
          </button>
        </div>
        <div className={styles.wrapperContent}>
          <div className={styles.imgWrapper}>
            <picture>
              <source
                srcSet="/media/pictures/reviewsImgMob.jpg"
                width={380}
                height={206}
                media="(max-width: 833px)"
              />
              <source
                srcSet="/media/pictures/reviewsImgTab.jpg"
                width={770}
                height={348}
                media="(max-width: 1439px)"
              />
              <Image
                src="/media/pictures/reviewsImgPC.jpg"
                alt="woman and cosmetic procedure"
                width={315}
                height={356}
              />
            </picture>
          </div>
          <div className={styles.wrapperList}>
            <ul className={styles.list}>
              {currentReviews.map((rev) => (
                <motion.li
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  key={rev.id}
                  className={styles.item}
                >
                  <div className={styles.wrapperInner}>
                    <h3 className={styles.title}>{rev.name}</h3>
                    <p className={styles.text}>{rev.text}</p>
                    <p className={styles.age}>{rev.age}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
