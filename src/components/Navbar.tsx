import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';
import LoginSignup from './LoginSignup';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onCategorySelect?: (category: string) => void;
  currentPage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onCategorySelect, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const { itemCount } = useCart();

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'footwear', name: 'Footwear' },
    { id: 'mens-clothing', name: "Men's Clothing" },
    { id: 'womens-clothing', name: "Women's Clothing" },
    { id: 'electronics', name: 'Electronics' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const handleCategoryClick = (categoryId: string) => {
    if (onCategorySelect) {
      onCategorySelect(categoryId);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="font-medium">🎉 Free Shipping on orders above ₹999 | Use code: FREESHIP</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              DealTree
            </div>
          </div>

          {/* Login/Signup Modal */}
          <LoginSignup open={isAuthOpen} onClose={() => setIsAuthOpen(false)} initialMode={authMode} />

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Login */}
            <button
              onClick={() => { setAuthMode('login'); setIsAuthOpen(true); }}
              className="hidden md:flex items-center justify-center space-x-2 px-3 py-1.5 rounded-md border border-transparent text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Login</span>
            </button>

            {/* Signup */}
            <button
              onClick={() => { setAuthMode('signup'); setIsAuthOpen(true); }}
              className="hidden md:flex items-center justify-center space-x-2 px-3 py-1.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none transition-colors"
            >
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Sign up</span>
            </button>

            {/* Wishlist */}
            <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors">
              <Heart className="h-6 w-6" />
              <span className="text-sm font-medium">Wishlist</span>
            </button>

            {/* Cart */}
            <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="hidden md:block text-sm font-medium">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-purple-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Categories - Desktop */}
        {currentPage === 'products' && (
          <div className="hidden md:flex items-center space-x-8 py-3 border-t border-gray-200">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {/* Mobile Search */}
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="px-4 py-2 space-y-2">
            <button onClick={() => { setAuthMode('login'); setIsAuthOpen(true); }} className="flex items-center justify-center space-x-2 w-full text-left py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
              <User className="h-5 w-5" />
              <span>Login</span>
            </button>
            <button onClick={() => { setAuthMode('signup'); setIsAuthOpen(true); }} className="w-full py-2 px-3 rounded-md bg-emerald-600 text-white flex items-center justify-center space-x-2 hover:bg-emerald-700 transition-colors">
              <User className="h-5 w-5" />
              <span>Sign up</span>
            </button>
            <button className="flex items-center space-x-2 w-full text-left py-2 text-gray-700 hover:text-purple-600">
              <Heart className="h-5 w-5" />
              <span>Wishlist</span>
            </button>
          </div>

          {/* Mobile Categories */}
          {currentPage === 'products' && (
            <div className="px-4 py-2 border-t border-gray-200">
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className="block w-full text-left py-2 text-gray-700 hover:text-purple-600 font-medium"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;