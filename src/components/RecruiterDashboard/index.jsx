import React, { useRef, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "./RecruiterDashboard.css";

const RecruiterDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [logoPreview, setLogoPreview] = useState(null);
  const fileInputRef = useRef(null);

  const recruiterNavItems = [
    { label: "Post a Job", icon: "📤" },
    { label: "Manage Jobs", icon: "🗂️" },
    { label: "Company Profile", icon: "🏢" },
  ];

  const jobsPosted = [
    {
      title: "Frontend Developer",
      status: "Active",
      applicants: 15,
      date: "2024-07-20",
    },
    {
      title: "UX/UI Designer",
      status: "Active",
      applicants: 10,
      date: "2024-07-18",
    },
    {
      title: "Backend Engineer",
      status: "Closed",
      applicants: 22,
      date: "2024-07-16",
    },
    {
      title: "Data Analyst",
      status: "Active",
      applicants: 15,
      date: "2024-07-15",
    },
    {
      title: "Product Manager",
      status: "Active",
      applicants: 12,
      date: "2024-07-13",
    },
  ];

  const handleLogoClick = () => fileInputRef.current.click();
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLogoPreview(imageUrl);
    }
  };

  return (
    <div className="recruiter-wrapper">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navItems={recruiterNavItems}
        logoText="Innovate Tech"
      />

      <main className="recruiter-main">
        {/* Post a New Job */}
        <section className="job-post-section">
          <h1>Post a New Job</h1>
          <form className="job-form">
            <label>Job Title</label>
            <input type="text" placeholder="e.g., Senior Software Engineer" />

            <label>Salary Range (Annual)</label>
            <input type="text" placeholder="e.g., $80,000 - $100,000" />

            <label>Job Description</label>
            <textarea placeholder="Provide a detailed description of the role..." />

            <label>Location</label>
            <input type="text" placeholder="e.g., Remote, San Francisco, CA" />

            <label>Employment Type</label>
            <select>
              <option>Select type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
            </select>

            <label>Experience Level</label>
            <select>
              <option>Select level</option>
              <option>Junior</option>
              <option>Mid</option>
              <option>Senior</option>
            </select>

            <button type="submit">Post Job</button>
          </form>
        </section>

        {/* Your Posted Jobs */}
        <section className="job-list-section">
          <h2>Your Posted Jobs</h2>
          <div className="table-container">
            <table className="job-table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Status</th>
                  <th>Applicants</th>
                  <th>Posted Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobsPosted.map((job, index) => (
                  <tr key={index}>
                    <td>{job.title}</td>
                    <td>
                      <span
                        className={`status-badge ${job.status.toLowerCase()}`}
                      >
                        {job.status}
                      </span>
                    </td>
                    <td>{job.applicants}</td>
                    <td>{job.date}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="view-btn">View Applicants</button>
                        <button className="edit-btn">Edit</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Company Profile */}
        <section className="company-profile-section">
          <h2>Company Profile</h2>
          <form className="company-form">
            <div className="logo-upload-wrapper">
              <div className="logo-upload-circle" onClick={handleLogoClick}>
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="Company Logo"
                    className="logo-image"
                  />
                ) : (
                  <div className="logo-icon">
                    <span className="building-icon">🏢</span>
                    <span className="edit-icon">✏️</span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleLogoChange}
                  style={{ display: "none" }}
                />
              </div>

              <p className="logo-upload-text">Upload Company Logo</p>

              {logoPreview && (
                <button
                  className="logo-reset-btn"
                  onClick={() => setLogoPreview(null)}
                  type="button"
                >
                  Remove Logo
                </button>
              )}
            </div>

            <label>Company Name</label>
            <input type="text" value="Innovate Tech Solutions" readOnly />

            <label>Website URL</label>
            <input type="text" value="https://innovatetech.com" readOnly />

            <label>Company Description</label>
            <textarea defaultValue="Innovate Tech Solutions is a leading technology company dedicated to creating cutting-edge software solutions that empower businesses worldwide." />

            <label>Industry</label>
            <input type="text" value="Software Development" readOnly />

            <label>Company Size</label>
            <input type="text" value="51-200 employees" readOnly />

            <button type="submit">Save Changes</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default RecruiterDashboard;
