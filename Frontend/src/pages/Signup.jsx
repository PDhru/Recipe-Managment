import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:8000/api/auth/register", formData);

      setMessage("Signup successful! You can now log in.");
      setFormData({ username: "", email: "", password: "" });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center vh-100"
    // style={{
    //   background: "linear-gradient(to bottom right, #6a11cb, #2575fc)",
    // }}
    >
      <div
        className="card shadow-lg p-4 border-0"
        style={{
          width: "30rem",
          borderRadius: "1rem",
          background: "linear-gradient(to bottom right,#FFFFFF,#FF5C35)"
        }}
      >
        <div className="card-body">
          <h3
            className="card-title text-center mb-4"
            style={{ fontWeight: "bold", color: "orange" }}
          >
            Create an Account
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={{ color: "#444" }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="username"
                className="form-control"
                placeholder="Enter your name"
                value={formData.username}
                onChange={handleChange}
                required
                style={{
                  borderRadius: "0.5rem",
                  borderColor: "orange",
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ color: "#444" }}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  borderRadius: "0.5rem",
                  borderColor: "orange",
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ color: "#444" }}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{
                  borderRadius: "0.5rem",
                  borderColor: "orange",
                }}
              />
            </div>
            {message && <p className="text-success text-center">{message}</p>}
            {error && <p className="text-danger text-center">{error}</p>}
            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{
                borderRadius: "0.5rem",
                background: "linear-gradient(to right, #FFFFFF,#FF5C35)",
                border: "none",
                fontWeight: "bold",
              }}
            >
              Sign Up
            </button>
          </form>
          <div className="text-center mt-3">
            <p style={{ fontSize: "0.9rem", color: "#666" }}>
              Already have an account?{" "}
              <a
                href="/login"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
