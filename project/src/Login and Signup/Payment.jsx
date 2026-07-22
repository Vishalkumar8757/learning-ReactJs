import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Payment() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  function handlePayment() {
    alert("✅ Payment Successful!");
    clearCart();
    navigate("/profile");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Payment Page</h1>
      <h2>Total Amount: ₹{total}</h2>

      <button
        onClick={handlePayment}
        style={{
          padding: "12px 25px",
          background: "green",
          color: "white",
          border: "none",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        Pay Now
      </button>
    </div>
  );
}

export default Payment;