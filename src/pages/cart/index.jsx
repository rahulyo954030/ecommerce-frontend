import React, { useEffect, useState } from 'react';
import { getCartItems, clearCart } from '@/utils/cartStorage';
import CartItem from '@/components/cart/CartItem'; // Make sure this is the correct path
import Layout from '@/components/layout';
import { useRouter } from 'next/router';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const router = useRouter()

  useEffect(() => {
    // Retrieve cart items from localStorage when the component is mounted
    const storedCart = getCartItems();
    setCart(storedCart);
  }, []);

  const handleClearCart = () => {
    clearCart();
    setCart([]);
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout with the following items:", cart);
    router.push('/checkout')
    // Add your checkout logic here (e.g., redirect to payment gateway or API call)
  };

  const totalAmount = cart.reduce((total, item) => {
    // Ensure the price is a string, then remove the dollar sign and convert to float
    const price = parseFloat(String(item.price).replace('$', '').trim());
    return total + price * item.quantity;
  }, 0);

  return (
    <Layout>
    <div className="container mx-auto p-4 py-20">
      <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} setCart={setCart} />
          ))}

          <div className="mt-4 flex justify-between">
            <button
              onClick={handleClearCart}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Clear Cart
            </button>

            <div className="text-right">
              <p className="font-semibold">
                Total: ${totalAmount.toFixed(2)}
              </p>
              <button
                onClick={handleCheckout}
                className="mt-2 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default CartPage;
