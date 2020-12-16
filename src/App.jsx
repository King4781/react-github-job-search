import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//components
import SearchPage from "./pages/SearchPage/SearchPage";
import JobDetailsPage from "./pages/JobDetailsPage/JobDetailsPage";

const App = () => (
  <BrowserRouter>
    <Route path="/details/:id" exact component={JobDetailsPage} />
    <Route path="/" exact component={SearchPage} />
  </BrowserRouter>
);

export default App;
