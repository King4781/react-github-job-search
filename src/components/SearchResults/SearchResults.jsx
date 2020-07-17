import React, { useContext } from "react";

import { GlobalStateContext } from "../../context/GlobalContextProvider";
import { formatDays } from "../../utils/helperFunctions";

import styles from "./SearchResults.module.css";

//image
import githubLogo from "../../images/github-logo.png";
import earthImg from "../../images/earth.svg";
import clockImg from "../../images/time.svg";

const Card = ({ company, title, logo, type, location, daysPassed }) => {
  daysPassed = formatDays(daysPassed);
  let typeHtml = "";
  if (type === "Full Time") {
    typeHtml = <p className={styles.type}>{type}</p>;
  }
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={logo || githubLogo} alt="Company Logo" />
        <div>
          <small className={styles.company}>{company}</small>
          <p className={styles.title}>{title}</p>
          {typeHtml}
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <img src={clockImg} alt="earth icon" />
          <small>{daysPassed}</small>
        </div>
        <div>
          <img src={earthImg} alt="earth icon" />
          <small>{location}</small>
        </div>
      </div>
    </div>
  );
};

const SearchResults = () => {
  const { jobs } = useContext(GlobalStateContext);
  return (
    <div>
      {jobs.map((job) => (
        <Card
          key={job.id}
          company={job.company}
          title={job.title}
          logo={job.company_logo}
          type={job.type}
          location={job.location}
          daysPassed={job.created_at}
        />
      ))}
    </div>
  );
};

export default SearchResults;
