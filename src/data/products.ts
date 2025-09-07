export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  brand: string;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: 'footwear',
    name: 'Footwear',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 1250
  },
  {
    id: 'mens-clothing',
    name: "Men's Clothing",
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 2100
  },
  {
    id: 'womens-clothing',
    name: "Women's Clothing",
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 3200
  },
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 850
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 950
  }
];

export const products: Product[] = [
  // Footwear
  {
    id: 1,
    name: 'Nike Air Max 270',
    price: 12999,
    originalPrice: 15999,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'footwear',
    rating: 4.5,
    reviews: 1250,
    brand: 'Nike',
    discount: 19
  },
  {
    id: 2,
    name: 'Adidas Ultraboost 22',
    price: 16999,
    originalPrice: 19999,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'footwear',
    rating: 4.7,
    reviews: 890,
    brand: 'Adidas',
    discount: 15
  },
  {
    id: 3,
    name: 'Puma RS-X3',
    price: 8999,
    originalPrice: 11999,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'footwear',
    rating: 4.3,
    reviews: 567,
    brand: 'Puma',
    discount: 25
  },
  {
    id: 4,
    name: 'Converse Chuck Taylor',
    price: 4999,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'footwear',
    rating: 4.2,
    reviews: 2100,
    brand: 'Converse'
  },

  // Men's Clothing
  {
    id: 5,
    name: 'Casual Cotton Shirt',
    price: 1299,
    originalPrice: 1999,
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'mens-clothing',
    rating: 4.1,
    reviews: 450,
    brand: 'H&M',
    discount: 35
  },
  {
    id: 6,
    name: 'Denim Jacket',
    price: 2499,
    originalPrice: 3499,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'mens-clothing',
    rating: 4.4,
    reviews: 320,
    brand: 'Levi\'s',
    discount: 29
  },
  {
    id: 7,
    name: 'Formal Blazer',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'mens-clothing',
    rating: 4.6,
    reviews: 180,
    brand: 'Raymond',
    discount: 38
  },
  {
    id: 8,
    name: 'Polo T-Shirt',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'mens-clothing',
    rating: 4.0,
    reviews: 890,
    brand: 'US Polo',
    discount: 31
  },

  // Women's Clothing
  {
    id: 9,
    name: 'Floral Summer Dress',
    price: 1899,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'womens-clothing',
    rating: 4.5,
    reviews: 670,
    brand: 'Zara',
    discount: 37
  },
  {
    id: 10,
    name: 'Elegant Blouse',
    price: 1299,
    originalPrice: 1899,
    image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'womens-clothing',
    rating: 4.3,
    reviews: 420,
    brand: 'Forever 21',
    discount: 32
  },
  {
    id: 11,
    name: 'Designer Saree',
    price: 3999,
    originalPrice: 5999,
    image: 'https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'womens-clothing',
    rating: 4.8,
    reviews: 290,
    brand: 'Fabindia',
    discount: 33
  },
  {
    id: 12,
    name: 'Casual Jeans',
    price: 1999,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'womens-clothing',
    rating: 4.2,
    reviews: 1100,
    brand: 'Levi\'s',
    discount: 33
  },

  // Electronics
  {
    id: 13,
    name: 'Wireless Headphones',
    price: 2999,
    originalPrice: 4999,
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'electronics',
    rating: 4.4,
    reviews: 1890,
    brand: 'Sony',
    discount: 40
  },
  {
    id: 14,
    name: 'Smartphone',
    price: 24999,
    originalPrice: 29999,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'electronics',
    rating: 4.6,
    reviews: 3200,
    brand: 'Samsung',
    discount: 17
  },
  {
    id: 15,
    name: 'Laptop',
    price: 54999,
    originalPrice: 64999,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'electronics',
    rating: 4.5,
    reviews: 890,
    brand: 'HP',
    discount: 15
  },
  {
    id: 16,
    name: 'Smart Watch',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'electronics',
    rating: 4.3,
    reviews: 1450,
    brand: 'Apple',
    discount: 31
  },

  // Accessories
  {
    id: 17,
    name: 'Leather Handbag',
    price: 2999,
    originalPrice: 4499,
    image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'accessories',
    rating: 4.4,
    reviews: 560,
    brand: 'Coach',
    discount: 33
  },
  {
    id: 18,
    name: 'Sunglasses',
    price: 1499,
    originalPrice: 2499,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'accessories',
    rating: 4.2,
    reviews: 890,
    brand: 'Ray-Ban',
    discount: 40
  },
  {
    id: 19,
    name: 'Gold Necklace',
    price: 15999,
    originalPrice: 19999,
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'accessories',
    rating: 4.7,
    reviews: 230,
    brand: 'Tanishq',
    discount: 20
  },
  {
    id: 20,
    name: 'Leather Wallet',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'accessories',
    rating: 4.1,
    reviews: 1200,
    brand: 'Fossil',
    discount: 31
  }
];