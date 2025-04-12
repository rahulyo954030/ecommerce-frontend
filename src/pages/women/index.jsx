import Layout from '@/components/layout';
import React, { useState } from 'react';
import categoriesData from '@/data/products.json';
import { useRouter } from 'next/router';
import { addToCart } from '@/utils/cartStorage';

/* --- SubCategoryBar Component --- */
function SubCategoryBar({ activeCategory, subCategories, onSelectCategory }) {
  return (
    <div className="flex justify-center space-x-6 mb-12">
      {['All', ...subCategories].map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`text-lg font-semibold transition-colors duration-300 focus:outline-none ${
            activeCategory === cat
              ? 'text-yellow-500 border-b-2 border-yellow-500'
              : 'text-gray-800 hover:text-yellow-500'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

/* --- ProductCard Component --- */
function ProductCard({ product }) {
  const router = useRouter();
  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="cursor-pointer bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        onClick={() => router.push(`/product/${product.id}`)}
        className="w-full h-56 object-cover transition-transform duration-300"
      />
      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{product.description}</p>
        <p className="text-xl text-yellow-500 font-bold mb-4">
          {product.price}
        </p>
        <button 
        onClick={handleAddToCart}
        className="mt-auto cursor-pointer bg-yellow-500 text-black py-2 px-4 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

/* --- ProductGrid Component --- */
function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {products.length === 0 && (
        <div className="col-span-full text-center text-gray-600">
          No products found in this category.
        </div>
      )}
    </div>
  );
}

/* --- MenProductsPage Component --- */
export default function WomenProductsPage() {
  // Get Men's category data from the JSON
  const menCategory = categoriesData.categories.find(
    (cat) => cat.name === 'Women'
  );

  // Build the list of sub-categories for Men from the JSON
  const menSubCategories = menCategory.subCategories.map((subCat) => subCat.name);

  // State for active sub-category (default is 'All')
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter products based on active sub-category.
  // If "All" is selected, flatten all products from each sub-category.
  const filteredProducts =
    activeCategory === 'All'
      ? menCategory.subCategories.flatMap((subCat) => subCat.products)
      : menCategory.subCategories.find(
          (subCat) => subCat.name === activeCategory
        )?.products || [];

  return (
    <Layout>
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Women's Collection
          </h1>
          {/* Sub-Header for Categories */}
          <SubCategoryBar
            activeCategory={activeCategory}
            subCategories={menSubCategories}
            onSelectCategory={setActiveCategory}
          />
          {/* Products Grid */}
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </Layout>
  );
}
