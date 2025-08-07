/**
 * Data file for Phones & Tablets category page
 * Contains all filter options, dropdown data, and type definitions
 * 
 * Backend Integration Notes:
 * - All data arrays should be replaced with API calls
 * - Consider pagination for large datasets (locations, brands, stores)
 * - Product counts should be real-time from database queries
 * - Image paths should come from CDN/media service
 * 
 * Database Schema Suggestions:
 * - locations: id, name, type, product_count, parent_id (for nested areas)
 * - stores: id, name, avatar_url, product_count, is_popular, created_at
 * - brands: id, name, product_count, is_popular, created_at
 * - products: id, brand_id, location_id, store_id, price, rating
 */

import IMAGES from "../../constants";

/**
 * Type Definitions for Filter Options
 * These interfaces define the structure of filter data
 */

/**
 * Location Option Interface
 * Represents a geographic location with hierarchical types
 * 
 * @interface LocationOption
 * @property {string} name - Display name of the location
 * @property {number | null} count - Number of products/listings in this location
 * @property {'all' | 'popular' | 'state'} type - Category type for grouping
 * 
 * Backend Notes:
 * - 'all' type represents global/nationwide option
 * - 'popular' type for frequently selected locations
 * - 'state' type for individual states/provinces
 * - count can be null for parent categories
 */
export interface LocationOption {
  name: string;
  count: number | null;
  type: 'all' | 'popular' | 'state';
}

/**
 * Lagos Area Interface
 * Represents sub-areas within Lagos State for nested dropdown
 * 
 * @interface LagosArea
 * @property {string} name - Area/district name
 * @property {number} count - Number of products/listings in this area
 * 
 * Backend Notes:
 * - This represents a many-to-one relationship (areas belong to Lagos)
 * - Should be fetched dynamically based on parent location selection
 * - Consider using recursive structure for deeper nesting
 */
export interface LagosArea {
  name: string;
  count: number;
}

/**
 * Store Option Interface
 * Represents a merchant/store with profile information
 * 
 * @interface StoreOption
 * @property {string} name - Store/merchant name
 * @property {number} count - Number of products from this store
 * @property {string} image - Avatar/logo image URL
 * @property {'popular' | 'all'} type - Category for grouping popular stores
 * 
 * Backend Notes:
 * - image should be a full URL from CDN/media service
 * - count should reflect real-time product inventory
 * - 'popular' stores could be based on sales volume, ratings, or admin selection
 * - Consider adding store_id, rating, verification_status
 */
export interface StoreOption {
  name: string;
  count: number;
  image: string;
  type: 'popular' | 'all';
}

/**
 * Brand Option Interface
 * Represents a product brand/manufacturer
 * 
 * @interface BrandOption
 * @property {string} name - Brand name
 * @property {number} count - Number of products from this brand
 * @property {'popular' | 'all'} type - Category for grouping popular brands
 * 
 * Backend Notes:
 * - count should reflect current product inventory
 * - 'popular' brands could be based on sales, search frequency, or admin curation
 * - Consider adding brand_id, logo_url, description, website
 */
export interface BrandOption {
  name: string;
  count: number;
  type: 'popular' | 'all';
}

/**
 * Nigerian States and Popular Locations Data
 * Main location filter options including popular states and all Nigerian states
 * 
 * Backend API Endpoint Suggestion: GET /api/locations
 * Query Parameters: ?type=state&popular=true
 * 
 * Database Query Example:
 * SELECT name, product_count as count, 
 *        CASE WHEN is_popular THEN 'popular' ELSE 'state' END as type
 * FROM locations 
 * WHERE type = 'state' 
 * ORDER BY is_popular DESC, product_count DESC
 */
export const locations: LocationOption[] = [
  // Global option - shows all products regardless of location
  { name: "All Locations", count: 5000, type: "all" },
  
  // Popular locations - most frequently searched/highest product count
  // These appear at the top of the dropdown for better UX
  { name: "Lagos State", count: 4329, type: "popular" },
  { name: "Oyo State", count: 1582, type: "popular" },
  { name: "FCT, Abuja", count: 1456, type: "popular" },
  { name: "Rivers State", count: 891, type: "popular" },
  
  // All Nigerian states - alphabetical or by product count
  // Consider pagination if list grows too long
  { name: "Abia State", count: 756, type: "state" },
  { name: "Adamawa State", count: 234, type: "state" },
  { name: "Akwa Ibom State", count: 567, type: "state" },
  { name: "Anambra State", count: 892, type: "state" },
  { name: "Bauchi State", count: 345, type: "state" },
  { name: "Bayelsa State", count: 198, type: "state" },
  { name: "Benue State", count: 423, type: "state" },
  { name: "Borno State", count: 176, type: "state" }
];

/**
 * Lagos State Sub-Areas Data
 * Detailed areas within Lagos State for nested location filtering
 * 
 * Backend API Endpoint Suggestion: GET /api/locations/lagos/areas
 * 
 * Database Query Example:
 * SELECT name, product_count as count
 * FROM locations 
 * WHERE parent_location_id = (SELECT id FROM locations WHERE name = 'Lagos State')
 * ORDER BY product_count DESC
 * 
 * Frontend Usage: Displayed when user clicks "Lagos State" in main dropdown
 */
export const lagosAreas: LagosArea[] = [
  // Special option to show all Lagos products
  { name: "All Lagos State", count: 4329 },
  
  // High-traffic commercial areas with most product listings
  { name: "Ajah", count: 1876 },
  { name: "Alimosho", count: 2145 },
  { name: "Ikeja", count: 3247 },
  { name: "Surulere", count: 1532 },
  
  // Other areas sorted by activity/product count
  { name: "Agege", count: 892 },
  { name: "Ajegunle", count: 1234 },
  { name: "Agbara Igbesan", count: 567 },
  { name: "Agboyi ketu", count: 743 },
  { name: "Badagry", count: 456 },
  { name: "Egbe", count: 321 },
  { name: "Ejigbo", count: 678 },
  { name: "Eko Atlantic", count: 234 }
];

