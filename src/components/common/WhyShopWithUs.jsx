import React from 'react';
import { FaShippingFast, FaLock, FaHeadset, FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    title: 'Fast & Free Delivery',
    description: 'Your order, delivered quickly with no shipping fees.',
    icon: <FaShippingFast className="text-yellow-400 text-5xl" />,
  },
  {
    title: 'Secure Payments',
    description: 'Checkout with full confidence. Your info is protected.',
    icon: <FaLock className="text-yellow-400 text-5xl" />,
  },
  {
    title: '24/7 Support',
    description: 'Need help? Our team is always just a click away.',
    icon: <FaHeadset className="text-yellow-400 text-5xl" />,
  },
  {
    title: 'Trusted Quality',
    description: 'Only the best. Carefully curated premium products.',
    icon: <FaCheckCircle className="text-yellow-400 text-5xl" />,
  },
];

export default function WhyShopWithUs() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-14 tracking-tight">
          Why Shop With Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="cursor-pointer flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-8 space-y-4"
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
