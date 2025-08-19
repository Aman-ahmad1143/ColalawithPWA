import IMAGES from "../../constants";

export interface ChatStore {
  id: string;
  name: string;
  image: string;
  avatar: string;
  rating: number;
  categories: string[];
  location: string;
  isElectronics: boolean;
  isPhysical: boolean;
  email: string;
  phone: string;
  description: string;
  qtySold: number;
  followers: number;
  isOpen: boolean;
  openTime: string;
  closeTime: string;
  isVerified: boolean;
  announcement: string;
  services: string[];
}

export const chatStoresData: ChatStore[] = [
  {
    id: "1",
    name: "Sasha Stores",
    image: IMAGES.coverSasha,
    avatar: IMAGES.sasha,
    rating: 4.5,
    categories: ["Electronics", "Phones"],
    location: "Lagos, Nigeria",
    isElectronics: true,
    isPhysical: true,
    email: "sashastores@gmail.com",
    phone: "07012545789",
    description: "Experience a variety of choices for your retail or wholesale products",
    qtySold: 150,
    followers: 1250,
    isOpen: true,
    openTime: "07:00AM",
    closeTime: "08:00PM",
    isVerified: true,
    announcement: "New arrivals coming tomorrow",
    services: ["Free Delivery", "24/7 Support", "Warranty Service", "Installation Support", "Technical Support"],
  },
  {
    id: "2",
    name: "Vee Stores",
    image: IMAGES.coverVee,
    avatar: IMAGES.tarra,
    rating: 4.0,
    categories: ["Electronics", "Computing"],
    location: "Lagos, Nigeria",
    isElectronics: true,
    isPhysical: true,
    email: "veestores@gmail.com",
    phone: "07012345678",
    description: "Your one-stop shop for quality electronics and gadgets",
    qtySold: 98,
    followers: 890,
    isOpen: true,
    openTime: "08:00AM",
    closeTime: "07:00PM",
    isVerified: true,
    announcement: "Weekend flash sale starting Friday",
    services: ["Same Day Delivery", "Extended Warranty", "Tech Support", "Price Matching", "Trade-in Program"],
  },
  {
    id: "3",
    name: "Adam Stores",
    image: IMAGES.coverAdam,
    avatar: IMAGES.vee,
    rating: 4.5,
    categories: ["Electronics", "Home"],
    location: "Lagos, Nigeria",
    isElectronics: true,
    isPhysical: true,
    email: "adamstores@gmail.com",
    phone: "07098765432",
    description: "Premium electronics and home appliances at affordable prices",
    qtySold: 203,
    followers: 1580,
    isOpen: false,
    openTime: "09:00AM",
    closeTime: "06:00PM",
    isVerified: true,
    announcement: "Closed for inventory update",
    services: ["Home Installation", "Free Consultation", "Maintenance Service", "Bulk Discounts", "Corporate Sales"],
  },
  {
    id: "4",
    name: "Scent Villa Stores",
    image: IMAGES.coverScent,
    avatar: IMAGES.scentVilla,
    rating: 3.5,
    categories: ["Beauty", "Fragrances"],
    location: "Lagos, Nigeria",
    isElectronics: false,
    isPhysical: true,
    email: "scentvilla@gmail.com",
    phone: "07087654321",
    description: "Luxury fragrances and beauty products for every occasion",
    qtySold: 76,
    followers: 650,
    isOpen: true,
    openTime: "10:00AM",
    closeTime: "08:00PM",
    isVerified: true,
    announcement: "New perfume collections arrived",
    services: ["Personal Styling", "Gift Wrapping", "Fragrance Consultation", "Beauty Tutorials", "Loyalty Program"],
  },
  {
    id: "5",
    name: "Caremal Stores",
    image: IMAGES.coverCaremal,
    avatar: IMAGES.caremal,
    rating: 4.5,
    categories: ["Fashion", "Accessories"],
    location: "Lagos, Nigeria",
    isElectronics: false,
    isPhysical: true,
    email: "caremalstores@gmail.com",
    phone: "07054321098",
    description: "Trendy fashion items and accessories for the modern lifestyle",
    qtySold: 187,
    followers: 2100,
    isOpen: true,
    openTime: "09:00AM",
    closeTime: "09:00PM",
    isVerified: true,
    announcement: "Fashion week special discounts",
    services: ["Personal Shopping", "Style Consultation", "Alterations", "Size Exchange", "VIP Membership"],
  },
  {
    id: "6",
    name: "Lovina Stores",
    image: IMAGES.coverLovina,
    avatar: IMAGES.lovina,
    rating: 4.8,
    categories: ["Grocery", "Food"],
    location: "Lagos, Nigeria",
    isElectronics: false,
    isPhysical: true,
    email: "lovinastores@gmail.com",
    phone: "07023456789",
    description: "Fresh groceries and organic food products delivered daily",
    qtySold: 342,
    followers: 3200,
    isOpen: true,
    openTime: "06:00AM",
    closeTime: "10:00PM",
    isVerified: true,
    announcement: "Fresh organic produce available",
    services: ["Home Delivery", "Subscription Box", "Meal Planning", "Bulk Orders", "Fresh Guarantee"],
  },
  {
    id: "7",
    name: "Tech Hub Store",
    image: IMAGES.coverScent,
    avatar: IMAGES.scentVilla,
    rating: 4.3,
    categories: ["Electronics", "Gaming"],
    location: "Abuja, Nigeria",
    isElectronics: true,
    isPhysical: true,
    email: "techhub@gmail.com",
    phone: "07076543210",
    description: "Latest gaming gear and tech accessories",
    qtySold: 128,
    followers: 980,
    isOpen: true,
    openTime: "10:00AM",
    closeTime: "07:00PM",
    isVerified: false,
    announcement: "Gaming tournament prizes available",
    services: ["Gaming Setup", "Custom Build", "Repairs", "Gaming Tournaments", "Product Testing"],
  }
];

// Helper function to format rating
export const formatChatRating = (rating: number): string => {
  return rating.toFixed(1);
};
