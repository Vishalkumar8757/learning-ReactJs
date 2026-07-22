import { useNavigate } from "react-router-dom";
import "../Css/fashion.css";
import logo from "../assets/logo1.png";
import { useCart } from "../context/CartContext";

function Fashion() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  function handleAdd(product) {
    addToCart(product);
    navigate("/cart");
  }

  const products = [
    {
      name: "Men Denim Shirt",
      price: 999,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/t/q/p/m-artical-dn-2-texure-n-and-j-original-imahhsmvgkn9u6ca.jpeg?q=70"
    },
    {
      name: "Men Casual T-Shirt",
      price: 799,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/q/l/5/m-jr5nahlm6l-try-this-original-imahfe5fmhqehwzm.jpeg?q=70"
    },
    {
      name: "Men Blue Jeans",
      price: 1499,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/6/5/g/28-26-hoc-original-imahgmndhrf7axtf.jpeg?q=70"
    },
    {
      name: "Men Black Jeans",
      price: 1599,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/6/x/t/32-mbb0015-star4well-original-imahdgmsubfqqzvu.jpeg?q=70"
    },
    {
      name: "Men Sneakers",
      price: 2499,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/j/6/-original-imah6g5m3puwqm5d.jpeg?q=70"
    },
    {
      name: "Women Denim Dress",
      price: 1799,
      image: "https://m.media-amazon.com/images/I/61Zl71evOAL._AC_UL320_.jpg"
    },
    {
      name: "Women Kurti",
      price: 1299,
      image: "https://m.media-amazon.com/images/I/71GGncfOcoL._SY879_.jpg"
    },
    {
      name: "Women Top",
      price: 899,
      image: "https://m.media-amazon.com/images/I/61SyLvj4bGL._AC_UL320_.jpg"
    },
    {
      name: "Women Party Dress",
      price: 2199,
      image: "https://m.media-amazon.com/images/I/715nOv3hS9L._AC_UL320_.jpg"
    }
   
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="left-nav">
          <img
            src={logo}
            id="logo"
            alt="logo"
            onClick={() => navigate("/profile")}
          />

          <div className="nav-item" onClick={() => navigate("/mobiles")}>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png" />
            <span>Mobiles</span>
          </div>

          <div className="nav-item" onClick={() => navigate("/appliances")}>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/9c64dfa667885ca9.png" />
            <span>Appliances</span>
          </div>

          <div className="nav-item" onClick={() => navigate("/electronics")}>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/4d6b13d5a0e0724a.png" />
            <span>Electronics</span>
          </div>

          <div className="nav-item">
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
        <h2>Fashion Mega Sale</h2>
      </div>

      {/* ================= PRODUCTS ================= */}
      <section className="products">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} />
            <h4>{item.name}</h4>
            <span className="price">₹{item.price}</span>

            <button
              className="add-cart"
              onClick={() => handleAdd(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>© 2025 Desibaazaar.com. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Fashion;