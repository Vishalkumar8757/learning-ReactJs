
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "./assets/logo1.png";
import "./Css/frontpage.css";

function FrontPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  // ✅ IMPORTANT FIX: re-check login every time page loads
  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");

    if (loggedUser) {
      try {
        setUser(JSON.parse(loggedUser));
      } catch {
        localStorage.removeItem("loggedUser");
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [navigate]);

  // 🔐 common click handler
  function goToLogin() {
    const isLoggedIn = localStorage.getItem("loggedUser");

    if (!isLoggedIn) {
      toast.error("First you have to login");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      toast.success("Product page coming soon 😄");
    }
  }

  // 🚪 Logout
  function logout() {
    localStorage.removeItem("loggedUser");
    setUser(null);
    setShowProfile(false);
    toast.success("Logged out successfully");
    navigate("/frontpage");
  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="left-nav">
          <img src={logo} alt="Logo" id="logo" onClick={goToLogin} />

          <div className="nav-item" onClick={goToLogin}>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100" />
            <span>Mobiles</span>
          </div>

          <div className="nav-item" onClick={goToLogin}>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/9c64dfa667885ca9.png?q=100" />
            <span>Appliances</span>
          </div>

          <div className="nav-item" onClick={goToLogin}>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/4d6b13d5a0e0724a.png?q=100" />
            <span>Electronics</span>
          </div>

          <div className="nav-item" onClick={goToLogin}>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/ec2982e5564fe07c.png?q=100" />
            <span>Fashion</span>
          </div>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search products" />
        </div>

        {/* ================= LOGIN / PROFILE ================= */}
        <div className="right-nav">
          {!user ? (
            <>
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
              <button className="signup-btn" onClick={() => navigate("/signup")}>
                Signup
              </button>
            </>
          ) : (
            <>
              <button
                className="signup-btn"
                onClick={() => setShowProfile(prev => !prev)}
              >
                {showProfile ? "Close Profile" : "Profile"}
              </button>

              <button className="login-btn" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* ================= PROFILE DETAILS ================= */}
      {user && showProfile && (
        <div className="profile-box">
          <h2>My Profile</h2>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email / Username:</b> {user.username}</p>
          <p><b>Mobile:</b> {user.phone}</p>
          <p><b>Address:</b> {user.address}</p>
        </div>
      )}

      {/* ================= SLIDER ================= */}
      <div className="slider">
        <div className="slide" onClick={goToLogin}>
          <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/t/k/a/-original-imahegzmwrgq2mmn.jpeg?q=70" />
        </div>
        <div className="slide" onClick={goToLogin}>
          <img src="https://cmsimages.shoppersstop.com/Main_KV_web_742464bae8/Main_KV_web_742464bae8.png" />
        </div>
        <div className="slide" onClick={goToLogin}>
          <img src="https://cmsimages.shoppersstop.com/Adidas1_web_b20c858fd0/Adidas1_web_b20c858fd0.png" />
        </div>
      </div>

      {/* ================= OFFERS ================= */}
      <div className="offers-slider">
        <h2><i style={{ color: "gray" }}>Offers for you</i></h2>
        <div className="offers-track">
          <img src="https://images.unsplash.com/photo-1520975922284-6a6f8a0d1a42" onClick={goToLogin} />
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" onClick={goToLogin} />
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" onClick={goToLogin} />
          <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" onClick={goToLogin} />
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>© 2026 Desibaazaar.com. All rights reserved.</p>
      </footer>
    </>
  );
}

export default FrontPage;