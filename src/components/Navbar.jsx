import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-4 container">
      <img src="public/Assets/logo.svg" alt="Logo" className="w-120h-6" />
      <div className='text-xl space-x-4' >
        <a href="index.html">Collections</a>
        <a href="products.html">Men</a>
        <a href="contact.html">Women</a>
        <a href="about.html">About</a>
      </div>
      <span className='flex space-x-6'>
        <img src="public/Assets/icon-cart.svg" alt="Cart" className="w-6 h-6" />
        <img src="public/Assets/image-avatar.png" alt="Avatar" className="w-8 h-8 rounded-full" />
      </span>
    </nav>
  );
}

export default Navbar