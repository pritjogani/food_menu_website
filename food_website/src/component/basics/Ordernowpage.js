import React, { useState } from 'react';


const Ordernowpage = () =>  {
    const [order, setOrder] = useState({
        name: '',
        email: '',
        foodItem: '',
        quantity: 1,
        specialRequest: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({
          ...order,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle order submission goes here
        console.log('Food Order Submitted', order);
        alert('Your food order has been placed!');
      };

  return (<>
    <div className="food-order-container">
      <h1>Order Your Favorite Food</h1>
      <form className="food-order-form" onSubmit={handleSubmit}>
        {/* Name Field */}
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={order.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
        />

        {/* Email Field */}
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={order.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />

        {/* Food Item Selection */}
  

        {/* Quantity Field */}
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={order.quantity}
          onChange={handleChange}
          min="1"
          required
        />

        {/* Special Requests Field */}
        <label htmlFor="specialRequest">Special Requests:</label>
        <textarea
          id="specialRequest"
          name="specialRequest"
          value={order.specialRequest}
          onChange={handleChange}
          placeholder="Any special requests (e.g., extra cheese, no onions)"
        />

        {/* Submit Button */}
        <button type="submit" className="order-btn">
          Place Order
        </button>
      </form>
    </div>
  </>);
}

export default Ordernowpage;
