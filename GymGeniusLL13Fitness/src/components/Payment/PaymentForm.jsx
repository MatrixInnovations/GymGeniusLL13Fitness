import "./PaymentForm.css";
import React from 'react';

function PaymentForm() {
  return (
    <form className="payment-card">
      <h1 className="payment-card__title">Card details</h1>
      <div className="payment-card__field payment-card__field--large">
        <label htmlFor="card-number" className="payment-card__field-label">Card number</label>
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
          <label htmlFor="card-expiry" className="payment-card__field-label">Expiry date</label>
          <input 
            className="payment-card__input" 
            inputMode="numeric" 
            id="card-expiry" 
            placeholder="xx/xx" 
          />
        </div>
        <div className="payment-card__field payment-card__field--small">
          <label htmlFor="card-ccv" className="payment-card__field-label">CCV</label>
          <input 
            className="payment-card__input" 
            inputMode="numeric" 
            id="card-ccv" 
            placeholder="xxx" 
          />
        </div>
      </div>
    </form>
  );
}

export default PaymentForm;
