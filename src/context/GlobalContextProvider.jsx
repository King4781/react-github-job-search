import React from "react";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  loading: true,
  jobs: [],
  location: "new york",
  oldLocation: "",
  userEnterLocation: "",
  description: "",
  isFulltime: false,
  arrayPageCount: 1,
  jobsPerPage: 5,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_JOBS":
      return {
        ...state,
        jobs: [...state.jobs],
        loading: true,
      };
    case "SET_IS_FULLTIME":
      return {
        ...state,
        jobs: [...state.jobs],
        isFulltime: !state.isFulltime,
      };
    case "INCREMENT_ARR_COUNT":
      return {
        ...state,
        jobs: [...state.jobs],
        arrayPageCount: state.arrayPageCount + 1,
      };
    case "DECREMENT_ARR_COUNT":
      return {
        ...state,
        jobs: [...state.jobs],
        arrayPageCount: state.arrayPageCount - 1,
      };
    case "SET_LOCATION":
      return {
        ...state,
        jobs: [...state.jobs],
        location: action.location,
      };
    case "CLEAR_USER_ENTER_LOCATION":
      return {
        ...state,
        jobs: [...state.jobs],
        userEnterLocation: "",
      };
    case "SET_OLD_LOCATION":
      return {
        ...state,
        jobs: [...state.jobs],
        oldLocation: state.location,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        jobs: [...state.jobs],
        description: action.description,
      };
    case "CLEAR_DESCRIPTION":
      return {
        ...state,
        jobs: [...state.jobs],
        description: "",
      };
    case "SET_USER_ENTER_LOCATION":
      return {
        ...state,
        jobs: [...state.jobs],
        userEnterLocation: action.location,
      };
    case "SET_JOBS":
      return {
        ...state,
        jobs: action.jobs,
        loading: false,
        noJobsFound: action.noJobsFound,
        arrayPageCount: 1,
      };
    case "ERROR":
      return {
        ...state,
        jobs: [...state.jobs],
        loading: false,
        error: action.error,
      };
    default:
      throw new Error("Action Type Not Found");
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
