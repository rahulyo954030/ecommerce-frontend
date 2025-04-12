import React from 'react';

// Sample product data with a short description field
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    image: 'https://source.unsplash.com/featured/?headphones',
    price: '$199.99',
    shortDesc: 'Experience premium sound quality with deep bass.',
    rating: 4.5,
    reviews: 125,
  },
  {
    id: 2,
    name: 'Smart Watch',
    image: 'https://source.unsplash.com/featured/?smartwatch',
    price: '$249.99',
    shortDesc: 'Stay connected and track your fitness in style.',
    rating: 4,
    reviews: 89,
  },
  {
    id: 3,
    name: 'Portable Charger',
    image: 'https://source.unsplash.com/featured/?charger',
    price: '$39.99',
    shortDesc: 'Compact, powerful, and perfect for on-the-go.',
    rating: 4.2,
    reviews: 200,
  },
  {
    id: 4,
    name: 'Noise Cancelling Earbuds',
    image: 'https://source.unsplash.com/featured/?earbuds',
    price: '$129.99',
    shortDesc: 'Immerse yourself in music with active noise cancellation.',
    rating: 4.3,
    reviews: 175,
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    image: 'https://source.unsplash.com/featured/?speaker',
    price: '$59.99',
    shortDesc: 'Portable sound with powerful bass for any occasion.',
    rating: 4.4,
    reviews: 150,
  },
  {
    id: 6,
    name: 'Laptop Stand',
    image: 'https://source.unsplash.com/featured/?laptop,stand',
    price: '$29.99',
    shortDesc: 'Ergonomic design to boost your productivity.',
    rating: 4,
    reviews: 95,
  },
];

export default function PopularProducts() {
  return (
    <section className="w-full py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Popular Products
        </h2>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform transform  hover:shadow-xl"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover transition-transform duration-300"
              />
              {/* Product Details */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{product.shortDesc}</p>
                <p className="text-xl text-yellow-500 font-bold mb-2">
                  {product.price}
                </p>
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, index) => {
                    if (index < Math.floor(product.rating)) {
                      return (
                        <span key={index} className="text-yellow-500">
                          &#9733;
                        </span>
                      );
                    } else {
                      return (
                        <span key={index} className="text-gray-300">
                          &#9733;
                        </span>
                      );
                    }
                  })}
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.reviews} reviews)
                  </span>
                </div>
                {/* Yellow-Themed Button */}
                <button className="mt-auto cursor-pointer bg-yellow-500 text-black py-2 px-4 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
