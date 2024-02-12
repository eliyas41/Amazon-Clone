import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing"
import Auth from "./pages/Auth/Auth"
import Payment from "./pages/Payment/Payment"
import Orders from "./pages/Orders/Orders"
import Cart from "./pages/Cart/Cart"
import Results from './pages/Results/Result';
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

const Routing = () => {
  const stripePromise = loadStripe('pk_test_51Oh9ZcCogleGohEbrrRXDP4X87g7JI85RtFZbrN1QvXCdZT8HOVvjA6lWlVuYwmSHbBohfXP7NiEwpxZC38OKbUp006KWwrs3L')

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/payments' element={
          <ProtectedRoute msg={"You must log in to pay !"} redirect={"/payments"}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        } />
        <Route path='/orders' element={
          <ProtectedRoute msg={"You must log in to access orders !"} redirect={"/orders"}>
            <Orders />
          </ProtectedRoute>
        } />
        <Route path='/category/:categoryName' element={<Results />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default Routing;