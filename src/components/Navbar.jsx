import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-4 container font-com ">
      <img src="public/Assets/logo.svg" alt="Logo" className="w-120h-6" />
      <div className='text-xl space-x-4' >
        <a href="index.html" className='hover:text-primary'>Collections</a>
        <a href="products.html" className='hover:text-primary'>Men</a>
        <a href="contact.html" className='hover:text-primary'>Women</a>
        <a href="about.html" className='hover:text-primary'>About</a>
      </div>
      <span className='flex space-x-6'>
        <img src="public/Assets/icon-cart.svg" alt="Cart" className="w-6 h-6" />
        <img src="public/Assets/image-avatar.png" alt="Avatar" className="w-8 h-8 rounded-full" />
      </span>
    </nav>
  );
}

export default Navbar