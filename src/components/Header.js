import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-transparent text-white">
      <nav className="container mx-auto p-5 flex justify-between items-center">
        <div className="text-2xl font-bold">My Portfolio</div>
        <ul className="flex space-x-6 text-lg">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#work" className="hover:underline">Work</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
