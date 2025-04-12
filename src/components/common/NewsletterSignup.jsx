import React from 'react';

export default function NewsletterSignup() {
  return (
    <section className="w-full py-20 bg-gray-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Stay Updated with Exclusive Deals
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          Join our newsletter and receive the latest offers, new arrivals, and curated deals straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-1/2 text-white px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors duration-300"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black px-8 py-4 rounded-full cursor-pointer font-semibold hover:bg-yellow-600 transition-colors duration-300"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}
