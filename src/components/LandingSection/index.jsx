import React from "react";
import { Link } from "react-router-dom"; // ✅ React Router Link
import "./LandingSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Find Your Dream Job or the Perfect Candidate</h1>
        <p>
          JobLink Starter simplifies your job search or recruitment process.
          Connect with top talent or discover exciting career opportunities
          today.
        </p>

        <div className="hero-buttons">
          <Link to="/login">
            <button className="btn primary">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn secondary">Sign Up</button>
          </Link>
        </div>

        <div className="role-select">
          <label>I am a:</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="role" value="candidate" />
              Candidate
            </label>
            <label>
              <input type="radio" name="role" value="recruiter" />
              Recruiter
            </label>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://imglink.io/i/c0d2f13b-cd95-4f62-87e9-9623efec2ddb.jpg"
          alt="Professionals discussing job opportunities"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
