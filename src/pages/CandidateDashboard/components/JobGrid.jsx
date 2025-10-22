import JobCard from "./JobCard";
const JobGrid = ({ jobs }) => (
  <div className="job-grid">
    {jobs.length > 0 ? (
      jobs.map((job, i) => <JobCard key={i} job={job} />)
    ) : (
      <p className="no-jobs-message">No jobs match your filters.</p>
    )}
  </div>
);
export default JobGrid;
