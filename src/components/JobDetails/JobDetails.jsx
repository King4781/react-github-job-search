import React from "react";
import parse from "html-react-parser";

import { formatDays } from "../../utils/helperFunctions";

import earth from "../../images/earth.svg";
import time from "../../images/time.svg";
import githubImg from "../../images/github-logo.png";

import styles from "./JobDetails.module.css";

const JobDetails = ({ job }) => {
  return (
    <div>
      <div className={styles.top}>
        <h3 className={styles.title}>{job.title}</h3>
        <p className={styles.type}>{job.type}</p>
        <small>
          <img src={time} alt="icon" />
          <span>{formatDays(job.created_at)}</span>
        </small>
      </div>
      <div className={styles.middle}>
        <img
          className={styles.companyLogo}
          src={job.company_logo || githubImg}
          alt=""
        />
        <div className={styles.company}>
          <p>
            <a href={job.company_url} rel="noopener noreferrer" target="_blank">
              {job.company}
            </a>
          </p>
          <small>
            <img src={earth} alt="icon" /> <span>{job.location}</span>
          </small>
        </div>
      </div>
      <div className={styles.jobDescription}>{parse(job.description)}</div>
    </div>
  );
};

export default JobDetails;
