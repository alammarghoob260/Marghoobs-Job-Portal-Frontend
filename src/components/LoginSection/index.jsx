import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import "./LoginSection.css";

const LoginSection = () => {
  const { setIsLoggedIn } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.token && data.role) {
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);

        if (data.role === "recruiter") {
          navigate("/RecruiterDashboard");
        } else if (data.role === "candidate") {
          navigate("/CandidateDashboard");
        } else {
          setError("Unknown role. Please contact support.");
        }
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Login error. Please try again.");
    }
  };

  return (
    <section className="login-wrapper">
      <div className="login-left">
        <img
          src="https://imglink.io/i/9a7f09ef-6cb8-4495-b8af-f82ffbc7de19.jpg"
          alt="Login Illustration"
          className="login-illustration"
        />
      </div>

      <div className="login-right">
        <h2>Welcome Back!</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="your@example.com"
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
            <span
              className="toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="btn primary">
            Login
          </button>
        </form>

        <p className="signup-link">
          Don’t have an account?{" "}
          <Link to="/signup">
            <span className="link-text">Sign Up</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginSection;
