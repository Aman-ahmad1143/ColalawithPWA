
# Colala PWA

A modern Progressive Web App (PWA) e-commerce and services platform built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**. The app features a rich UI, offline support, and a modular architecture for buyers to browse products, services, and stores.

## Features

- **PWA**: Installable, offline-ready, and supports service workers via `vite-plugin-pwa`.
- **Routing**: Client-side navigation with `react-router-dom`.
- **State Management**: Context API for cart and global state.
- **Product & Service Listings**: Browse categories, top products, and services.
- **Cart & Checkout**: Add to cart, grouped by store, and checkout flow.
- **Search**: Text and image-based product search with recent search history.
- **User Authentication**: Login and registration popups (cookie-based session).
- **Responsive UI**: Built with Tailwind CSS for mobile and desktop.
- **ESLint & TypeScript**: Strict linting and type safety.
- **Assets**: Rich set of SVG and PNG assets for categories, products, and UI.

## Project Structure

```
src/
  App.tsx                # Main app with routes
  PWABadge.tsx           # PWA install/update badge
  context/CartContext.tsx
  components/ProductCard.tsx
  pages/
   home/HomePage.tsx
   categories/Categories.tsx
   services/Services.tsx
   cart/Cart.tsx
   SearchPage.tsx
   ... (other feature pages)
  constants.tsx          # Image and icon constants
  assets/                # Static assets
public/                  # Images and icons
```

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Lint code with ESLint

## PWA Configuration

- Uses `vite-plugin-pwa` for service worker, manifest, and offline support.
- Custom badge for install/update prompts.

## Getting Started

1. **Install dependencies**:  
  `npm install`
2. **Run locally**:  
  `npm run dev`
3. **Build for production**:  
  `npm run build`

## Tech Stack

- React 19, TypeScript, Vite
- Tailwind CSS, PostCSS
- ESLint, vite-plugin-pwa
- js-cookie, react-router-dom
