import React from "react";
import { Header, Footer } from "../HeaderOrFooter/HeaderOrFooter";

import styles from "./Layout.module.css";

const Layout = (props) => (
  <div className={styles.layout}>
    <Header />
    {props.children}
    <div className={styles.flexContainer}>
      <div className={styles.sideBar}>{props.sideBar}</div>
      <div className={styles.main}>{props.main}</div>
    </div>
    <Footer />
  </div>
);

export default Layout;
