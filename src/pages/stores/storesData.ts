import IMAGES from "../../constants";

export interface Store {
  id: string;
  name: string;
  image: string;
  avatar: string;
  rating: number;
  categories: string[];
  location: string;
  isElectronics: boolean;
  isPhysical: boolean;
}

export const storesData: Store[] = [
  {
    id: "1",
    name: "Sasha Stores",
    image: IMAGES.coverSasha,
    avatar: IMAGES.sasha,
    rating: 4.5,
    categories: ["Electronics", "Physical"],
    location: "Lagos, Nigeria",
    isElectronics: true,
    isPhysical: true,
  },
  {
    id: "2",
    name: "Vee Stores",
    image: IMAGES.coverVee,
    avatar: IMAGES.tarra,
    rating: 4.0,
    categories: ["Electronics", "Physical"],
    location: "Lagos, Nigeria",
    isElectronics: true,
    isPhysical: true,
  },
  {
    id: "3",
    name: "Adam Stores",
    image: IMAGES.coverAdam,
    avatar: IMAGES.vee,
    rating: 4.5,
    categories: ["Electronics", "Physical"],
    location: "Lagos, Nigeria",
    isElectronics: true,
    isPhysical: true,
  },
  {
    id: "4",
    name: "Scent Villa Stores",
    image: IMAGES.coverScent,
    avatar: IMAGES.scentVilla,
    rating: 3.5,
    categories: ["Electronics", "Physical"],
    location: "Lagos, Nigeria",
    isElectronics: true,
    isPhysical: true,
  },
  {
    id: "5",
    name: "Caremal Stores",
    image: IMAGES.coverCaremal,
    avatar: IMAGES.caremal,
    rating: 4.5,
    categories: ["Electronics", "Physical"],
    location: "Lagos, Nigeria",
    isElectronics: true,
    isPhysical: true,
  },
  {
    id: "6",
    name: "Lovina Stores",
    image: IMAGES.coverLovina,
    avatar: IMAGES.lovina,
    rating: 4.8,
    categories: ["Electronics", "Physical"],
    location: "Lagos, Nigeria",
    isElectronics: true,
    isPhysical: true,
  },
  {
    id: "7",
    name: "Scent Villa Stores",
    image: IMAGES.coverScent,
    avatar: IMAGES.scentVilla,
    rating: 4.3,
    categories: ["Electronics", "Physical"],
    location: "Lagos, Nigeria",
    isElectronics: true,
    isPhysical: true,
  },
  {
    id: "8",
    name: "Vee Stores",
    image: IMAGES.coverVee,
    avatar: IMAGES.tarra,
    rating: 4.0,
    categories: ["Electronics", "Physical"],
    location: "Lagos, Nigeria",
    isElectronics: true,
    isPhysical: true,
  },
  {
    id: "9",
    name: "Adam Stores",
    image: IMAGES.coverAdam,
    avatar: IMAGES.vee,
    rating: 4.2,
    categories: ["Electronics", "Physical"],
    location: "Lagos, Nigeria",
    isElectronics: true,
    isPhysical: true,
  },
  {
    id: "10",
    name: "Vee Stores",
    image: IMAGES.coverVee,
    avatar: IMAGES.tarra,
    rating: 4.1,
    categories: ["Electronics", "Physical"],
    location: "Lagos, Nigeria",
    isElectronics: true,
    isPhysical: true,
  }
];

// Helper function to format rating
export const formatRating = (rating: number): string => {
  return rating.toFixed(1);
};

// Filter options
export const locationOptions = [
  { value: "", label: "Location" },
  { value: "lagos", label: "Lagos" },
  { value: "abuja", label: "Abuja" },
  { value: "kano", label: "Kano" },
];

export const categoryOptions = [
  { value: "", label: "Category" },
  { value: "electronics", label: "Electronics" },
  { value: "fashion", label: "Fashion" },
  { value: "home", label: "Home & Office" },
  { value: "grocery", label: "Grocery" },
];

export const reviewOptions = [
  { value: "", label: "Review" },
  { value: "5", label: "5 Stars" },
  { value: "4", label: "4+ Stars" },
  { value: "3", label: "3+ Stars" },
  { value: "2", label: "2+ Stars" },
];

/*
  Backend Developer Notes:
  
  API Endpoints:
  - GET /api/stores - Get all stores with optional filters
  - GET /api/stores/:id - Get specific store details
  - GET /api/stores/search - Search stores by name or category
  
  Query Parameters for filtering:
  - location: string (filter by location)
  - category: string (filter by category)  
  - minRating: number (filter by minimum rating)
  - sortBy: string (name, rating, location)
  - sortOrder: string (asc, desc)
  
  Store Model Schema:
  {
    id: string,
    name: string,
    description: string,
    image: string,
    avatar: string,
    rating: number,
    reviewCount: number,
    categories: string[],
    location: string,
    address: string,
    phone: string,
    email: string,
    website: string,
    isElectronics: boolean,
    isPhysical: boolean,
    isVerified: boolean,
    createdAt: Date,
    updatedAt: Date
  }
  
  Additional Features to Implement:
  - Store verification status
  - Store reviews and ratings system
  - Store product count
  - Store following/unfollowing
  - Store search functionality
  - Pagination for large store lists
  - Store categories management
  - Location-based filtering with coordinates
*/
