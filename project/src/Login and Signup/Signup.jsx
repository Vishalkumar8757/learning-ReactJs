
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Signup.css";   

function Signup() {
  const [data, setData] = useState({
    name: "",
    username: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      name: data.name,
      username: data.username,
      phone: data.phone,
      address: data.address,
      password: data.password,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    alert("Signup Successful");
    navigate("/login");
  }

  return (
    <div id="signuppage">
      <h2 className="signup-title">Create Account</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-label">Name</label><br />
        <input className="signup-input" name="name" onChange={handleChange} required /><br /><br />

        <label className="signup-label">Email / Username</label><br />
        <input className="signup-input" name="username" onChange={handleChange} required /><br /><br />

        <label className="signup-label">Mobile Number</label><br />
        <input className="signup-input" name="phone" onChange={handleChange} required /><br /><br />

        <label className="signup-label">Address</label><br />
        <input className="signup-input" name="address" onChange={handleChange} required /><br /><br />

        <label className="signup-label">Password</label><br />
        <input className="signup-input" type="password" name="password" onChange={handleChange} required /><br /><br />

        <label className="signup-label">Confirm Password</label><br />
        <input className="signup-input" type="password" name="confirmPassword" onChange={handleChange} required /><br /><br />

        <input type="submit" value="Signup" className="signup-btn" /><br /><br />

        <span className="back-login" onClick={() => navigate("/login")}>
          Back to Login
        </span>
      </form>
    </div>
  );
}

export default Signup;