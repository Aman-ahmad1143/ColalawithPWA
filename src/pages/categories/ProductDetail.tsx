import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import IMAGES from '../../constants';

// Store Reviews Dataset
const storeReviews = [
  {
    id: "1",
    author: "Adam Sandler",
    avatar: IMAGES.adam1,
    timestamp: "07-16-25/05:33AM",
    rating: 5,
    text: "Really great product, i enjoyed using it for a long time",
    replyCount: 0,
    replies: []
  },
  {
    id: "2",
    author: "Adam Sandler",
    avatar: IMAGES.adam1,
    timestamp: "07-16-25/05:33AM",
    rating: 5,
    text: "Really great product, i enjoyed using it for a long time",
    replyCount: 1,
    replies: [
      {
        id: "r1",
        author: "Sasha Stores",
        avatar: IMAGES.adam1,
        timestamp: "07-16-25/05:33AM",
        text: "Thanks for the review"
      }
    ]
  },
  {
    id: "3",
    author: "Chris Pine",
    avatar: IMAGES.chris1,
    timestamp: "07-16-25/05:33AM",
    rating: 5,
    text: "Really great product, i enjoyed using it for a long time",
    replyCount: 1,
    replies: [
      {
        id: "r2",
        author: "Sasha Stores",
        avatar: IMAGES.adam1,
        timestamp: "07-16-25/05:33AM",
        text: "Thanks for the review"
      }
    ]
  }
];

