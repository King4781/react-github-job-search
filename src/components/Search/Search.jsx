import React, { useContext, useEffect, useState } from "react";
import styles from "./Search.module.css";

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider";
import { fetchJobs, urlBuilder } from "../../utils/helperFunctions";

//image
import backgroundImage from "../../images/backgroundImg.png";
import suitcase from "../../images/suitcase.svg";

const Search = () => {
  const {
    location,
    isFulltime,
    userEnterLocation, 
    oldLocation,
    description
  } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const [localDescription, setLocalDescription] = useState("");

  useEffect(() => {
    if (oldLocation !== location) {
      fetchJobs(urlBuilder(description, location, isFulltime), dispatch);
      dispatch({ type: "SET_OLD_LOCATION" });
    }
  });

  return (
    <div
      className={styles.search}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchJobs(
            urlBuilder(description, userEnterLocation, isFulltime),
            dispatch
          );
          dispatch({ type: "SET_DESCRIPTION", description: localDescription });
          dispatch({ type: "CLEAR_USER_ENTER_LOCATION" });
          setLocalDescription("");
        }}
      >
        <img src={suitcase} alt="suitcase icon" />
        <input
          type="text"
          name="search"
          value={localDescription}
          onChange={(e) => setLocalDescription(e.target.value)}
          placeholder="Title, companies, expertise or benefits"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
