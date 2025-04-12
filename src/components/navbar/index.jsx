import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FaShoppingCart,
  FaUserCircle,
  FaHeart,
  FaBars,
  FaTimes,
  FaBoxOpen,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaSearch,
} from 'react-icons/fa';
import categoriesData from '@/data/products.json';

const flattenProducts = (categories) => {
  const flatProducts = [];
  categories.forEach((category) => {
    category.subCategories.forEach((subCategory) => {
      subCategory.products.forEach((product) => {
        flatProducts.push({
          ...product,
          category: category.name,
          subCategory: subCategory.name,
        });
      });
    });
  });
  return flatProducts;
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const router = useRouter();
  const isSignedIn = true; // Replace with your logic

  const allProducts = flattenProducts(categoriesData.categories);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredResults([]);
      return;
    }
    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(results);
  }, [searchTerm]);

  const isActive = (path) => router.pathname === path;

  const toggleProfileDropdown = () => setProfileDropdownOpen(!profileDropdownOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
        {/* Logo + Mobile Menu Button */}
        <div className="w-full md:w-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">ShopEasy</Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-xl text-gray-700"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-96 relative">
          <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FaSearch className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none bg-transparent text-sm text-gray-800"
            />
          </div>

          {searchTerm && (
            <div className="absolute w-full bg-white rounded-xl shadow-xl mt-2 z-50 max-h-72 overflow-auto border border-gray-200">
              {filteredResults.length > 0 ? (
                filteredResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => router.push(`/product/${product.id}`)}
                    className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer transition"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded-full object-cover mr-4 border"
                    />
                    <div className="text-sm text-gray-800">
                      <div className="font-medium">{product.name}</div>
                      <div className="text-blue-600 font-semibold">{product.price}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-4 py-3 text-sm text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 text-base relative">
          <div className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
              onClick={toggleProfileDropdown}
            >
              <FaUserCircle size={20} />
              <span>Profile</span>
            </div>
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                <Link href="/account" className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                  <FaUser /> My Account
                </Link>
                <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                  <FaBoxOpen /> Orders
                </Link>
                <Link href="/wishlist" className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                  <FaHeart /> Wishlist
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/cart"
            className={`flex items-center gap-1 hover:text-blue-600 ${isActive('/cart') ? 'text-blue-600 font-semibold' : ''}`}
          >
            <FaShoppingCart /> Cart
          </Link>

          {isSignedIn ? (
            <button className="flex items-center gap-1 hover:text-blue-600">
              <FaSignOutAlt /> Sign Out
            </button>
          ) : (
            <Link
              href="/login"
              className={`flex items-center gap-1 hover:text-blue-600 ${isActive('/login') ? 'text-blue-600 font-semibold' : ''}`}
            >
              <FaSignInAlt /> Sign In
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-gray-700">
          <div className="pt-2 border-t space-y-2">
            <Link href="/account" className="flex items-center gap-2"><FaUser /> My Account</Link>
            <Link href="/orders" className="flex items-center gap-2"><FaBoxOpen /> Orders</Link>
            <Link href="/wishlist" className="flex items-center gap-2"><FaHeart /> Wishlist</Link>
            <Link href="/cart" className="flex items-center gap-2"><FaShoppingCart /> Cart</Link>
            {isSignedIn ? (
              <div className="flex items-center gap-2"><FaSignOutAlt /> Sign Out</div>
            ) : (
              <Link href="/login" className="flex items-center gap-2"><FaSignInAlt /> Sign In</Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
