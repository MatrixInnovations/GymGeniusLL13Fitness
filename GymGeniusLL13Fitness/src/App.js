import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import PaymentForm from './components/Payment/PaymentForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('STRIPE_SECRET_KEY');

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            key="payment"
            path="/payment"
            element={
              <Elements key="paymentElements" stripe={stripePromise}>
                <PaymentForm key="paymentForm" />
              </Elements>
            }
          />
          <Route
            key="home"
            path="/"
            element={
              <>
                <Hero key="hero" />
                <Programs key="programs" />
                <Reasons key="reasons" />
                <Plans key="plans" />
                <Testimonials key="testimonials" />
                <Elements key="homeElements" stripe={stripePromise}>
                  <PaymentForm key="homePaymentForm" />
                </Elements>
                <Join key="join" />
                <Footer key="footer" />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
