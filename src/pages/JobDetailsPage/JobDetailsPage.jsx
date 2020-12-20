import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

//components
import Layout from "../../components/Layout/Layout";
import Contact from "../../components/Contact/Contact";
import JobDetails from "../../components/JobDetails/JobDetails";

const JobDetailsPage = (props) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const id = props.match.params.id;

  useEffect(() => {
    if (id) {
      fetch(`/jobs/${id}`)
            .then(response => response.json())
            .then(job => {
              if (job.error) {
                throw new Error(job.error);
              }
              setJob(job);
              setLoading(false);
            })
            .catch(() => {
              setIsError(true);
            })
    } else {
      setIsError(true);
    }
  }, [id]);

  if (isError) {
    return <Redirect to="/" />
  }

  return loading ? "" : <Layout main={<JobDetails job={job} />} sideBar={<Contact job={job} />} />;
};

export default JobDetailsPage;
