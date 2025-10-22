const JobCard = ({ job }) => (
  <div className="job-card">
    <h3>{job.title}</h3>
    <p className="company">{job.company}</p>
    <p className="location">{job.location}</p>
    <p className="description">{job.description}</p>
    <p className="salary">{job.salary}</p>
    <button className="apply-btn">Apply</button>
  </div>
);
export default JobCard;
