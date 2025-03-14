import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Payment from "./pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Auth from "./pages/Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe("pk_test_51R1JWTF8gCRpCmSjvMnXuPSyKzA4AS0JE4qAR8DNFPs8TsYSZLt1YfE05DeQ8tiI2vDiHmaCiLKgYC15Z3znALaI00OLsWSKJ3");
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/payment"
        element={
          <ProtectedRoute msg={"You must login to pay."} redirect={"/payment"}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute msg={"You must login to see your orders."} redirect={"/orders"}>
            <Elements stripe={stripePromise}>
              <Orders />
            </Elements>
          </ProtectedRoute>
        }
      />
      {/* Route for showing product results based on category */}
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
    </Routes>
  );
}

export default Routing;
