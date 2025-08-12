// Search utilities and services
import { Store } from '../pages/stores/storesData';

export interface SearchResult {
  type: 'product' | 'store';
  id: string;
  title: string;
  image: string;
  description: string;
  price?: string;
  originalPrice?: string;
  store?: string;
  category?: string;
  rating?: number;
}

export interface SearchFilters {
  location: string;
  store: string;
  category: string;
  review: string;
  priceRange?: [number, number];
}

export interface RecentSearch {
  id: string;
  text: string;
  timestamp: Date;
  type: 'text' | 'image';
  imageUrl?: string;
}

// Utility to save recent searches to localStorage
export const saveRecentSearch = (search: RecentSearch): RecentSearch[] => {
  const existing = getRecentSearches();
  const filtered = existing.filter(s => s.text !== search.text);
  const updated = [search, ...filtered].slice(0, 10);
  localStorage.setItem('recentSearches', JSON.stringify(updated));
  return updated;
};

// Utility to get recent searches from localStorage
export const getRecentSearches = (): RecentSearch[] => {
  try {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      return JSON.parse(saved).map((s: any) => ({
        ...s,
        timestamp: new Date(s.timestamp)
      }));
    }
  } catch (error) {
    console.error('Error loading recent searches:', error);
  }
  
  // Return default searches if none exist
  return [
    {
      id: '1',
      text: 'Iphone 15',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      type: 'text'
    },
    {
      id: '2', 
      text: 'Womens dress',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      type: 'text'
    },
    {
      id: '3',
      text: 'Hisensense television', 
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      type: 'text'
    }
  ];
};

// Utility to remove a recent search
export const removeRecentSearch = (id: string): RecentSearch[] => {
  const existing = getRecentSearches();
  const updated = existing.filter(s => s.id !== id);
  localStorage.setItem('recentSearches', JSON.stringify(updated));
  return updated;
};

// Mock search function - replace with actual API calls
export const searchProducts = async (
  query: string, 
  filters?: SearchFilters
): Promise<SearchResult[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock data - replace with actual API data
  const mockResults: SearchResult[] = [
    {
      type: 'product',
      id: '1',
      title: 'Dell Inspiron Laptop',
      image: '/top1.png',
      description: 'High-performance laptop for work and gaming',
      price: '₦2,000,000',
      originalPrice: '₦2,500,000',
      store: 'Sasha Stores',
      category: 'Electronics',
      rating: 4.5
    },
    {
      type: 'product',
      id: '2',
      title: 'Samsung Galaxy Phone',
      image: '/top2.png',
      description: 'Latest Samsung smartphone with advanced features',
      price: '₦800,000',
      originalPrice: '₦1,000,000',
      store: 'Sasha Stores',
      category: 'Electronics',
      rating: 4.8
    },
    {
      type: 'product',
      id: '3',
      title: 'iPhone 15',
      image: '/top4.png',
      description: 'Latest iPhone model with advanced features',
      price: '₦1,200,000',
      originalPrice: '₦1,500,000',
      store: 'Sasha Stores', 
      category: 'Electronics',
      rating: 4.9
    },
    {
      type: 'product',
      id: '4',
      title: 'Womens Dress',
      image: '/top1.png',
      description: 'Elegant dress for special occasions',
      price: '₦35,000',
      originalPrice: '₦50,000',
      store: 'Sasha Stores',
      category: 'Fashion',
      rating: 4.2
    },
    {
      type: 'product',
      id: '5',
      title: 'Hisensense Television',
      image: '/top3.png',
      description: 'Smart TV with 4K display and streaming capabilities',
      price: '₦180,000',
      originalPrice: '₦250,000',
      store: 'Sasha Stores',
      category: 'Electronics',
      rating: 4.3
    }
  ];

  // Filter results based on query
  const filtered = mockResults.filter(result =>
    result.title.toLowerCase().includes(query.toLowerCase()) ||
    result.description.toLowerCase().includes(query.toLowerCase()) ||
    result.category?.toLowerCase().includes(query.toLowerCase())
  );

  return filtered;
};

// Mock image search function
export const searchByImage = async (imageFile: File): Promise<SearchResult[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock image analysis - in reality, this would use AI/ML services
  console.log('Analyzing image:', imageFile.name);
  
  // Return some mock results based on "image analysis"
  return [
    {
      type: 'product',
      id: 'img-1',
      title: 'Similar Product Found',
      image: '/top2.png',
      description: 'Product similar to your uploaded image',
      price: '₦150,000',
      originalPrice: '₦200,000',
      store: 'Sasha Stores',
      category: 'Electronics',
      rating: 4.4
    }
  ];
};

export default {
  searchProducts,
  searchByImage,
  saveRecentSearch,
  getRecentSearches,
  removeRecentSearch
};
