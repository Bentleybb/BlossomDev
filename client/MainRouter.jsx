import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./user/Users.jsx";
import Signup from "./user/Signup.jsx";
import Signin from './lib/Signin.jsx'
import Profile from "./user/Profile.jsx";
import PrivateRoute from "./lib/PrivateRoute.jsx";
import EditProfile from "./user/EditProfile.jsx";
import Products from "./product/Products.jsx";
import ProductCart from "./product/cart.jsx";
import ProductCheckout from "./product/checkout.jsx";
import CategoryPage from "./product/CategoryPage";
import Menu from "./components/Menu";
import NavbarCategory from "./components/NavbarCategory.jsx";

function MainRouter() {
  const location = useLocation();
  const hideNavbarOnRoutes = ["/cart", "/checkout", "/signin", "/signup"];
  const shouldShowNavbar = !hideNavbarOnRoutes.includes(location.pathname);
  return (
    <div>
      <Menu />
      {shouldShowNavbar && <NavbarCategory />} {/* Conditional rendering */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />

        <Route
          path="/user/edit/:userId"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route path="/user/:userId" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <ProductCart />
            </PrivateRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <ProductCheckout />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default MainRouter;
