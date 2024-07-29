"use client";

import React from "react";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import styles from "../../(styles)/NavBar.module.scss";
import containerStyle from "../../(styles)/Container.module.scss";
import NavigationList from "./NavigationList";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [showMobMenu, setShowMobMenu] = useState(false);

  const blockScroll = () => {
    if (!showMobMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleShowMobMenu = () => {
    setShowMobMenu((prev) => !prev);
    blockScroll();
  };

  useEffect(() => {
    if (showMobMenu) {
      setShowMobMenu(false);
      blockScroll();
    }
  }, [pathname]);

  return (
    <div className={containerStyle.container}>
      <div className={styles.wrapper}>
        {showMobMenu && <MobileMenu setShow={setShowMobMenu} />}
        <Logo />
        <NavigationList className={styles.navBigScreen} />
        {!showMobMenu && (
          <button className={styles.btn} onClick={() => handleShowMobMenu()}>
            <img
              src="/media/icons/iconMobMenu.png"
              width={40}
              height={40}
              alt="icon"
            />
          </button>
        )}
        {showMobMenu && (
          <button
            className={styles.btn}
            onClick={() => handleShowMobMenu()}
            type="button"
          >
            <img
              src="/media/icons/iconClose.png"
              width={40}
              height={40}
              alt="icon close"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
