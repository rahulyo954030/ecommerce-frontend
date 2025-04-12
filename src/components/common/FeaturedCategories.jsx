import React from 'react';

const categories = [
  {
    title: 'Electronics',
    image: 'https://t4.ftcdn.net/jpg/05/05/40/26/360_F_505402647_gqFB3soocHaTQ2xgUdYbpJeIB3hJzoj2.jpg',
  },
  {
    title: 'Fashion',
    image: 'https://t4.ftcdn.net/jpg/03/61/79/88/360_F_361798827_s1Cskn0E4cJ0U5UyHRRyD6w0IPNa6gOe.jpg',
  },
  {
    title: 'Home Appliances',
    image: 'https://t4.ftcdn.net/jpg/04/94/60/53/360_F_494605377_2vOfJX9BRV6AYFaY5TOonYffRYsNVPAB.jpg',
  },
  {
    title: 'Beauty & Wellness',
    image: 'https://t4.ftcdn.net/jpg/03/33/61/62/360_F_333616228_HuvzJjtbjrwBRrX95Ko7myoazkcrWLnS.jpg',
  },
];

export default function FeaturedCategories() {
  return (
    <section className="w-full py-14 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Featured Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl shadow-md group hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4">
                <h3 className="text-white text-lg font-semibold">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
