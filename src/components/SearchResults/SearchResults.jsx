import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Pagination from "../Pagination/Pagination";

import { GlobalStateContext } from "../../context/GlobalContextProvider";
import { formatDays, paginate, truncate } from "../../utils/helperFunctions";

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
          <img src={clockImg} alt="clock icon" />
          <small>{daysPassed}</small>
        </div>
        <div>
          <img src={earthImg} alt="earth icon" />
          <small>{truncate(location, 16)}</small>
        </div>
      </div>
    </div>
  );
};

const SearchResults = () => {
  const { jobs, arrayPageCount, loading, jobsPerPage } = useContext(
    GlobalStateContext
  );

  let noJobsFound = jobs.length === 0;
  let paginatedArray = paginate(jobs, jobsPerPage, arrayPageCount);

  let results = (
    <>
      {paginatedArray.map((job) => (
        <Link key={job.id} to={`/details/${job.id}`}>
          <Card
            company={job.company}
            title={job.title}
            logo={job.company_logo}
            type={job.type}
            location={job.location}
            daysPassed={job.created_at}
          />
        </Link>
      ))}
      <Pagination />
    </>
  );

  if (noJobsFound) {
    results = <h1 className={styles.noJobsFound}>No jobs Found!</h1>;
  }
  return (
    <div>{loading ? <div className={styles.loading}></div> : results}</div>
  );
};

export default SearchResults;
