import React from 'react';
import Slider from 'react-slick';

const offers = [
  {
    title: 'Up to 50% off on Electronics',
    description: 'Explore the best deals on laptops, phones, and more!',
    buttonLabel: 'Shop Now',
    image: 'https://t4.ftcdn.net/jpg/03/67/56/73/360_F_367567354_JnT96QOWu8rugfLdYaESxWkqaIOUja8t.jpg',
  },
  {
    title: 'Summer Sale - Save on Fashion!',
    description: 'Up to 40% off on select clothing and accessories.',
    buttonLabel: 'Shop Fashion',
    image: 'https://t4.ftcdn.net/jpg/03/67/56/59/360_F_367565991_ZXtOkDHwMs76qBwbNFMz0NnBOvWhzTYP.jpg',
  },
  {
    title: 'Limited Time Deals on Home Appliances',
    description: 'Huge discounts on refrigerators, washers, and more!',
    buttonLabel: 'Shop Appliances',
    image: 'https://t3.ftcdn.net/jpg/03/67/56/64/360_F_367566423_XT7p8nSweLhTPMBZkqaDmQXhXujeS4Gq.jpg',
  },
];

export default function HomeHeroSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="w-full">
      <Slider {...settings}>
        {offers.map((offer, index) => (
          <div key={index}>
            <div
              className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[70vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${offer.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-6">
                <div className="text-white z-10 max-w-xl sm:max-w-2xl space-y-4">
                  <h2 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight">
                    {offer.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg">{offer.description}</p>
                  <button className="bg-yellow-400 text-black px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
                    {offer.buttonLabel}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Footer Promo Text */}
      <div className="text-center bg-white py-3 shadow-sm -mt-2">
        <p className="text-black text-sm sm:text-base md:text-lg font-medium">
          Exclusive Offers Await! Don’t Miss Out!
        </p>
      </div>
    </section>
  );
}
