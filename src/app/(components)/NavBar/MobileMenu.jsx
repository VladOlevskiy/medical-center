"use client";
import React from "react";
import stylesMob from "../../(styles)/MobileMenu.module.scss";
import NavigationList from "../NavBar/NavigationList";
import { motion } from "framer-motion";

const MobileMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.4 }}
      className={stylesMob.mobileMenuWrapper}
    >
      <NavigationList />
    </motion.div>
  );
};

export default MobileMenu;
