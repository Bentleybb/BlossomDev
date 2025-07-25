import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./user/Users.jsx";
import Signup from "./user/Signup.jsx";
<<<<<<< HEAD
import Signin from './lib/Signin.jsx';
=======
import Signin from './lib/Signin.jsx'
>>>>>>> a2af5e548c88d9c7b9f97c32c6cb3190ab6ee1d9
import Profile from "./user/Profile.jsx";
import PrivateRoute from "./lib/PrivateRoute.jsx";
import EditProfile from "./user/EditProfile.jsx";
import Products from "./product/Products.jsx";
import ProductCart from "./product/cart.jsx";
<<<<<<< HEAD
import ProductCheckout from "./product/Checkout.jsx";
import CategoryPage from "./product/CategoryPage";
import Confirmation from "./product/Confirmation.jsx";
import Menu from "./components/Menu";
import NavbarCategory from "./components/NavbarCategory.jsx";
import Contact from "./pages/Contact.jsx";
=======
import ProductCheckout from "./product/checkout.jsx";
import CategoryPage from "./product/CategoryPage";
import Menu from "./components/Menu";
import NavbarCategory from "./components/NavbarCategory.jsx";
>>>>>>> a2af5e548c88d9c7b9f97c32c6cb3190ab6ee1d9

function MainRouter() {
  const location = useLocation();
  const hideNavbarOnRoutes = ["/cart", "/checkout", "/signin", "/signup"];
  const shouldShowNavbar = !hideNavbarOnRoutes.includes(location.pathname);
<<<<<<< HEAD

return (
    <div>
      <Menu />
      {shouldShowNavbar && <NavbarCategory />}
=======
  return (
    <div>
      <Menu />
      {shouldShowNavbar && <NavbarCategory />} {/* Conditional rendering */}
>>>>>>> a2af5e548c88d9c7b9f97c32c6cb3190ab6ee1d9

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
<<<<<<< HEAD
        <Route path="/contact" element={<Contact />} />

=======
>>>>>>> a2af5e548c88d9c7b9f97c32c6cb3190ab6ee1d9
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <ProductCart />
            </PrivateRoute>
          }
        />
<<<<<<< HEAD
=======
      </Routes>
      <Routes>
>>>>>>> a2af5e548c88d9c7b9f97c32c6cb3190ab6ee1d9
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <ProductCheckout />
            </PrivateRoute>
          }
        />
<<<<<<< HEAD
        <Route
          path="/confirmation"
          element={<Confirmation />}
        />
=======
>>>>>>> a2af5e548c88d9c7b9f97c32c6cb3190ab6ee1d9
      </Routes>
    </div>
  );
}

export default MainRouter;
