import { useNavigate } from "react-router-dom";
import "../Css/electronics.css";
import logo from "../assets/logo1.png";

function Electronics() {
  const navigate = useNavigate();

  // 🔹 Add to Cart logic (SAME as Appliances)
  function addToCart(product) {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    navigate("/cart"); // cart page par bhej dega
  }

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="left-nav">
          <img src={logo} id="logo" alt="logo" />

          <div className="nav-item" onClick={() => navigate("/mobiles")}>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png" />
            <span>Mobiles</span>
          </div>

          <div className="nav-item" onClick={() => navigate("/appliances")}>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/9c64dfa667885ca9.png" />
            <span>Appliances</span>
          </div>

          <div className="nav-item">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/4d6b13d5a0e0724a.png" />
            <span>Electronics</span>
          </div>

          <div className="nav-item" onClick={() => navigate("/fashion")}>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/ec2982e5564fe07c.png" />
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

      {/* ================= BANNER ================= */}
      <div className="banner">
        <h2>Electronics MahaSale</h2>
      </div>

      {/* ================= PRODUCTS ================= */}
      <section className="products">
        {/* PRODUCT 1 */}
        <div className="product-card">
          <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/s/i/u/-original-imah76jt64ffmwg4.jpeg?q=70" />
          <h4>Noise Smartwatch</h4>
          <div className="rating">★★★★★</div>
          <span className="price">₹1999</span>
          <button
            className="add-cart"
            onClick={() =>
              addToCart({
                name: "Noise Smartwatch",
                price: 1999,
                image:
                  "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/s/i/u/-original-imah76jt64ffmwg4.jpeg?q=70",
              })
            }
          >
            Add to Cart
          </button>
        </div>

        {/* PRODUCT 2 */}
        <div className="product-card">
          <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/i/b/-original-imahgx8xfjr3aah3.jpeg?q=70" />
          <h4>Dell Inspiron 15</h4>
          <div className="rating">★★★★☆</div>
          <span className="price">₹45,999</span>
          <button
            className="add-cart"
            onClick={() =>
              addToCart({
                name: "Dell Inspiron 15",
                price: 45999,
                image:
                  "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/i/b/-original-imahgx8xfjr3aah3.jpeg?q=70",
              })
            }
          >
            Add to Cart
          </button>
        </div>

        {/* PRODUCT 3 */}
        <div className="product-card">
          <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/v/d/g/-original-imahgr295uvptwq7.jpeg?q=70" />
          <h4>Sony WH-1000XM5</h4>
          <div className="rating">★★★★★</div>
          <span className="price">₹24,999</span>
          <button
            className="add-cart"
            onClick={() =>
              addToCart({
                name: "Sony WH-1000XM5",
                price: 24999,
                image:
                  "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/v/d/g/-original-imahgr295uvptwq7.jpeg?q=70",
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </section>
    </>
  );
}

export default Electronics;