import React from "react";
import styles from "./HeaderOrFooter.module.css";

const Header = () => (
  <header className={styles.header}>
    <h2>
      <span className={styles.spanOne}>Github</span>{" "}
      <span className={styles.spanTwo}>Jobs</span>
    </h2>
  </header>
);

const Footer = () => (
  <footer className={styles.footer}>
    <p>kentonluvs2code@kentonking.io</p>
  </footer>
);

export { Header, Footer };
