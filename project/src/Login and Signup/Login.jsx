
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Login.css";
import logo from "../assets/logo1.png";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  // ✅ AUTO REDIRECT (STABLE)
  useEffect(() => {
    try {
      const loggedUser = localStorage.getItem("loggedUser");
      if (loggedUser) {
        JSON.parse(loggedUser);
        navigate("/profile", { replace: true }); // ✅ FIX
      }
    } catch {
      localStorage.removeItem("loggedUser");
    }
  }, []); // ✅ FIX: empty dependency

  function handleChange(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();

    const storedUserRaw = localStorage.getItem("user");
    if (!storedUserRaw) {
      alert("No user found. Please signup first.");
      return;
    }

    const storedUser = JSON.parse(storedUserRaw);

    if (
      (storedUser.username === loginData.username ||
        storedUser.phone === loginData.username) &&
      storedUser.password === loginData.password
    ) {
      localStorage.setItem("loggedUser", JSON.stringify(storedUser));
      navigate("/profile", { replace: true }); // ✅ FIX
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div id="loginpage">
      <img src={logo} alt="logo" width="180px" id="img" />

      <h2 id="h2">Sign in or create account</h2>

      <form id="form" onSubmit={handleLogin}>
        <label id="h1"><b>Enter mobile number or email</b></label><br />
        <input
          type="text"
          id="enter"
          name="username"
          value={loginData.username}
          onChange={handleChange}
          autoComplete="off"
        /><br /><br />

        <label id="h1"><b>Password</b></label><br />
        <input
          type="password"
          id="pass"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          autoComplete="off"
        /><br />

        <input type="submit" value="Continue" id="button" /><br /><br />

        <span
          className="signup"
          onClick={() => navigate("/signup")}
          style={{ cursor: "pointer" }}
        >
          Signup
        </span>
      </form>
    </div>
  );
}

export default Login;