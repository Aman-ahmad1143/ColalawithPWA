# 🔗 API Integration Guide for Backend Developers

This document provides comprehensive guidance for backend developers to integrate with the Colala PWA frontend application.

## 📋 Table of Contents
- [Authentication System](#authentication-system)
- [API Endpoints Overview](#api-endpoints-overview)
- [Data Models](#data-models)
- [Frontend State Management](#frontend-state-management)
- [File Upload Requirements](#file-upload-requirements)
- [Real-time Features](#real-time-features)
- [Error Handling](#error-handling)
- [Security Considerations](#security-considerations)

## 🔐 Authentication System

### Current Implementation
- **Cookie-based sessions** using `js-cookie` library
- Login state stored in `isLoggedIn` cookie (expires in 7 days)
- Frontend checks authentication status on app load

### Required Backend Endpoints

```typescript
// POST /api/auth/login
interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  user: UserProfile;
  token?: string; // Optional: for JWT implementation
  message: string;
}

// POST /api/auth/register
interface RegisterRequest {
  username: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  password: string;
  referralCode?: string; // Optional
}

// POST /api/auth/logout
// GET /api/auth/verify - Verify current session
```

### Frontend Integration Points
- **File**: `src/pages/user/LoginPopup.tsx` (Line 22-26)
- **File**: `src/pages/user/RegistrationPopup.tsx`
- **File**: `src/pages/layout/header.tsx` (Authentication state)

## 🛒 API Endpoints Overview

### 1. Product Management

```typescript
// GET /api/products
interface ProductListRequest {
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: 'price' | 'rating' | 'newest';
  minPrice?: number;
  maxPrice?: number;
}

// GET /api/products/:id
interface ProductDetailResponse {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  store: StoreInfo;
  rating: number;
  reviews: Review[];
  variants?: ProductVariant[];
  inStock: boolean;
  quantity: number;
}
```

**Frontend Files**: 
- `src/pages/categories/Categories.tsx` - Product listing
- `src/pages/categories/ProductDetail.tsx` - Product details
- `src/pages/home/HomePage.tsx` - Featured products

### 2. Cart Management

```typescript
// GET /api/cart
// POST /api/cart/add
interface AddToCartRequest {
  productId: string;
  quantity: number;
  variantId?: string;
}

// PUT /api/cart/update/:itemId
// DELETE /api/cart/remove/:itemId
// POST /api/cart/checkout

interface CheckoutRequest {
  items: CartItem[];
  shippingAddress: Address;
  paymentMethod: string;
  notes?: string;
}
```

**Frontend Files**:
- `src/context/CartContext.tsx` - Cart state management
- `src/pages/cart/Cart.tsx` - Cart display
- `src/pages/cart/CartCheckout.tsx` - Checkout process

### 3. Store Management

```typescript
// GET /api/stores
// GET /api/stores/:id
interface StoreDetailResponse {
  id: string;
  name: string;
  description: string;
  avatar: string;
  coverImage: string;
  rating: number;
  followers: number;
  products: Product[];
  addresses: StoreAddress[];
  policies: StorePolicy;
  isFollowed: boolean; // For authenticated users
}

// POST /api/stores/:id/follow
// DELETE /api/stores/:id/unfollow
```

**Frontend Files**:
- `src/pages/stores/Stores.tsx` - Store listing
- `src/pages/stores/StoreDetail.tsx` - Store details
- `src/pages/settings/FollowedStores.tsx` - User's followed stores

### 4. Order Management

```typescript
// GET /api/orders
interface OrderListResponse {
  orders: Order[];
  pagination: PaginationInfo;
}

// GET /api/orders/:id
interface OrderDetailResponse {
  id: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  items: OrderItem[];
  total: number;
  shippingAddress: Address;
  trackingNumber?: string;
  estimatedDelivery: string;
  store: StoreInfo;
  timeline: OrderTimelineEvent[];
}

// PUT /api/orders/:id/cancel
```

**Frontend Files**:
- `src/pages/settings/Orders.tsx` - Order listing
- `src/pages/settings/FullOrderDetail.tsx` - Order details
- `src/pages/settings/OrderTracker.tsx` - Order tracking

### 5. Reviews & Ratings

```typescript
// POST /api/reviews
interface CreateReviewRequest {
  productId?: string;
  storeId?: string;
  rating: number; // 1-5
  comment: string;
  images?: string[];
}

// GET /api/reviews
// PUT /api/reviews/:id
// DELETE /api/reviews/:id
```

**Frontend Files**:
- `src/pages/settings/Reviews.tsx` - Review management
- `src/pages/settings/ProductLeaveReview.tsx` - Create product review
- `src/pages/settings/StoreLeaveReview.tsx` - Create store review

### 6. User Profile & Settings

```typescript
// GET /api/user/profile
// PUT /api/user/profile
interface UserProfile {
  id: string;
  username: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  avatar?: string;
  joinDate: string;
}

// GET /api/user/addresses
// POST /api/user/addresses
// PUT /api/user/addresses/:id
// DELETE /api/user/addresses/:id

interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}
```

**Frontend Files**:
- `src/pages/settings/EditProfile.tsx` - Profile editing
- `src/pages/settings/SavedAddresses.tsx` - Address management

### 7. Services Marketplace

```typescript
// GET /api/services
// GET /api/services/:id
interface ServiceDetailResponse {
  id: string;
  title: string;
  description: string;
  category: string;
  provider: ServiceProvider;
  price: number;
  duration: string;
  availability: TimeSlot[];
  images: string[];
  rating: number;
}

// POST /api/services/:id/book
interface BookServiceRequest {
  date: string;
  timeSlot: string;
  notes?: string;
}
```

**Frontend Files**:
- `src/pages/services/Services.tsx` - Service listing
- `src/pages/services/ServiceDetails.tsx` - Service details

### 8. Search & Discovery

```typescript
// GET /api/search
interface SearchRequest {
  query: string;
  type: 'products' | 'stores' | 'services' | 'all';
  filters?: SearchFilters;
}

// POST /api/search/image
interface ImageSearchRequest {
  image: File; // Base64 or multipart upload
}
```

**Frontend Files**:
- `src/pages/SearchPage.tsx` - Search functionality
- `src/pages/layout/header.tsx` - Search components (Line 105-150)

### 9. Chat & Support

```typescript
// GET /api/chat/conversations
// GET /api/chat/conversations/:id/messages
// POST /api/chat/conversations/:id/messages
interface SendMessageRequest {
  content: string;
  type: 'text' | 'image' | 'file';
  attachment?: string;
}

// POST /api/support/tickets
interface SupportTicketRequest {
  category: string;
  subject: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
}
```

**Frontend Files**:
- `src/pages/chat/Chat.tsx` - Chat interface
- `src/pages/chat/ChatStore.tsx` - Store chat
- `src/pages/settings/Support.tsx` - Support system

### 10. Loyalty & Referrals

```typescript
// GET /api/loyalty/points
interface LoyaltyPointsResponse {
  totalPoints: number;
  storePoints: StorePoint[];
  history: PointTransaction[];
}

// POST /api/loyalty/transfer
interface TransferPointsRequest {
  fromStore: string;
  amount: number;
}

// GET /api/referrals
interface ReferralResponse {
  referralCode: string;
  referredUsers: number;
  earnings: number;
  withdrawableAmount: number;
}

// POST /api/referrals/withdraw
interface WithdrawRequest {
  amount: number;
  bankDetails: BankInfo;
}
```

**Frontend Files**:
- `src/pages/settings/LoyaltyPoints.tsx` - Points management
- `src/pages/settings/Referrals.tsx` - Referral system

### 11. Seller Leaderboard

```typescript
// GET /api/leaderboard
interface LeaderboardResponse {
  period: 'today' | 'weekly' | 'monthly' | 'all-time';
  sellers: LeaderboardEntry[];
}

interface LeaderboardEntry {
  rank: number;
  store: StoreInfo;
  score: number;
  change: number; // Position change
}
```

**Frontend Files**:
- `src/pages/settings/SellerLeaderboard.tsx` - Leaderboard display

## 📊 Data Models

### Core Models

```typescript
interface User {
  id: string;
  username: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  avatar?: string;
  isVerified: boolean;
  joinDate: string;
  lastActive: string;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  salePrice?: number;
  images: ProductImage[];
  category: Category;
  subcategory?: Category;
  store: Store;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  quantity: number;
  sku: string;
  variants?: ProductVariant[];
  specifications: ProductSpec[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

interface Store {
  id: string;
  name: string;
  slug: string;
  description: string;
  avatar: string;
  coverImage: string;
  owner: User;
  rating: number;
  reviewCount: number;
  followers: number;
  isVerified: boolean;
  isFollowed?: boolean; // For authenticated users
  addresses: StoreAddress[];
  policies: StorePolicy;
  socialLinks: SocialLink[];
  createdAt: string;
}

interface Order {
  id: string;
  orderNumber: string;
  user: User;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  shippingAddress: Address;
  billingAddress?: Address;
  paymentMethod: PaymentMethod;
  trackingNumber?: string;
  estimatedDelivery?: string;
  notes?: string;
  timeline: OrderTimelineEvent[];
  createdAt: string;
  updatedAt: string;
}
```

## 🔄 Frontend State Management

### Cart Context (`src/context/CartContext.tsx`)
```typescript
// The cart state includes:
interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  stores: StoreGroup[]; // Items grouped by store
}

// Actions needed from backend:
// - Sync cart with server when user logs in
// - Persist cart items across sessions
// - Validate item availability before checkout
```

### Authentication State
```typescript
// Stored in cookies and component state
interface AuthState {
  isLoggedIn: boolean;
  user?: UserProfile;
  token?: string;
}
```

## 📁 File Upload Requirements

### Image Upload Endpoints
```typescript
// POST /api/upload/image
interface ImageUploadResponse {
  url: string;
  filename: string;
  size: number;
  mimeType: string;
}

// Used in:
// - Profile avatar upload
// - Product image search
// - Review images
// - Chat attachments
```

### File Types & Limits
- **Images**: JPG, PNG, WebP (max 5MB)
- **Documents**: PDF (max 10MB)
- **Profile Images**: Square format recommended (400x400px)

## ⚡ Real-time Features

### WebSocket/SSE Requirements
```typescript
// Chat messages
interface ChatMessage {
  id: string;
  conversationId: string;
  sender: User;
  content: string;
  type: 'text' | 'image' | 'file';
  timestamp: string;
  isRead: boolean;
}

// Order status updates
interface OrderStatusUpdate {
  orderId: string;
  status: OrderStatus;
  message: string;
  timestamp: string;
}

// Notifications
interface Notification {
  id: string;
  type: 'order' | 'message' | 'promotion';
  title: string;
  message: string;
  isRead: boolean;
  timestamp: string;
  actionUrl?: string;
}
```

## ❌ Error Handling

### Standard Error Response
```typescript
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

// Common error codes expected by frontend:
// - AUTH_REQUIRED: 401
// - INVALID_INPUT: 400
// - NOT_FOUND: 404
// - SERVER_ERROR: 500
// - RATE_LIMITED: 429
```

### Frontend Error Handling
- Displays user-friendly error messages
- Automatic retry for network errors
- Fallback to cached data when offline

## 🔒 Security Considerations

### Required Security Headers
```http
Content-Security-Policy: default-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

### Data Validation
- Validate all inputs on backend
- Sanitize user-generated content
- Implement rate limiting
- Use HTTPS for all endpoints

### CORS Configuration
```javascript
// Allow frontend domain
origin: ['https://colala-pwa.vercel.app', 'http://localhost:5173']
credentials: true // For cookie-based auth
```

## 📱 PWA Considerations

### Offline Support
- Implement proper HTTP caching headers
- Support for offline data sync
- Background sync for failed requests

### Push Notifications
```typescript
// POST /api/notifications/subscribe
interface PushSubscription {
  endpoint: string;
  keys: {
    p256dh: string;
    auth: string;
  };
}
```

## 🧪 Testing Endpoints

### Health Check
```typescript
// GET /api/health
interface HealthResponse {
  status: 'ok' | 'error';
  timestamp: string;
  version: string;
  services: {
    database: 'ok' | 'error';
    redis: 'ok' | 'error';
    storage: 'ok' | 'error';
  };
}
```

## 📝 Implementation Priority

### Phase 1 (Core Features)
1. Authentication endpoints
2. Product catalog API
3. Cart management
4. Basic order flow

### Phase 2 (Enhanced Features)
5. User profile management
6. Store system
7. Review system
8. Search functionality

### Phase 3 (Advanced Features)
9. Chat system
10. Loyalty program
11. Real-time notifications
12. Advanced analytics

## 🔗 Frontend Integration Notes

### Key Files to Reference
- **Constants**: `src/constants.tsx` - Static data and image references
- **Types**: Check component props for expected data structures
- **State**: `src/context/CartContext.tsx` - Cart state management
- **Routing**: `src/App.tsx` - All route definitions

### API Call Patterns
Most API calls in the frontend follow this pattern:
```typescript
const handleApiCall = async () => {
  try {
    setLoading(true);
    const response = await fetch('/api/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // For cookies
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    
    if (result.success) {
      // Handle success
    } else {
      // Handle error
    }
  } catch (error) {
    // Handle network error
  } finally {
    setLoading(false);
  }
};
```

---

**Need Help?** Contact the frontend team for clarification on any endpoint or data structure requirements.
