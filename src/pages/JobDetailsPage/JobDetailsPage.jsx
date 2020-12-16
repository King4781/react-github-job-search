import React, { useEffect, useContext, useState } from "react";
import { Redirect } from "react-router-dom";

//components
import Layout from "../../components/Layout/Layout";
import Contact from "../../components/Contact/Contact";
import JobDetails from "../../components/JobDetails/JobDetails";

import { GlobalStateContext } from "../../context/GlobalContextProvider";

const JobDetailsPage = (props) => {
  const { jobs } = useContext(GlobalStateContext);
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    if (jobs.length > 0) {
      let job = jobs.find((job) => job.id === id);
      setJob(job);
      setLoading(false);
    }
  }, [id, jobs, job]);

  let html = (
    <Layout main={<JobDetails job={job} />} sideBar={<Contact job={job} />} />
  );

  if (jobs.length === 0) {
    html = <Redirect to="/" />;
    if (loading) {
      setLoading(false);
    }
  }

  return loading ? "" : html;
};

export default JobDetailsPage;
