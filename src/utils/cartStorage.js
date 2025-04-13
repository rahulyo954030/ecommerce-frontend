// utils/cartStorage.js

// Get cart items from localStorage
export const getCartItems = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

// Add a product to the cart
export const addToCart = (product) => {
  const currentCart = getCartItems();

  // Ensure price is a number
  const numericPrice = typeof product.price === 'string'
    ? parseFloat(product.price.replace(/[^0-9.]/g, ''))
    : product.price;

  const existingItem = currentCart.find((item) => item.id === product.id);

  let updatedCart;

  if (existingItem) {
    updatedCart = currentCart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    updatedCart = [
      ...currentCart,
      { ...product, price: numericPrice, quantity: 1 },
    ];
  }

  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

// Update the quantity (+/-) of an item
export const updateQuantity = (productId, change) => {
  const cart = getCartItems();
  const updatedCart = cart.map((item) => {
    if (item.id === productId) {
      return { ...item, quantity: Math.max(1, item.quantity + change) };
    }
    return item;
  });
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return updatedCart;
};

// Remove an item from cart
export const removeFromCart = (productId) => {
  const cart = getCartItems();
  const updatedCart = cart.filter((item) => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return updatedCart;
};

// Clear the entire cart
export const clearCart = () => {
  localStorage.removeItem('cart');
};
