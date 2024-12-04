import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
                                <h2>Sig Up</h2>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label>Name:</label>
                                        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label>Email:</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label>Password:</label>
                                        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                                    </div>
                                    {message && <p style={{ color: "green" }}>{message}</p>}
                                    {error && <p style={{ color: "red" }}>{error}</p>}
                                    <button type="submit">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup