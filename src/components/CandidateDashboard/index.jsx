import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "./CandidateDashboard.css";

const CandidateDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    type: "",
    salary: "",
  });
  const [filteredJobs, setFilteredJobs] = useState([]);

  const candidateNavItems = [
    { label: "Jobs", icon: "🧳" },
    { label: "My Applications", icon: "📄" },
    { label: "Profile Settings", icon: "⚙️" },
  ];

  ];

  
  useEffect(() => {
    const filtered = allJobs.filter((job) => {
      const titleMatch = job.title
        .toLowerCase()
        .includes(filters.title.toLowerCase());
      const locationMatch = job.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());
      const typeMatch = filters.type === "" || job.type === filters.type;
      const salaryMatch =
        filters.salary === "" ||
        job.salary
          .replace(/[^0-9\-]/g, "")
          .includes(filters.salary.replace(/[^0-9\-]/g, ""));
      return titleMatch && locationMatch && typeMatch && salaryMatch;
    });
    setFilteredJobs(filtered);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navItems={candidateNavItems}
        logoText="JobLink"
      />

      <main className="main-content">
        <section className="job-discovery-wrapper">
          <div className="filter-wrapper">
            <h1>Find Your Next Opportunity</h1>
            <div className="filters">
              <input
                type="text"
                name="title"
                placeholder="Job Title"
                value={filters.title}
                onChange={handleFilterChange}
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={filters.location}
                onChange={handleFilterChange}
              />
              <select
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
              >
                <option value="">Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Remote">Remote</option>
              </select>
              <input
                type="text"
                name="salary"
                placeholder="Salary Range"
                value={filters.salary}
                onChange={handleFilterChange}
              />
              <button
                onClick={() =>
                  setFilters({ title: "", location: "", type: "", salary: "" })
                }
              >
                Reset
              </button>
            </div>
          </div>

          <div className="recommended-wrapper">
            <h2>Recommended Jobs</h2>
            <div className="job-grid">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <div key={index} className="job-card">
                    <h3>{job.title}</h3>
                    <p className="company">{job.company}</p>
                    <p className="location">{job.location}</p>
                    <p className="description">{job.description}</p>
                    <p className="salary">{job.salary}</p>
                    <button className="apply-btn">Apply</button>
                  </div>
                ))
              ) : (
                <p className="no-jobs-message">No jobs match your filters.</p>
              )}
            </div>
          </div>
        </section>

        <section className="application-wrapper">
          <h2>Your Applications Status</h2>
          <div className="application-grid">
            {applications.map((app, index) => (
              <div key={index} className="application-card">
                <h3>{app.title}</h3>
                <p className="company">{app.company}</p>
                <p className={`status ${app.status.toLowerCase()}`}>
                  Status: {app.status}
                </p>
                <p className="date">Date: {app.date}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CandidateDashboard;
