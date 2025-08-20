# 💻 Frontend Code Comments Strategy

This document shows examples of strategic comments that should be added to your React components to help backend developers understand API integration points.

## 📋 Comment Types to Add

### 1. API Integration Points
Mark where API calls should be implemented

### 2. Data Structure Expectations
Document the expected data format from backend

### 3. State Management
Explain how data flows through the application

### 4. Business Logic
Clarify complex frontend logic that affects backend requirements

## 🔧 Example Comment Implementations

### Authentication Components

```typescript
// src/pages/user/LoginPopup.tsx
const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();
  
  // API INTEGRATION: POST /api/auth/login
  // Expected request: { email: string, password: string }
  // Expected response: { success: boolean, user: UserProfile, token?: string }
  // On success: Set cookie 'isLoggedIn' and redirect to dashboard
  // On error: Display error message to user
  
  Cookies.set("isLoggedIn", "true", { expires: 7 });
  if (onClose) onClose();
};
```

### Cart Management

```typescript
// src/context/CartContext.tsx
const addToCart = (product: Product, quantity: number) => {
  // API INTEGRATION: POST /api/cart/add
  // Request: { productId: string, quantity: number, variantId?: string }
  // Response: { success: boolean, cart: CartState }
  // Update local state with server response
  
  // BUSINESS LOGIC: Group items by store for multi-store checkout
  // Backend should maintain this grouping structure
  
  setCartItems([...cartItems, { product, quantity }]);
};
```

### Product Components

```typescript
// src/pages/categories/ProductDetail.tsx
useEffect(() => {
  // API INTEGRATION: GET /api/products/:id
  // Expected response structure:
  /*
  {
    id: string,
    name: string,
    description: string,
    price: number,
    images: string[],
    store: StoreInfo,
    variants: ProductVariant[],
    inStock: boolean,
    rating: number,
    reviews: Review[]
  }
  */
  
  // FRONTEND STATE: Product data is stored in component state
  // Reviews are displayed in expandable section
  // Related products fetched separately
  
  fetchProductDetails(productId);
}, [productId]);
```

### Search Functionality

```typescript
// src/pages/SearchPage.tsx
const handleImageSearch = (imageFile: File) => {
  // API INTEGRATION: POST /api/search/image
  // Request: multipart/form-data with image file
  // Response: { products: Product[], confidence: number }
  // Maximum file size: 5MB, formats: JPG, PNG, WebP
  
  // FRONTEND BEHAVIOR: Show loading spinner during upload
  // Display results in grid layout similar to category page
  
  setShowImageSearchPopup(false);
  navigate('/search', { state: { imageResults: true } });
};
```

### Order Management

```typescript
// src/pages/settings/Orders.tsx
useEffect(() => {
  // API INTEGRATION: GET /api/orders
  // Query parameters: page, limit, status, dateRange
  // Response: { orders: Order[], pagination: PaginationInfo }
  
  // FRONTEND STATE: Orders are paginated and cached
  // Status filtering handled on frontend after fetching
  // Real-time updates via WebSocket for status changes
  
  fetchUserOrders();
}, []);

const trackOrder = (orderId: string) => {
  // API INTEGRATION: GET /api/orders/:id/tracking
  // Response: { trackingNumber: string, events: TrackingEvent[] }
  // Updates should be real-time via WebSocket
  
  navigate(`/orders/${orderId}/track`);
};
```

### Chat System

```typescript
// src/pages/chat/ChatStore.tsx
const sendMessage = (content: string) => {
  // API INTEGRATION: POST /api/chat/conversations/:id/messages
  // Request: { content: string, type: 'text' | 'image' | 'file' }
  // Response: { message: ChatMessage }
  
  // REAL-TIME: Use WebSocket for instant message delivery
  // FILE UPLOADS: Support image attachments up to 10MB
  // OFFLINE: Queue messages and send when reconnected
  
  // FRONTEND STATE: Optimistically add message to UI
  // Remove on successful send, mark as failed on error
  
  setMessages([...messages, { content, sender: 'user', timestamp: new Date() }]);
};
```

### Reviews & Ratings

```typescript
// src/pages/settings/ProductLeaveReview.tsx
const submitReview = async () => {
  // API INTEGRATION: POST /api/reviews
  // Request: { 
  //   productId: string, 
  //   rating: number (1-5), 
  //   comment: string,
  //   images?: string[] 
  // }
  // Response: { success: boolean, review: Review }
  
  // BUSINESS LOGIC: User can only review products they've purchased
  // One review per product per user
  // Images are optional, max 5 images per review
  
  // VALIDATION: Rating is required, comment minimum 10 characters
  
  const reviewData = {
    productId,
    rating,
    comment,
    images: uploadedImages
  };
  
  // Submit to backend
};
```

### Store Management