// Sample product data - this should come from API based on the product ID
const getProductById = (id: string) => {
  const products = [
    // TopSellingProducts (IDs 1-7)
    {
      id: 1,
      name: "Dell Inspiron Laptop",
      image: "/top1.png",
      images: ["/top1.png", "/top2.png", "/top3.png", "/top4.png", "/top5.png"],
      originalPrice: "N3,000,000",
      salePrice: "N2,000,000",
      rating: 4.5,
      reviews: 128,
      description: "High-performance Dell Inspiron laptop with Intel Core i7 processor, perfect for work and entertainment. Features full HD display, ample storage, and long battery life.",
      specifications: {
        brand: "Dell",
        model: "Inspiron 15 3000",
        color: "Black",
        storage: "512 GB SSD",
        resolution: "1920 x 1080",
        display: "Full HD LCD",
        screenSize: "15.6",
        battery: "4000 mah",
        sim: "N/A",
        camera: "HD webcam"
      },
      store: {
       
    name: "Sasha Stores",
    followers: "5",
    following: "54",
    image: "/store1.svg",
    coverImage: "/avatar1.svg",
    isFollowing: false,
    badge1: "Electronics",
    badge2: "Phones"
    
      }
    },
    {
      id: 2,
      name: "Dell Inspiron Laptop",
      image: "/top2.png",
      images: ["/top2.png", "/top1.png", "/top3.png", "/top4.png", "/top5.png"],
      originalPrice: "N3,000,000",
      salePrice: "N2,000,000",
      rating: 4.8,
      reviews: 89,
      description: "Reliable Dell Inspiron laptop with excellent build quality and performance. Ideal for students and professionals with its lightweight design and powerful specifications.",
      specifications: {
        brand: "Dell",
        model: "Inspiron 15 5000",
        color: "Silver",
        storage: "256 GB SSD",
        resolution: "1920 x 1080",
        display: "Full HD IPS",
        screenSize: "15.6",
        battery: "3500 mah",
        sim: "N/A",
        camera: "720p webcam"
      },
      store: {
       
    name: "Sasha Stores",
    followers: "5",
    following: "54",
    image: "/store1.svg",
    coverImage: "/avatar1.svg",
    isFollowing: false,
    badge1: "Electronics",
    badge2: "Phones"
      }
    },
    {
      id: 3,
      name: "Dell Inspiron Laptop",
      image: "/top3.png",
      images: ["/top3.png", "/top1.png", "/top2.png", "/top4.png", "/top5.png"],
      originalPrice: "N2,000,000",
      salePrice: "N2,000,000",
      rating: 4.6,
      reviews: 156,
      description: "Budget-friendly Dell Inspiron laptop without compromising on quality. Features efficient processing power for everyday computing tasks and multimedia consumption.",
      specifications: {
        brand: "Dell",
        model: "Inspiron 14 3000",
        color: "Blue",
        storage: "1TB HDD",
        resolution: "1366 x 768",
        display: "HD LCD",
        screenSize: "14",
        battery: "3000 mah",
        sim: "N/A",
        camera: "VGA webcam"
      },
      store: {
       
    name: "Sasha Stores",
    followers: "5",
    following: "54",
    image: "/store1.svg",
    coverImage: "/avatar1.svg",
    isFollowing: false,
    badge1: "Electronics",
    badge2: "Phones"
      }
    },
    {
      id: 4,
      name: "Dell Inspiron Laptop",
      image: "/top4.png",
      images: ["/top4.png", "/top1.png", "/top2.png", "/top3.png", "/top5.png"],
      originalPrice: "N3,000,000",
      salePrice: "N2,000,000",
      rating: 4.4,
      reviews: 94,
      description: "Premium Dell Inspiron laptop with advanced features and sleek design. Perfect for creative professionals with its color-accurate display and powerful graphics.",
      specifications: {
        brand: "Dell",
        model: "Inspiron 16 Plus",
        color: "Platinum Silver",
        storage: "512 GB SSD",
        resolution: "2560 x 1600",
        display: "QHD+ LCD",
        screenSize: "16",
        battery: "6000 mah",
        sim: "N/A",
        camera: "1080p webcam"
      },
      store: {
        
    name: "Sasha Stores",
    followers: "5",
    following: "54",
    image: "/store1.svg",
    coverImage: "/avatar1.svg",
    isFollowing: false,
    badge1: "Electronics",
    badge2: "Phones"
      }
    },
    {
      id: 5,
      name: "Dell Inspiron Laptop",
      image: "/top5.png",
      images: ["/top5.png", "/top1.png", "/top2.png", "/top3.png", "/top4.png"],
      originalPrice: "N3,000,000",
      salePrice: "N2,000,000",
      rating: 4.3,
      reviews: 203,
      description: "Versatile Dell Inspiron laptop designed for productivity and entertainment. Features fast SSD storage, long battery life, and excellent connectivity options.",
      specifications: {
        brand: "Dell",
        model: "Inspiron 15 7000",
        color: "Mystic Blue",
        storage: "1TB SSD",
        resolution: "1920 x 1080",
        display: "Full HD Touch",
        screenSize: "15.6",
        battery: "4500 mah",
        sim: "N/A",
        camera: "HD IR webcam"
      },
      store: {
       
    name: "Sasha Stores",
    followers: "5",
    following: "54",
    image: "/store1.svg",
    coverImage: "/avatar1.svg",
    isFollowing: false,
    badge1: "Electronics",
    badge2: "Phones"
      }
    },
    {
      id: 6,
      name: "Dell Inspiron Laptop",
      image: "/top6.png",
      images: ["/top6.png", "/top1.png", "/top2.png", "/top3.png", "/top4.png"],
      originalPrice: "N3,000,000",
      salePrice: "N2,000,000",
      rating: 4.7,
      reviews: 67,
      description: "Gaming-ready Dell Inspiron laptop with dedicated graphics card. Perfect for gamers and content creators who need high-performance computing power.",
      specifications: {
        brand: "Dell",
        model: "Inspiron 15 Gaming",
        color: "Black with Red Accents",
        storage: "512 GB SSD + 1TB HDD",
        resolution: "1920 x 1080",
        display: "Full HD 120Hz",
        screenSize: "15.6",
        battery: "4000 mah",
        sim: "N/A",
        camera: "720p webcam"
      },
      store: {
        
    name: "Sasha Stores",
    followers: "5",
    following: "54",
    image: "/store1.svg",
    coverImage: "/avatar1.svg",
    isFollowing: false,
    badge1: "Electronics",
    badge2: "Phones"
      }
    },
    {
      id: 7,
      name: "Dell Inspiron Laptop",
      image: "/top6.png",
      images: ["/top6.png", "/top1.png", "/top2.png", "/top3.png", "/top4.png"],
      originalPrice: "N3,000,000",
      salePrice: "N2,000,000",
      rating: 4.7,
      reviews: 67,
      description: "Compact Dell Inspiron laptop with excellent portability. Ideal for business travelers and students who need reliable performance on the go.",
      specifications: {
        brand: "Dell",
        model: "Inspiron 13 5000",
        color: "Rose Gold",
        storage: "256 GB SSD",
        resolution: "1920 x 1080",
        display: "Full HD IPS",
        screenSize: "13.3",
        battery: "3200 mah",
        sim: "N/A",
        camera: "720p webcam"
      },
      store: {
        
    name: "Sasha Stores",
    followers: "5",
    following: "54",
    image: "/store1.svg",
    coverImage: "/avatar1.svg",
    isFollowing: false,
    badge1: "Electronics",
    badge2: "Phones"
      }
    },
    // AllProducts (IDs 7-16, offset by 6 as per the click handler)
    {
      id: 7, // AllProducts id 1 + 6
      name: "Dell Inspiron Laptop",
      image: "/product1.svg",
      images: ["/product1.svg", "/product2.svg", "/product3.svg", "/product4.svg", "/product5.svg"],
      originalPrice: "N3,000,000",
      salePrice: "N2,000,000",
      rating: 4.5,
      reviews: 128,
      description: "Professional Dell Inspiron laptop with premium features and exceptional build quality. Perfect for business use with enterprise-grade security and reliability.",
      specifications: {
        brand: "Dell",
        model: "Inspiron 15 Business",
        color: "Carbon Black",
        storage: "512 GB SSD",
        resolution: "1920 x 1080",
        display: "Full HD Anti-Glare",
        screenSize: "15.6",
        battery: "4200 mah",
        sim: "N/A",
        camera: "1080p webcam"
      },
      store: {
       
    name: "Sasha Stores",
    followers: "5",
    following: "54",
    image: "/store1.svg",
    coverImage: "/avatar1.svg",
    isFollowing: false,
    badge1: "Electronics",
    badge2: "Phones"
      }
    },
    {
      id: 8, // AllProducts id 2 + 6
      name: "Dell Inspiron Laptop",
      image: "/product2.svg",
      images: ["/product2.svg", "/product1.svg", "/product3.svg", "/product4.svg", "/product5.svg"],
      originalPrice: "N3,000,000",
      salePrice: "N2,000,000",
      rating: 4.8,
      reviews: 129,
      description: "High-end Dell Inspiron laptop with cutting-edge technology and superior performance. Designed for power users who demand the best in computing excellence.",
      specifications: {
        brand: "Dell",
        model: "Inspiron 17 7000",
        color: "Platinum Silver",
        storage: "1TB SSD",
        resolution: "1920 x 1080",
        display: "Full HD IPS",
        screenSize: "17.3",
        battery: "5500 mah",
        sim: "N/A",
        camera: "1080p IR webcam"
      },
      store: {
        
    name: "Sasha Stores",
    followers: "5",
    following: "54",
    image: "/store1.svg",
    coverImage: "/avatar1.svg",
    isFollowing: false,
    badge1: "Electronics",
    badge2: "Phones"
      }
    },
    {
      id: 9, // AllProducts id 3 + 6
      name: "Dell Inspiron Laptop",
      image: "/product3.svg",
      images: ["/product3.svg", "/product1.svg", "/product2.svg", "/product4.svg", "/product5.svg"],
      originalPrice: "N3,000,000",
      salePrice: "N2,000,000",
      rating: 4.2,
      reviews: 122,
      description: "Student-friendly Dell Inspiron laptop with excellent value for money. Features all essential computing capabilities at an affordable price point.",
      specifications: {
        brand: "Dell",
        model: "Inspiron 15 Student",
        color: "Peacock Blue",
        storage: "256 GB SSD",
        resolution: "1366 x 768",
        display: "HD LCD",
        screenSize: "15.6",
        battery: "3500 mah",
        sim: "N/A",
        camera: "720p webcam"
      },
      store: {
       
    name: "Sasha Stores",
    followers: "5",
    following: "54",
    image: "/store1.svg",
    coverImage: "/avatar1.svg",
    isFollowing: false,
    badge1: "Electronics",
    badge2: "Phones"
      }
    },
    {
      id: 10, // AllProducts id 4 + 6
      name: "Dell Inspiron Laptop",
      image: "/product4.svg",
      images: ["/product4.svg", "/product1.svg", "/product2.svg", "/product3.svg", "/product5.svg"],
      originalPrice: "N3,000,000",
      salePrice: "N2,000,000",
      rating: 4.3,
      reviews: 123,
      description: "Multimedia Dell Inspiron laptop optimized for content creation and media consumption. Features enhanced audio and visual capabilities for an immersive experience.",
      specifications: {
        brand: "Dell",
        model: "Inspiron 16 Media",
        color: "Ice Blue",
        storage: "512 GB SSD",
        resolution: "2560 x 1600",
        display: "QHD+ Touch",
        screenSize: "16",
        battery: "5000 mah",
        sim: "N/A",
        camera: "1080p webcam"
      },
      store: {
        name: "Sasha Stores",
        followers: "5",
        following: "54",
        image: "/store1.svg",
        coverImage: "/avatar1.svg",
        isFollowing: false,
        badge1: "Electronics",
        badge2: "Phones"
      }
    }
  ];

  return products.find(p => p.id === parseInt(id)) || products[0]; // Fallback to first product
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '1');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isFollowing, setIsFollowing] = useState(false);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  const toggleFollow = () => setIsFollowing(prev => !prev);











  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-2 py-4">
        {/* Product Details Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl text-[#000000] font-bold">Product Details</h1>
          <div className="flex items-center space-x-2">
            <button className="p-2">
              <img src={IMAGES.kebab1} alt="more" className="w-6 h-6" />
            </button>
            <button className="p-2">
              <img src={IMAGES.heart1} alt="wishlist" className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-0.1">
          {/* Product Images */}
          <div className="flex gap-3">
            {/* Thumbnail Images - Vertical Layout */}
            <div className="flex flex-col space-y-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 rounded-lg border-2 p-1 ${
                    selectedImage === index ? 'border-red-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 aspect-square rounded-lg p-1">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[450px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 ">
            {/* Product Name and Rating */}
            <div>
              <h2 className="text-[20px] font-bold mb-0.1 text-black">{product.name}</h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    
                    
                  </div>
                </div>
                <div className="flex items-center">
                  <img src={IMAGES.star1} alt="star" className="w-5 h-5" />
                  <span className="ml-2 text-[16px] font-medium">{product.rating}</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="border-b border-[#00000080] pb-4 -mt-1 mb-1">
              <div className="text-[18px] font-bold text-[#E53E3E] mb-1">{product.salePrice} <span className="text-[10px] text-[#00000080] line-through">{product.originalPrice}</span></div>
               </div>

            {/* Description */}
            <div className="border-b border-[#00000080] pb-4">
              <h3 className="text-gray-500 text-[12px]font-medium mb-1">Description</h3>
              <p className="text-black text-[12px] leading-relaxed">{product.description}</p>
            </div>

            {/* Subtotal and Quantity */}
            <div className="border-b border-[#00000080]  pb-8">
              <div className="mb-4">
                <h3 className="text-gray-500 text-[10px] font-medium mb-2">Subtotal</h3>
                <div className="text-[14px] font-bold text-[#E53E3E]">{product.salePrice}</div>
              </div>
              
              <div className="flex items-center justify-between">
                {/* Add to Cart Button */}
                <button className="flex items-center justify-center w-12 h-12 -mt-20 ml-94 rounded-lg">
                  <img src={IMAGES.cartwithprice1} alt="cart" className="w-10 h-10" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    2
                  </span>
                </button>

                {/* Quantity Selector */}
                <div className="flex items-center  mr-4">
                  <button
                    onClick={decrementQuantity}
                    className="w-12 h-12 bg-[#E53E3E] text-white rounded-lg -mt-20  flex items-center justify-center text-xl font-bold"
                  >
                    −
                  </button>
                  <span className="mx-4 -mt-20 text-[24px] text-[#E53E3E]   font-bold min-w-[40px] text-center">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="w-12 h-12 bg-[#E53E3E] -mt-20 text-white   rounded-lg flex items-center justify-center text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex items-center justify-center mr-10 space-x-4">
                <button className="flex items-center justify-center w-20 h-16   rounded-[16px] hover:bg-gray-50">
                  <img src={IMAGES.reveal1} alt="whatsapp" className="w-60 h-30" />
                </button>
                <button className="flex items-center justify-center w-20 h-12   rounded-[16px] hover:bg-gray-50">
                  <img src={IMAGES.reveal2} alt="call" className="w-12 h-12" />
                </button>
                <button className="flex items-center justify-center w-17 h-12 rounded-[16px] hover:bg-gray-50">
                  <img src={IMAGES.reveal3} alt="message" className="w-12 h-12" />
                </button><span> <button className="w-[360px] h-[50px] bg-[#000000] text-white py-4 rounded-[16px] font-md text-[12px] hover:bg-gray-800">
                Reveal Phone Number
              </button></span>
              </div>
              
             
              
              <button className="w-full bg-[#E53E3E] text-white py-4 rounded-[16px] font-semibold text-[12px] ">
                Checkout
              </button>
            </div>
          </div>
        </div>

        {/* Tabs and Store Details Section - Side by Side */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 mb-4 -mt-8">
          {/* Tabs Section */}
          <div className=" rounded-lg p-6">
            <div className="flex space-x-0 mb-6">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-14 py-4 font-md rounded-2xl ${
                  activeTab === 'description'
                    ? 'bg-[#E53E3E] text-white'
                    : 'bg-white text-gray-500 border border-gray-200'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-14 py-4 font-md rounded-2xl ml-4 ${
                  activeTab === 'reviews'
                    ? 'bg-[#E53E3E] text-white'
                    : 'bg-white text-gray-500 border border-gray-200'
                }`}
              >
                Reviews
              </button>
            </div>

            {activeTab === 'description' && (
              <div>
                <h3 className="font-md mb-4">Description</h3>
                <p className="text-[#000000] border-b border-[#00000080] p-4 text-[14px] mb-6">{product.description}</p>

                <h3 className="font-md mb-1">Other Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Brand</span>
                    <span className="font-medium">{product.specifications.brand}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Model</span>
                    <span className="font-medium">{product.specifications.model}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Color</span>
                    <span className="font-medium">{product.specifications.color}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Storage</span>
                    <span className="font-medium">{product.specifications.storage}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Resolution</span>
                    <span className="font-medium">{product.specifications.resolution}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Display</span>
                    <span className="font-medium">{product.specifications.display}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Screen size</span>
                    <span className="font-medium">{product.specifications.screenSize}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Battery</span>
                    <span className="font-medium">{product.specifications.battery}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Sim</span>
                    <span className="font-medium">{product.specifications.sim}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-gray-600">Camera</span>
                    <span className="font-medium">{product.specifications.camera}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                {/* Rating Overview Section */}
                <div className="text-center mb-2 bg-white  p-4 pt-10 ">
                  {/* Large Stars */}
                  <div className="flex items-center justify-center space-x-2 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-12 h-12 ${star <= 4 ? 'text-red-500' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Rating Text */}
                  <div className="flex items-center justify-between">
                    <span className="text-red-500 text-lg font-medium">4 Stars</span>
                    <span className="text-red-500 text-lg font-medium">3 Reviews</span>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                
                {storeReviews.map((review) => (
                  <div key={review.id} className="bg-[#F5F5F5] rounded-xl">
                    {/* Upper div - Avatar, Name, Stars */}
                    <div className="flex items-center space-x-3 p-4 pb-2">
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-semibold text-gray-900 text-base">{review.author}</h4>
                          <span className="text-sm text-gray-500">{review.timestamp}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`w-4 h-4 ${star <= review.rating ? 'text-red-500' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Lower div - Review text and reply */}
                    <div className="px-4 pb-4">
                      <p className="text-gray-800 text-base mb-4">{review.text}</p>
                      <div className="flex items-center space-x-2">
                        <img src='/public/backarrow.svg' alt="Reply" className="w-5 h-5" />
                        <span className="text-sm text-gray-600">{review.replyCount}</span>
                        <input 
                          type="text" 
                          placeholder="" 
                          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-400 ml-4" 


                        /><button><img src='/public/arrow.svg' alt="Send" className="w-5 h-5 text-gray-600" /></button>
                        {/* {review.id === "1" && (
                          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                          </svg>
                        )} */}
                      </div>
                      
                      {/* Store Replies */}
                      {review.replies && review.replies.length > 0 && (
                        <div className="mt-4 space-y-3">
                          {review.replies.map((reply) => (
                            <div key={reply.id} className="flex items-start space-x-3 ml-6">
                              <img
                                src={reply.avatar}
                                alt={reply.author}
                                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                              />
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h5 className="font-medium text-gray-900 text-sm">{reply.author}</h5>
                                  <span className="text-xs text-gray-500">{reply.timestamp}</span>
                                </div>
                                <p className="text-gray-700 text-sm">{reply.text}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                </div>
              </div>
            )}
          </div>

          {/* Store Details */}
          <div className=" rounded-2xl h-[440px]  p-6">
            <h3 className="font-semibold mb-4">Store Details</h3>
            <div className="space-y-4">
              {/* Store Card */}
              <div className=" rounded-lg border h-[380px] border-gray-200 shadow-2xl overflow-hidden">
                {/* Cover Image with Avatar */}
                <div className="relative h-30">
                  <img src={product.store.coverImage} alt="Store cover" className="w-full h-full object-cover" />
                  {/* Store Avatar positioned over cover */}
                  <div className="absolute -bottom-8 left-4">
                    <img src={product.store.image} alt={product.store.name} className="w-18 h-18 rounded-full border-4 border-white object-cover shadow-md" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-10 pb-4 px-4">
                  {/* Store Name and Rating */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="flex items-end justify-between font-semibold -mt-14 ml-20 mb-1">{product.store.name}</h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-red-500 text-lg">★</span>
                      <span className="text-sm text-gray-600 font-medium">4.5</span>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="flex items-center space-x-2 ml-18 -mt-8 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg text-xs font-medium border  border-blue-300">{product.store.badge1}</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-xs font-medium border border-red-300">{product.store.badge2}</span>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center space-x-1 mb-4">
                    <img src={IMAGES.mappin} alt="location" className="w-4 h-4" />
                    <span className="text-sm text-gray-600">Ikeja Lagos</span>
                  </div>
              
                  {/* Social Media Icons */}
              <div className="flex items-center mb-6 border rounded-lg border-[#CDCDCD] p-1 space-x-3">
                <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-50">
                  <img src={IMAGES.whatsapp1} alt="whatsapp" className="w-10 h-10" />
                </button>
                <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-50">
                  <img src={IMAGES.instagram} alt="instagram" className="w-10 h-10" />
                </button>
                <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-50">
                  <img src={IMAGES.twitter} alt="twitter" className="w-10 h-10" />
                </button>
                <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-50">
                  <img src={IMAGES.facebook} alt="facebook" className="w-10 h-10" />
                </button>
              </div>
    {/* Store Stats and Visit Button */}

<div className="flex items-center justify-between">
                    {/* Stats Section */}
                    <div className="flex items-center space-x-6">
                      <div className="text-center border-r border-[#CDCDCD] pr-5">
                        <div className="flex items-center space-x-1 mb-1">
                          <img src={IMAGES.shop} alt="qty sold" className="w-4 h-4 text-gray-400" />
                          <span className="text-[8px] text-gray-500">Qty Sold</span>
                        </div>
                        <span className="text-[12px] font-bold ml-2 text-gray-900">100</span>
                      </div>
                      
                      <div className="text-center border-r border-[#CDCDCD] pr-8">
                        <div className="flex items-center space-x-1 mb-1">
                          <img src={IMAGES.followers} alt="followers" className="w-4 h-4 text-gray-400" />
                          <span className="text-[8px] text-gray-500">Followers</span>
                        </div>
                        <span className="text-[14px] font-bold ml-1 text-gray-900">{product.store.followers}</span>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <button 
                      onClick={toggleFollow}
                      className={`px-10 py-3 rounded-xl font-medium cursor-pointer text-sm transition-colors ${
                        isFollowing 
                          ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                          : 'bg-[#E53E3E] text-white hover:bg-[#E53E3E]'
                      }`}
                    >
                      {isFollowing ? 'Following' : 'Go to Shop'}
                    </button>

                </div>
              </div>
              
            
              
            </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
