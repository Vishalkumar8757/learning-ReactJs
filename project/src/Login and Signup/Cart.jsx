import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../Css/cart.css";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return <h2 className="empty">🛒 Cart is Empty</h2>;
  }

  return (
    <div className="cart-container">
      <h1>My Cart</h1>

      {cart.map((item, i) => (
        <div className="cart-item" key={i}>
          <img src={item.image || item.img} alt={item.name} />

          <div className="details">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <div className="qty">
              <button onClick={() => decreaseQty(item.name)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.name)}>+</button>
            </div>

            <button
              className="remove"
              onClick={() => removeFromCart(item.name)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <button
        className="buy-btn"
        onClick={() => navigate("/payment")}
      >
        Buy Now
      </button>

      <button className="clear-btn" onClick={clearCart}>
        Clear Cart
      </button>

      <button className="back-btn" onClick={() => navigate("/profile")}>
        ⬅ Back
      </button>
    </div>
  );
}

export default Cart;