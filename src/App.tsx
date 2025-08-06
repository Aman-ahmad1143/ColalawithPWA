// import { useState } from 'react'
import './App.css'
import Header from './pages/layout/header';
import PWABadge from './PWABadge';


function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Welcome to Colala Mall</h1>
          <p>Your one-stop shopping destination</p>
        </div>
      </main>
      
      {/* PWA Badge */}
      <PWABadge />
    </>
  );
}

export default App