```typescript
// src/pages/stores/StoreDetail.tsx
const followStore = async (storeId: string) => {
  // API INTEGRATION: POST /api/stores/:id/follow
  // Response: { success: boolean, followersCount: number }
  // Requires authentication
  
  // FRONTEND STATE: Update follow status immediately (optimistic)
  // Revert on error, show error message
  
  setIsFollowed(true);
  setFollowersCount(prev => prev + 1);
};

const loadStoreProducts = () => {
  // API INTEGRATION: GET /api/stores/:id/products
  // Query params: page, category, sortBy, priceRange
  // Response: { products: Product[], pagination: PaginationInfo }
  
  // FRONTEND BEHAVIOR: Infinite scroll pagination
  // Filter by category using tabs
  // Sort options: newest, price (low-high), rating
  
  fetchStoreProducts(storeId, filters);
};
```

### Loyalty Program

```typescript
// src/pages/settings/LoyaltyPoints.tsx
const transferPoints = async (amount: number) => {
  // API INTEGRATION: POST /api/loyalty/transfer
  // Request: { fromStore: string, amount: number }
  // Response: { success: boolean, newBalance: number }
  
  // BUSINESS LOGIC: Transfer points from store wallet to shopping wallet
  // Minimum transfer: 100 points
  // Transfer fee: 5% (handled on backend)
  
  // VALIDATION: Check sufficient balance before API call
  
  if (storePoints < amount) {
    setError('Insufficient points');
    return;
  }
  
  // Make API call
};
```

### Referral System

```typescript
// src/pages/settings/Referrals.tsx
const withdrawEarnings = async (amount: number, bankDetails: BankInfo) => {
  // API INTEGRATION: POST /api/referrals/withdraw
  // Request: { amount: number, bankDetails: BankInfo }
  // Response: { success: boolean, transactionId: string }
  
  // BUSINESS LOGIC: Minimum withdrawal $50
  // Processing time: 3-5 business days
  // Withdrawal fee: $2 (deducted from amount)
  
  // VALIDATION: Verify bank details format
  // Show confirmation modal before submission
  
  const withdrawalData = {
    amount: amount - 2, // Subtract fee
    bankDetails
  };
  
  // Submit withdrawal request
};
```

### Settings & Profile

```typescript
// src/pages/settings/EditProfile.tsx
const updateProfile = async (profileData: UserProfile) => {
  // API INTEGRATION: PUT /api/user/profile
  // Request: UserProfile object
  // Response: { success: boolean, user: UserProfile }
  
  // VALIDATION: Email format, phone number format
  // IMAGE UPLOAD: Avatar via separate endpoint
  // PASSWORD CHANGE: Separate endpoint for security
  
  // FRONTEND STATE: Update global auth context on success
  
  try {
    const response = await updateUserProfile(profileData);
    // Update auth context
    setUser(response.user);
  } catch (error) {
    // Handle error
  }
};
```

### Address Management

```typescript
// src/pages/settings/SavedAddresses.tsx
const saveAddress = async (address: Address) => {
  // API INTEGRATION: POST /api/user/addresses
  // Request: Address object
  // Response: { success: boolean, address: Address }
  
  // BUSINESS LOGIC: User can have multiple addresses
  // One default address per user
  // Address validation via external service (optional)
  
  // FRONTEND STATE: Add to local addresses array
  // If set as default, update other addresses
  
  if (address.isDefault) {
    // Update other addresses to not be default
    setAddresses(prev => prev.map(addr => ({ ...addr, isDefault: false })));
  }
  
  setAddresses(prev => [...prev, address]);
};
```

## 📊 Data Flow Comments

Add these types of comments to explain data flow:

```typescript
// COMPONENT LIFECYCLE:
// 1. Mount -> Fetch user data
// 2. User data -> Fetch orders
// 3. Orders -> Group by status
// 4. Render -> Show loading states

// STATE DEPENDENCIES:
// - User authentication required
// - Cart data synced with server
// - Real-time updates via WebSocket

// ERROR HANDLING:
// - Network errors: Show retry button
// - Auth errors: Redirect to login
// - Validation errors: Show inline messages
```

## 🎯 Implementation Strategy

### Where to Add Comments

1. **API Call Functions** - Document endpoints and data structures
2. **useEffect Hooks** - Explain data fetching logic
3. **Event Handlers** - Document user interactions and API calls
4. **State Updates** - Explain complex state transformations
5. **Business Logic** - Clarify rules and validations

### Comment Template

```typescript
// API INTEGRATION: [METHOD] [ENDPOINT]
// Request: [Data structure]
// Response: [Data structure]
// [Additional requirements/notes]

// BUSINESS LOGIC: [Explanation of rules]

// FRONTEND STATE: [How data is managed]

// VALIDATION: [Frontend validation rules]

// ERROR HANDLING: [How errors are handled]
```

This strategy will make it much easier for backend developers to understand your requirements and implement the necessary endpoints efficiently.
