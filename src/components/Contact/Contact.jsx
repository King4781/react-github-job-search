import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

//images
import backArrow from "../../images/back-arrow.svg";

import styles from "./Contact.module.css";

const Contact = ({ job }) => {
  return (
    <div className={styles.contact}>
      <Link className={styles.back} to="/">
        <img src={backArrow} alt="Go Back" />
        <span>Back to search</span>
      </Link>
      <p className={styles.howToApply}>How to Apply</p>
      <div className={styles.email}>{parse(job.how_to_apply)}</div>
    </div>
  );
};

export default Contact;
