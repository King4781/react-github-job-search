import React, { useContext } from "react";

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider";

import styles from "./Location.module.css";

import earthImg from "../../images/earth.svg";

const FullTime = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const { isFulltime, description } = useContext(GlobalStateContext);
  return (
    <>
      <input
        onChange={() => {
          dispatch({ type: "SET_IS_FULLTIME" });
        }}
        className={styles.checkbox}
        type="checkbox"
        checked={isFulltime}
        id="fulltime"
        name="fulltime"
      />
      <label className={styles.checkboxLabel} htmlFor="fulltime">
        Full Time
      </label>
      <p className={styles.searchTerm}>
        {description ? "Search term : " + description : ""}
      </p>
    </>
  );
};

const Location = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const { location, userEnterLocation } = useContext(GlobalStateContext);

  return (
    <div className={styles.location}>
      <fieldset>
        <FullTime />
      </fieldset>
      <fieldset>
        <h4>Location</h4>
        <div className={styles.flexDiv}>
          <img className={styles.img} src={earthImg} alt="earth icon" />
          <input
            className={styles.text}
            type="text"
            name="location"
            placeholder="City, state, zip code or country"
            value={userEnterLocation}
            onChange={(e) =>
              dispatch({
                type: "SET_USER_ENTER_LOCATION",
                location: e.target.value,
              })
            }
          />
        </div>
      </fieldset>
      <fieldset className={styles.radio}>
        <div>
          <input
            type="radio"
            value="london"
            id="london"
            checked={location === "london"}
            onChange={(e) =>
              dispatch({ type: "SET_LOCATION", location: e.target.value })
            }
            name="london"
          />
          <label htmlFor="london">London</label>
        </div>

        <div>
          <input
            type="radio"
            value="amsterdam"
            id="amsterdam"
            checked={location === "amsterdam"}
            onChange={(e) =>
              dispatch({ type: "SET_LOCATION", location: e.target.value })
            }
            name="amsterdam"
          />
          <label htmlFor="amsterdam">Amsterdam</label>
        </div>

        <div>
          <input
            type="radio"
            value="new york"
            id="new_york"
            checked={location === "new york"}
            onChange={(e) =>
              dispatch({ type: "SET_LOCATION", location: e.target.value })
            }
            name="new_york"
          />
          <label htmlFor="new_york">New York</label>
        </div>

        <div>
          <input
            type="radio"
            value="berlin"
            id="berlin"
            checked={location === "berlin"}
            onChange={(e) =>
              dispatch({ type: "SET_LOCATION", location: e.target.value })
            }
            name="berlin"
          />
          <label htmlFor="berlin">Berlin</label>
        </div>
      </fieldset>
    </div>
  );
};

export default Location;
