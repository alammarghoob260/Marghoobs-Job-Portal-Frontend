import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ React Router Link
import "./SignupSection.css";

const SignupSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || data.error);
    } catch (err) {
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <section className="signup-wrapper">
      <div className="signup-left">
        <img
          className="signup-img"
          src="https://imglink.io/i/05139150-211a-4d16-9dbe-20e9f7b160bd.jpg"
          alt="Signup Illustration"
        />
      </div>

      <div className="signup-right">
        <h2>Create Your Account</h2>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="role">Select your role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Role --</option>
            <option value="candidate">Candidate</option>
            <option value="recruiter">Recruiter</option>
          </select>

          <button type="submit" className="btn primary">
            Sign Up
          </button>
        </form>

        <p className="login-link">
          Already have an account?{" "}
          <Link to="/login">
            <span className="link-text">Login</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignupSection;
