import React from 'react';
import Slider from 'react-slick';
import { FaStar, FaRegStar } from 'react-icons/fa';

// Sample review data with a longer (bigger) review text
const reviews = [
  {
    customerName: "Alex Johnson",
    product: "Wireless Headphones",
    review:
      "I absolutely love these headphones! The sound quality is amazing and the battery life is unbeatable. The deep bass and crisp treble make for an immersive experience. They exceeded all my expectations and I can't imagine my day-to-day without them. Truly a must-have for any music lover!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    customerName: "Samantha Lee",
    product: "Smart Watch",
    review:
      "This smart watch is a game-changer. It not only looks sleek and modern but also tracks my fitness and daily activities accurately. The touchscreen is responsive and the customizable watch faces make it very personal. I highly recommend it for anyone looking to upgrade their tech.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    customerName: "Michael Brown",
    product: "Portable Charger",
    review:
      "A must-have accessory for travelers! The charger works quickly and reliably even after multiple uses. Its compact design fits easily in my pocket while still delivering powerful charging performance. I have used it on several long trips and have never been disappointed.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    customerName: "Emily Davis",
    product: "Noise Cancelling Earbuds",
    review:
      "These earbuds are fantastic for daily commutes. The noise cancellation works wonderfully in crowded environments, and the sound is perfectly balanced. They are comfortable for long hours and make every journey more enjoyable. I couldn’t be happier with my purchase!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/40.jpg",
  },
];

export default function Testimonials() {
  // Settings for react-slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Customer Reviews
        </h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start transition-transform transform"
            >
              {/* Customer Image on the Left */}
              <div className="flex-shrink-0 md:mr-8 mb-6 md:mb-0">
                <img
                  src={review.image}
                  alt={review.customerName}
                  className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400 shadow-lg transition-transform duration-300"
                />
              </div>

              {/* Review Content on the Right */}
              <div className="flex-grow text-center md:text-left">
                <p className="text-2xl md:text-3xl font-semibold text-gray-700 italic mb-4">
                  "{review.review}"
                </p>
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) =>
                    i < review.rating ? (
                      <FaStar key={i} className="text-yellow-500" />
                    ) : (
                      <FaRegStar key={i} className="text-yellow-500" />
                    )
                  )}
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  {review.customerName}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Purchased: {review.product} ·{" "}
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs">
                    Verified Purchase
                  </span>
                </p>
                <button className="mt-2 cursor-pointer inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
