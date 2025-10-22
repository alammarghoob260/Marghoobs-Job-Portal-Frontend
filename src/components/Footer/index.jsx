import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Platform</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/jobs">Browse Jobs</a>
            </li>
            <li>
              <a href="/companies">Companies</a>
            </li>
            <li>
              <a href="/dashboard">My Dashboard</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Recruiters</h4>
          <ul>
            <li>
              <a href="/post-job">Post a Job</a>
            </li>
            <li>
              <a href="/manage-jobs">Manage Listings</a>
            </li>
            <li>
              <a href="/shortlist">Shortlist Candidates</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="/terms">Terms of Use</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/compliance">Compliance</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="https://linkedin.com">LinkedIn</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter (X)</a>
            </li>
            <li>
              <a href="https://youtube.com">YouTube</a>
            </li>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Built with ❤️ and 🧠 for recruiters in India</p>
      </div>
    </footer>
  );
};

export default Footer;
