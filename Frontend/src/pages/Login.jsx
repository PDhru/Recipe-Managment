import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        <>
            <div className="contact-area section_padding_80">
                <div className="container">
                    <div className="contact-form-area">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <div className="contact-form-sidebar item wow fadeInUpBig" data-wow-delay="0.3s" style={{ backgroundImage: 'url("img/bg-img/contact.jpg")', height: 544, visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUpBig' }}>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 item" style={{ height: 544 }}>
                                <div className="contact-form wow fadeInUpBig" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUpBig' }}>
                                    <h2>Login</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <label>Email:</label>
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                        </div>
                                        <div>
                                            <label>Password:</label>
                                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                        </div>
                                        {error && <p style={{ color: "red" }}>{error}</p>}
                                        <button type="submit">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
