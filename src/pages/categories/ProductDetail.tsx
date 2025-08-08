import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import IMAGES from '../../constants';

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
        image: "/StoreImg.png",
        rating: 4.5,
        followers: 100,
        products: 5
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
        image: "/StoreImg.png",
        rating: 4.5,
        followers: 100,
        products: 5
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
        image: "/StoreImg.png",
        rating: 4.5,
        followers: 100,
        products: 5
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
        image: "/StoreImg.png",
        rating: 4.5,
        followers: 100,
        products: 5
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
        image: "/StoreImg.png",
        rating: 4.5,
        followers: 100,
        products: 5
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
        image: "/StoreImg.png",
        rating: 4.5,
        followers: 100,
        products: 5
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
        image: "/StoreImg.png",
        rating: 4.5,
        followers: 100,
        products: 5
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
        image: "/StoreImg.png",
        rating: 4.5,
        followers: 100,
        products: 5
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
        image: "/StoreImg.png",
        rating: 4.5,
        followers: 100,
        products: 5
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
        image: "/StoreImg.png",
        rating: 4.5,
        followers: 100,
        products: 5
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
        image: "/StoreImg.png",
        rating: 4.5,
        followers: 100,
        products: 5
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

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Product Details Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl text-[#000000] font-bold">Product Details</h1>
          <div className="flex items-center space-x-2">
            <button className="p-2">
              <img src={IMAGES.kebab1} alt="more" className="w-8 h-8" />
            </button>
            <button className="p-2">
              <img src={IMAGES.heart1} alt="wishlist" className="w-8 h-8" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-lg p-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
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
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={i < Math.floor(product.rating) ? IMAGES.starFilled : IMAGES.star}
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">{product.salePrice}</div>
              <div className="text-lg text-gray-500 line-through">{product.originalPrice}</div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Subtotal</h3>
                <div className="text-2xl font-bold text-red-600">{product.salePrice}</div>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Quantity Selector */}
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 bg-red-600 text-white">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="px-3 py-2 hover:bg-gray-100 bg-red-600 text-white"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                    <img src={IMAGES.services6} alt="whatsapp" className="w-5 h-5" />
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                    <img src={IMAGES.phoneIcon} alt="call" className="w-5 h-5" />
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                    <img src={IMAGES.sms} alt="message" className="w-5 h-5" />
                  </button>
                </div>
                
                <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
                  Reveal Phone Number
                </button>
                
                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="flex space-x-8 border-b mb-6">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-2 font-semibold ${
                activeTab === 'description'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-2 font-semibold ${
                activeTab === 'reviews'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600'
              }`}
            >
              Reviews
            </button>
          </div>

          {activeTab === 'description' && (
            <div>
              <h3 className="font-semibold mb-4">Description</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <h3 className="font-semibold mb-4">Other Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Brand</span>
                      <span className="font-medium">{product.specifications.brand}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Model</span>
                      <span className="font-medium">{product.specifications.model}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Color</span>
                      <span className="font-medium">{product.specifications.color}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Storage</span>
                      <span className="font-medium">{product.specifications.storage}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Resolution</span>
                      <span className="font-medium">{product.specifications.resolution}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Display</span>
                      <span className="font-medium">{product.specifications.display}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Screen size</span>
                      <span className="font-medium">{product.specifications.screenSize}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Battery</span>
                      <span className="font-medium">{product.specifications.battery}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Sim</span>
                      <span className="font-medium">{product.specifications.sim}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Camera</span>
                      <span className="font-medium">{product.specifications.camera}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h3 className="font-semibold mb-4">Customer Reviews</h3>
              <div className="text-center py-8">
                <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
              </div>
            </div>
          )}
        </div>

        {/* Store Details */}
        <div className="bg-white rounded-lg p-6">
          <h3 className="font-semibold mb-4">Store Details</h3>
          <div className="flex items-start space-x-4">
            <img
              src={product.store.image}
              alt={product.store.name}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-lg">{product.store.name}</h4>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={i < Math.floor(product.store.rating) ? IMAGES.starFilled : IMAGES.star}
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
                  <span className="text-sm text-gray-600">{product.store.rating}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <img src={IMAGES.followers} alt="followers" className="w-4 h-4" />
                  <span className="text-sm text-gray-600">{product.store.followers}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <img src={IMAGES.ranking} alt="products" className="w-4 h-4" />
                  <span className="text-sm text-gray-600">{product.store.products}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <button className="p-2 border rounded-lg hover:bg-gray-50">
                  <img src={IMAGES.services6} alt="whatsapp" className="w-5 h-5" />
                </button>
                <button className="p-2 border rounded-lg hover:bg-gray-50">
                  <img src={IMAGES.services1} alt="instagram" className="w-5 h-5" />
                </button>
                <button className="p-2 border rounded-lg hover:bg-gray-50">
                  <img src={IMAGES.services3} alt="twitter" className="w-5 h-5" />
                </button>
                <button className="p-2 border rounded-lg hover:bg-gray-50">
                  <img src={IMAGES.services2} alt="facebook" className="w-5 h-5" />
                </button>
              </div>
            </div>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
              Visit Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
