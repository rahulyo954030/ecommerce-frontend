'use client'; // for Next.js App Router (if you're using it)

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function SubHeader() {
  const pathname = usePathname();
  const router = useRouter();

  // Map categories to their paths
  const categories = [
    { label: 'MEN', path: '/men' },
    { label: 'WOMEN', path: '/women' },
    { label: 'KIDS', path: '/kids' },
  ];

  return (
    <section className="bg-gray-100 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-8">
        {categories.map((category) => {
          const isActive = pathname.startsWith(category.path);
          return (
            <button
              key={category.label}
              onClick={() => router.push(category.path)}
              className={`text-lg font-semibold transition-colors duration-300 
                ${isActive
                  ? 'text-yellow-500 border-b-2 border-yellow-500'
                  : 'text-gray-800 hover:text-yellow-500'} 
                focus:outline-none`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
