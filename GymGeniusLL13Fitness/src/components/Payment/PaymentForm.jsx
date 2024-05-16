// PaymentForm.jsx
import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './PaymentForm.css';

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log('PaymentMethod created:', paymentMethod);
      // You can now send the paymentMethod.id to your server for further processing
    }
  };

  return (
    <form className="payment-card" onSubmit={handleSubmit}>
      <h1 className="payment-card__title">Card details</h1>
      <div className="payment-card__field payment-card__field--large">
        <label htmlFor="card-name" className="payment-card__field-label">
          Cardholder Name
        </label>
        <input
          className="payment-card__input payment-card__input--large"
          id="card-name"
          type="text"
          placeholder="First   Last"
        />
      </div>
      <div className="payment-card__field payment-card__field--large">
        <label htmlFor="card-number" className="payment-card__field-label">
          Card number
        </label>
        <input
          className="payment-card__input payment-card__input--large"
          id="card-number"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          autoComplete="cc-number"
          maxLength="19"
          placeholder="xxxx xxxx xxxx xxxx"
        />
      </div>
      <div className="payment-card__extra-fields">
        <div className="payment-card__field payment-card__field--small">
          <label htmlFor="card-expiry" className="payment-card__field-label">
            Expiry date
          </label>
          <input
            className="payment-card__input"
            inputMode="numeric"
            id="card-expiry"
            placeholder="xx/xx"
          />
        </div>
        <div className="payment-card__field payment-card__field--small">
          <label htmlFor="card-ccv" className="payment-card__field-label">
            CCV
          </label>
          <input
            className="payment-card__input"
            inputMode="numeric"
            id="card-ccv"
            placeholder="xxx"
          />
        </div>
      </div>
      <button type="submit" className="payment-card__button" disabled={!stripe}>
        Submit
      </button>
    </form>
  );
}

export default PaymentForm;
