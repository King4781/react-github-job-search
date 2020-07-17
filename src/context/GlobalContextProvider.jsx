import React from "react";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  loading: false,
  jobs: [],
  location: "new york",
  oldLocation: "",
  userEnterLocation: "",
  description: "",
  isFulltime: false,
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
