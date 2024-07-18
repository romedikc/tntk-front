import { Route, Routes } from "react-router";
import Home from "./views/Home";
import Favorite from "./views/Favorite";
import Cart from "./views/Cart";
import Auth from "./views/Auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyOrders from "./views/MyOrders";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Categories /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/my-orders/" element={<MyOrders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
