import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Filters from "./components/Filters";
import JobGrid from "./components/JobGrid";
import ApplicationGrid from "./components/ApplicationGrid";
import { allJobs } from "./data/jobs";
import { applications } from "./data/applications";
import styles from "./CandidateDashboard.module.css";

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
    <div className={styles.dashboardWrapper}>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navItems={candidateNavItems}
        logoText="JobLink"
      />

      <main className={styles.mainContent}>
        <section className={styles.jobDiscoveryWrapper}>
          <div className={styles.filterWrapper}>
            <h1>Find Your Next Opportunity</h1>
            <Filters
              filters={filters}
              onChange={handleFilterChange}
              onReset={() =>
                setFilters({ title: "", location: "", type: "", salary: "" })
              }
            />
          </div>
          <div className={styles.recommendedWrapper}>
            <h2>Recommended Jobs</h2>
            <JobGrid jobs={filteredJobs} />
          </div>
        </section>

        <section className={styles.applicationWrapper}>
          <h2>Your Applications Status</h2>
          <ApplicationGrid applications={applications} />
        </section>
      </main>
    </div>
  );
};

export default CandidateDashboard;
