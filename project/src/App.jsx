
import { Routes, Route } from "react-router-dom";
import FrontPage from "./Frontpage";
import Login from "./Login and Signup/Login";
import Signup from "./Login and Signup/Signup";
import Profile from "./Login and Signup/Profile";

import Mobiles from "./Pages/Mobiles";
import Appliances from "./Pages/Appliances";
import Electronics from "./Pages/Electronics";
import Fashion from "./Pages/Fashion";
import Cart from "./Login and Signup/Cart";
import Payment from "./Login and Signup/Payment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/frontpage" element={<FrontPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/mobiles" element={<Mobiles />} />
      <Route path="/appliances" element={<Appliances />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/fashion" element={<Fashion />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;