import React, { useContext } from "react";

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider";

import styles from "./Pagination.module.css";

const Pagination = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const { arrayPageCount, jobs, jobsPerPage } = useContext(GlobalStateContext);

  const remainingPages = jobs.length - arrayPageCount * jobsPerPage;
  const lastPage = remainingPages <= 0;

  return (
    <div className={styles.container}>
      <button
        style={{
          backgroundColor: arrayPageCount === 1 ? "grey" : "",
          cursor: arrayPageCount === 1 ? "not-allowed" : "pointer",
        }}
        onClick={() => dispatch({ type: "DECREMENT_ARR_COUNT" })}
        className={[styles.button, "btn"].join(" ")}
        disabled={arrayPageCount === 1}
      >
        Previous
      </button>
      <button
        style={{
          backgroundColor: lastPage ? "grey" : "",
          cursor: lastPage ? "not-allowed" : "pointer",
        }}
        onClick={() => {
          dispatch({ type: "INCREMENT_ARR_COUNT" });
        }}
        className={[styles.button, "btn"].join(" ")}
        disabled={lastPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
