import {
    FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
  } from 'react-icons/fa';
  
  export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 pt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">About ShopEasy</h3>
            <p>
              ShopEasy is your all-in-one marketplace for electronics, fashion, home & more. We bring you fast delivery and easy returns.
            </p>
          </div>
  
          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Shipping Info</a></li>
            </ul>
          </div>
  
          {/* Policies */}
          <div>
            <h4 className="font-semibold text-white mb-3">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
  
          {/* Newsletter & Social */}
          <div>
            <h4 className="font-semibold text-white mb-3">Join Our Newsletter</h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-white mb-3"
            />
            <div className="flex gap-4 text-xl">
              <FaFacebook className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaLinkedin className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
  
        <div className="text-center text-sm border-t border-gray-700 py-8">
          &copy; {new Date().getFullYear()} ShopEasy. All Rights Reserved.
        </div>
      </footer>
    );
  }
  