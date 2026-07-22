import "../Css/mobile.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo1.png";

function Mobiles() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const products = [
    {
      name: "OnePlus 15",
      img: "https://m.media-amazon.com/images/G/31/img24/Wireless/jkknnet/1synov/iq15_580x740.png",
      price: 69999
    },
    {
      name: "iQOO Z10R",
      img: "https://m.media-amazon.com/images/G/31/img23/Wireless/OnePlus/Flagship/OnePlus15/Sale/CLP/iQOOZ10R_Copy_2_580x740.jpg",
      price: 24999
    },
    {
      name: "Samsung Galaxy M17",
      img: "https://m.media-amazon.com/images/G/31/img23/Wireless/shagun/ssg/9dec/Galaxy_M17__580x740.jpg",
      price: 14999
    },
    {
      name: "Nord 5",
      img: "https://m.media-amazon.com/images/G/31/img23/Wireless/OnePlus/CLP/2025/Oct/22ndOct/nord_5_1.jpg",
      price: 29999
    }
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="left-nav">
          <img
            src={logo}
            alt="Logo"
            id="logo"
            onClick={() => navigate("/profile")}
          />

          <div className="nav-item" onClick={() => navigate("/mobiles")}>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100" />
            <span>Mobiles</span>
          </div>

          <div className="nav-item" onClick={() => navigate("/appliances")}>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/9c64dfa667885ca9.png?q=100" />
            <span>Appliances</span>
          </div>

          <div className="nav-item" onClick={() => navigate("/electronics")}>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/4d6b13d5a0e0724a.png?q=100" />
            <span>Electronics</span>
          </div>

          <div className="nav-item" onClick={() => navigate("/fashion")}>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/ec2982e5564fe07c.png?q=100" />
            <span>Fashion</span>
          </div>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search products" />
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/128/2662/2662503.png"
          className="bag"
          onClick={() => navigate("/cart")}
        />
      </nav>

      {/* BANNER */}
      <img
        className="premium"
        src="https://m.media-amazon.com/images/G/31/img23/Wireless/CatPage/Revamp2025/TDOW/AprRevamp/Top-deals_1_01.jpg"
        alt="header"
      />

      {/* MOBILE PRODUCTS */}
      <div className="mobile">
        {products.map((item, index) => (
          <div className="mobile-card" key={index}>
            <img src={item.img} alt={item.name} className="mob" />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button
              className="add-cart"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Desibaazaar.com. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Mobiles;