/**
 * Store/Merchant Data with Profile Information
 * Represents individual stores/merchants selling on the platform
 * 
 * Backend API Endpoint Suggestion: GET /api/stores?category=phones-tablets
 * Query Parameters: ?popular=true&limit=20
 * 
 * Database Query Example:
 * SELECT s.name, COUNT(p.id) as count, s.avatar_url as image,
 *        CASE WHEN s.is_popular THEN 'popular' ELSE 'all' END as type
 * FROM stores s
 * LEFT JOIN products p ON s.id = p.store_id 
 * WHERE p.category_id = 'phones-tablets'
 * GROUP BY s.id
 * ORDER BY s.is_popular DESC, count DESC
 */
export const storeOptions: StoreOption[] = [
  // Popular stores - high sales volume or admin-curated
  { 
    name: "Sasha Stores", 
    count: 5000, 
    image: IMAGES.sashaImg, // Should be: "https://cdn.example.com/avatars/sasha.jpg"
    type: "popular" 
  },
  { 
    name: "Adam Stores", 
    count: 4329, 
    image: IMAGES.adam, 
    type: "popular" 
  },
  
  // Regular stores - sorted by product count or alphabetically
  { 
    name: "Tarra Stores", 
    count: 3876, 
    image: IMAGES.tarra, 
    type: "all" 
  },
  { 
    name: "Vee Stores", 
    count: 2145, 
    image: IMAGES.vee, 
    type: "all" 
  },
  { 
    name: "Adewale Stores", 
    count: 1987, 
    image: IMAGES.adewale, 
    type: "all" 
  },
  { 
    name: "Favour Stores", 
    count: 1654, 
    image: IMAGES.favour, 
    type: "all" 
  },
  { 
    name: "Scent Villa Stores", 
    count: 1234, 
    image: IMAGES.scent, 
    type: "all" 
  }
];

/**
 * Brand/Manufacturer Data
 * Popular phone and tablet brands available on the platform
 * 
 * Backend API Endpoint Suggestion: GET /api/brands?category=phones-tablets
 * Query Parameters: ?popular=true
 * 
 * Database Query Example:
 * SELECT b.name, COUNT(p.id) as count,
 *        CASE WHEN b.is_popular THEN 'popular' ELSE 'all' END as type
 * FROM brands b
 * LEFT JOIN products p ON b.id = p.brand_id 
 * WHERE p.category_id = 'phones-tablets'
 * GROUP BY b.id
 * ORDER BY b.is_popular DESC, count DESC
 */
export const brandOptions: BrandOption[] = [
  // Most popular brands - high search volume and sales
  { name: "iPhone", count: 2500, type: "popular" },
  { name: "Samsung", count: 2100, type: "popular" },
  { name: "Google Pixel", count: 890, type: "popular" },
  
  // All available brands - alphabetically sorted
  // Note: "Apple" and "iPhone" might be separate for filtering purposes
  { name: "Apple", count: 2650, type: "all" },
  { name: "Amazon", count: 1456, type: "all" },
  { name: "Asus", count: 678, type: "all" },
  { name: "BlackBerry", count: 234, type: "all" },
  { name: "Cubot", count: 345, type: "all" },
  { name: "Gionee", count: 567, type: "all" },
  { name: "HMD", count: 432, type: "all" },
  { name: "Huawei", count: 789, type: "all" },
  { name: "Infinix", count: 654, type: "all" },
  { name: "Itel", count: 123, type: "all" }
];

/**
 * Static Filter Options
 * These are typically static options that don't change frequently
 * Backend might still want to make these configurable via admin panel
 */

/**
 * Price Range Options
 * Predefined price brackets for filtering products
 * 
 * Backend Notes:
 * - Should be configurable via admin panel
 * - Consider currency localization (NGN, USD, etc.)
 * - Ranges should be based on actual product price distribution
 */
export const prices: string[] = [
  "All Prices",
  "Under $200",
  "$200 - $500", 
  "$500 - $800", 
  "$800 - $1200", 
  "Over $1200"
];

/**
 * Rating Filter Options
 * Star rating filters for product quality
 * 
 * Backend Notes:
 * - Should reflect actual rating distribution in database
 * - Consider adding review count alongside ratings
 * - Format: "4.5 Stars & Up (1,234 reviews)"
 */
export const ratings: string[] = [
  "All Ratings", 
  "5 Stars", 
  "4 Stars & Up", 
  "3 Stars & Up", 
  "2 Stars & Up"
];

/**
 * Sort Options
 * Different ways to order product results
 * 
 * Backend Notes:
 * - Each option should map to database ORDER BY clauses
 * - "Featured" could be based on promoted/sponsored products
 * - "Most Popular" could use sales_count or view_count
 * - Consider adding "Distance" for location-based sorting
 */
export const sortOptions: string[] = [
  "Featured",           // Admin curated or sponsored products first
  "Price: Low to High", // ORDER BY price ASC
  "Price: High to Low", // ORDER BY price DESC
  "Newest",            // ORDER BY created_at DESC
  "Most Popular",      // ORDER BY sales_count DESC or view_count DESC
  "Best Rating"        // ORDER BY average_rating DESC, review_count DESC
];

/**
 * Export all data for easy importing
 * Usage in component: import { locations, storeOptions, etc. } from './phonesTabletsData'
 * 
 * Note: Interfaces are already exported above, so they don't need to be re-exported here
 */
