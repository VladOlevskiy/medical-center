import React from "react";
import stylesMob from "../../(styles)/MobileMenu.module.scss";
import NavigationList from "../NavBar/NavigationList";

const MobileMenu = () => {
  return (
    <div className={stylesMob.mobileMenuWrapper}>
      <NavigationList />
    </div>
  );
};

export default MobileMenu;
