import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import PaymentForm from './components/Payment/PaymentForm';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/payment" element={<PaymentForm/>} />
        </Routes>
        <Hero/>
        <Programs/>
        <Reasons/>
        <Plans/>
        <Testimonials/>
        <Join/>
        <PaymentForm/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
