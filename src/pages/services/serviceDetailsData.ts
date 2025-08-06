export interface ServiceDetail {
  id: number;
  title: string;
  price: string;
  rating: number;
  storeName: string;
  mainImage: string;
  thumbnails: string[];
  storeAvatar: string;
  description: string;
  priceBreakdown: PriceBreakdownItem[];
}

export interface PriceBreakdownItem {
  category: string;
  price: string;
}

export const serviceDetailData: ServiceDetail = {
  id: 1,
  title: "Sasha Fashion Designing",
  price: "₦5,000 - ₦20,000",
  rating: 4.5,
  storeName: "Sasha Stores",
  mainImage: "/Services_detail_1.png",
  thumbnails: [
    "/Services_detail_1.png",
    "/Services_detail_2.png", 
    "/Services_detail_3.png"
  ],
  storeAvatar: "/Ellipse_store_img.png",
  description: "We sew all kinds of dresses, we are your one stop shop for any form of dresses",
  priceBreakdown: [
    {
      category: "General",
      price: "₦5,000 - ₦10,000"
    },
    {
      category: "Male Wear",
      price: "₦5,000 - ₦10,000"
    },
    {
      category: "Female wear",
      price: "₦5,000 - ₦10,000"
    },
    {
      category: "Kids Wear",
      price: "₦5,000 - ₦10,000"
    },
    {
      category: "Wedding Wears",
      price: "₦5,000 - ₦10,000"
    },
    {
      category: "Teens",
      price: "₦5,000 - ₦10,000"
    }
  ]
};
