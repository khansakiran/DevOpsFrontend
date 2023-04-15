import "./App.css";
import Navbar from "./components/Navbar";
import BodyPage from "./components/BodyPage";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";
import Profile from "./components/Profile";
import CartMain from "./components/CartMain";
import { Routes, Route, useNavigate } from "react-router-dom";
import Orders from "./components/Orders";
import AddProduct from "./components/AddProduct";
import { useEffect } from "react";
function Auth() {
  const navigate = useNavigate()
  useEffect(() => {
    const val = localStorage.getItem('user')
    if (val == null) {
      return navigate('/login')
    }
  }, [])
  return (<>
  </>)

}
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/body" element={<BodyPage />}></Route>
        <Route path="addProduct" element={<AddProduct />}></Route>
        <Route path="/user/productDetails/:id" element={<ProductDetails />}></Route>
        <Route path="/user/cart" element={<CartMain />}></Route>
        <Route path="/user/orders" element={<Orders />}></Route>
        <Route path="/user/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

    </>
  );
}

export default App;
