import React from 'react';
import { updateQuantity, removeFromCart } from '@/utils/cartStorage';

const CartItem = ({ item, setCart }) => {
  const handleQuantityChange = (change) => {
    const updatedCart = updateQuantity(item.id, change);
    setCart(updatedCart);
  };

  const handleRemove = () => {
    const updatedCart = removeFromCart(item.id);
    setCart(updatedCart);
  };

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
        <div>
          <h2 className="font-semibold">{item.name}</h2>
          <p className="text-sm text-gray-500">Price: {item.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={() => handleQuantityChange(-1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
        <span>{item.quantity}</span>
        <button onClick={() => handleQuantityChange(1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
        <button onClick={handleRemove} className="ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
