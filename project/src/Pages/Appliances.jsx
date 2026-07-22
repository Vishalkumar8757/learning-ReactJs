import { useNavigate } from "react-router-dom";
import "../Css/appliances.css";
import logo from "../assets/logo1.png";

function Appliances() {
  const navigate = useNavigate();

  // ✅ ADD TO CART
  function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  }

  return (
    <>
      {/* ================= NAVBAR ================= */}
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

      {/* ================= PRODUCTS ================= */}
      <section className="products">

        <div className="product-card">
          <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/b/l/m/-original-imah5efwsfzaejzv.jpeg?q=70" />
          <h4>LG 7kg Washing Machine</h4>
          <div className="rating">★★★★☆</div>
          <span className="price">₹18,499</span>

          <button
            className="add-cart"
            onClick={() =>
              addToCart({
                name: "LG 7kg Washing Machine",
                price: 18499,
                image:
                  "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/b/l/m/-original-imah5efwsfzaejzv.jpeg?q=70",
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="product-card">
          <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/x/8/a/-original-imahfpfxdkf3fxqt.jpeg?q=70" />
          <h4>Samsung Refrigerator 260L</h4>
          <div className="rating">★★★★★</div>
          <span className="price">₹25,999</span>

          <button
            className="add-cart"
            onClick={() =>
              addToCart({
                name: "Samsung Refrigerator 260L",
                price: 25999,
                image:
                  "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/x/8/a/-original-imahfpfxdkf3fxqt.jpeg?q=70",
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

export default Appliances;