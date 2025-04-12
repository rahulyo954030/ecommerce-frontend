// utils/cartStorage.js

export const getCartItems = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

export const addToCart = (product) => {
  const currentCart = getCartItems();
  const exists = currentCart.find((item) => item.id === product.id);

  const numericPrice = typeof product.price === 'string'
    ? parseFloat(product.price.replace('$', ''))
    : product.price;

  let updatedCart;
  if (exists) {
    updatedCart = currentCart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    updatedCart = [...currentCart, { ...product, price: numericPrice, quantity: 1 }];
  }

  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

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

export const removeFromCart = (productId) => {
  const cart = getCartItems();
  const updatedCart = cart.filter((item) => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return updatedCart;
};

export const clearCart = () => {
  localStorage.removeItem('cart');
};
