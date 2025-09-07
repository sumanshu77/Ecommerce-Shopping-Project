import React from 'react';
import { Category } from '../data/products';

interface CategoryCardProps {
  category: Category;
  onClick: (categoryId: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <div
      onClick={() => onClick(category.id)}
      className="relative overflow-hidden rounded-xl cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      {/* Background Image */}
      <div className="aspect-square relative">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
            {category.name}
          </h3>
          <p className="text-white/90 text-sm mb-3 transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-4px]">
            {category.productCount}+ Products
          </p>
          
          {/* Shop Now Button */}
          <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-4px] hover:bg-gray-100 w-fit">
            Shop Now
          </button>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30" />
      </div>
    </div>
  );
};

export default CategoryCard;