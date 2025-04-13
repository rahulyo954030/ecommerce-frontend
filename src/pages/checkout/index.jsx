import React, { useEffect, useState } from 'react';
import { getCartItems, clearCart } from '../../utils/cartStorage';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';


import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);




const CheckoutPage = () => {
    const handleCheckout = async () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      
        const response = await fetch('/api/checkout_sessions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: cartItems }),
        });
      
        const session = await response.json();
      
        const stripe = await stripePromise;
        await stripe.redirectToCheckout({ sessionId: session.id });
      };
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: 'card',
  });
  const router = useRouter();

  useEffect(() => {
    setCart(getCartItems());
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'state', 'zip'];
    if (requiredFields.some((field) => !form[field])) {
      alert('Please fill all required fields.');
      return;
    }

    console.log('Order:', { ...form, items: cart });
    clearCart();
    alert('Order placed successfully!');
    router.push('/');
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <Layout>
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: Form */}
      <form onSubmit={handlePlaceOrder} className="space-y-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Checkout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded w-full"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded w-full"
          />
        </div>
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded w-full"
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          rows="3"
          value={form.address}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded w-full"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded w-full"
          />
          <input
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded w-full"
          />
          <input
            name="zip"
            placeholder="Zip Code"
            value={form.zip}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded w-full"
          />
        </div>
        <select
          name="paymentMethod"
          value={form.paymentMethod}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded w-full"
        >
          <option value="card">Credit/Debit Card</option>
          <option value="cod">Cash on Delivery</option>
          <option value="paypal">PayPal</option>
        </select>
        <button
        onClick={handleCheckout}
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded font-semibold text-lg"
        >
          Place Order
        </button>
      </form>

      {/* Right: Cart Summary */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="divide-y divide-gray-300 mb-4">
            {cart.map((item) => (
              <li key={item.id} className="py-2 flex justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <p className="font-medium">${item.price}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between text-lg font-semibold border-t pt-4">
          <span>Total:</span>
          <span>${calculateTotal()}</span>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default CheckoutPage;
