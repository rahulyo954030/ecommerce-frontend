import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import categoriesData from '@/data/products.json';
import Layout from '@/components/layout';
import { addToCart } from '@/utils/cartStorage';

const flattenProducts = (categories) => {
  const flat = [];
  categories.forEach((category) => {
    category.subCategories.forEach((subCategory) => {
      subCategory.products.forEach((product) => {
        flat.push({
          ...product,
          category: category.name,
          subCategory: subCategory.name,
        });
      });
    });
  });
  return flat;
};

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  useEffect(() => {
    if (id) {
      const allProducts = flattenProducts(categoriesData.categories);
      const found = allProducts.find((p) => p.id === id);
      setProduct(found || null);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-gray-600 text-lg">
        Loading product...
      </div>
    );
  }

  return (
    <Layout>
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="w-full h-full">
          <div className="w-full h-[500px] bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-blue-700 text-2xl font-semibold mb-4">{product.price}</p>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-medium">Category:</span> {product.category} / {product.subCategory}
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description || 'This product does not have a detailed description yet.'}
          </p>

          <div className="flex gap-4">
            <button 
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition">
              Add to Cart
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-xl transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
}
