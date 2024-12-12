import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:8000/api/auth/login", {
                email,
                password,
            });

            localStorage.setItem("token", response.data.token);

            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100  " id="hero">
            <div
                className="card shadow-lg border-0"
                style={{
                    width: "30rem",
                    borderRadius: "1rem",
                    background: "linear-gradient(to bottom right, #FFFFFF,#FF5C35)",
                    color: "white"
                }}
            >
                <div className="card-body">
                    <h3 className="card-title text-center mb-4" style={{ fontWeight: "bold" }}>
                        Welcome Back
                    </h3>
                    <p className="text-center" style={{ fontSize: "1rem" }}>
                        Please login to your account
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ borderRadius: "0.5rem" }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ borderRadius: "0.5rem" }}
                            />
                        </div>
                        {error && <p className="text-danger text-center">{error}</p>}
                        <button
                            type="submit"
                            className="btn btn-light w-100"
                            style={{
                                borderRadius: "0.5rem",
                                fontWeight: "bold",
                                color: "#2575fc",
                            }}
                        >
                            Login
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <p>
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                style={{
                                    color: "black",
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                }}
                            >
                                Create an Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
