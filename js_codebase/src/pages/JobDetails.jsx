import { useParams } from "react-router-dom";
import { jobs } from "../data/jobs";
import PageLayout from "../layout/PageLayout";
import React from "react";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return <PageLayout title="Not Found">Job not found</PageLayout>;
  }

  return (
    <PageLayout title={job.title}>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Experience:</strong> {job.experience}</p>
      <p>{job.description}</p>
      <button style={styles.button}>Apply Now</button>
    </PageLayout>
  );
};

const styles = {
  button: {
    marginTop: "20px",
    padding: "10px 18px",
    background: "#5b2bcf",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default JobDetails;
