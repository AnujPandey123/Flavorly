import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "../styles/forgot.css";
const UpdatePassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://flavorly-backend.onrender.com/auth/forgotpassword",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        toast.success("Password Updated successfully");

        setTimeout(() => {
          window.location.href = "/";
        }, 4000);
      } else {
        setMessage("An error occurred while updating the password.");
        toast.error("Error in Password update");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while updating the password.");
    }
  };

  return (
    <div className="container update-password-mode">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="update-password-form" onSubmit={handleSubmit}>
            <h2 className="title">Update Password</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Enter New Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn">Update Password</button>
          </form>
          {message && <p className="error-message">{message}</p>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdatePassword;
