import React, { useState } from 'react';


export default function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white text-black fixed top-0 left-0 right-0 p-1 flex items-center justify-between font-['Poppins'] z-50 shadow-sm">
        {!isSearchActive && (
          <img className="h-11 w-12 sm:h-12 md:h-12 sm:w-14 md:w-14" src="/logo.png" alt="Alibros Logo" />
          
          
        )}

        {!isSearchActive && (
          <button onClick={() => setIsMenuOpen(true)} className="block sm:hidden md:hidden hover:bg-green-600 p-2 hover:text-white rounded text-left">
            Menu <i className="ri-arrow-down-s-fill"></i>
          </button>
        )}

        <div className="hidden sm:flex md:flex items-center gap-1">
          <a className="hover:bg-green-600 p-2 hover:text-white rounded" href="#">Tutorials <i className="ri-arrow-down-s-fill"></i></a>
          <a className="hover:bg-green-600 p-2 hover:text-white rounded" href="#">References <i className="ri-arrow-down-s-fill"></i></a>
          <a className="hover:bg-green-600 p-2 hover:text-white rounded" href="#">Exercises <i className="ri-arrow-down-s-fill"></i></a>
          <a className="hover:bg-green-600 p-2 hover:text-white rounded" href="#">Certificates <i className="ri-arrow-down-s-fill"></i></a>
        </div>

        <div className="border hover:border-green-500 hover:border-2 bg-white flex items-center border-black rounded-md">
          <input className={`${isSearchActive ? 'block' : 'hidden sm:block md:block lg:block'} p-2 rounded-md border-none outline-none`} type="text" placeholder="Search..." />
          <i onClick={() => setIsSearchActive(true)} className="ri-search-line bg-white text-2xl p-1 rounded-md cursor-pointer"></i>
        </div>

        {isSearchActive && <button onClick={() => setIsSearchActive(false)} className="text-4xl ri-close-line p-1"></button>}

        <i className="hidden sm:block md:block ri-more-2-fill text-3xl cursor-pointer"></i>

        <div className="hidden sm:flex md:flex items-center gap-1">
          <a className="hover:bg-green-600 p-2 hover:text-white rounded" href="#">Spaces</a>
          <a className="hover:bg-green-600 p-2 hover:text-white rounded" href="#">Teachers</a>
          <a className="hover:bg-green-600 p-2 hover:text-white rounded" href="#">Upgrade</a>
          <a className="hover:bg-green-600 p-2 hover:text-white rounded" href="#">Get Certified</a>
        </div>

        {!isSearchActive && (
          <a href="#" className="bg-green-500 p-2 sm:font-semibold rounded-md text-blue-800 flex items-center gap-1">
            <i className="ri-logout-box-r-line"></i> Logout
          </a>
        )}
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-white z-50 p-5 mt-[52px] ${isMenuOpen ? 'block' : 'hidden'}`}>
        <button onClick={() => setIsMenuOpen(false)} className="text-5xl ri-close-line absolute right-5 top-2"></button>
        <div className="flex flex-col gap-2 mt-12">
          <a className="text-xl border-b pb-2 border-b-gray-200 hover:bg-green-600 p-2 hover:text-white flex justify-between items-center" href="#">Tutorials <i className="ri-arrow-down-s-fill"></i></a>
          <a className="text-xl border-b pb-2 border-b-gray-200 hover:bg-green-600 p-2 hover:text-white flex justify-between items-center" href="#">References <i className="ri-arrow-down-s-fill"></i></a>
          <a className="text-xl border-b pb-2 border-b-gray-200 hover:bg-green-600 p-2 hover:text-white flex justify-between items-center" href="#">Exercises <i className="ri-arrow-down-s-fill"></i></a>
          <a className="text-xl border-b pb-2 border-b-gray-200 hover:bg-green-600 p-2 hover:text-white flex justify-between items-center" href="#">Certificates <i className="ri-arrow-down-s-fill"></i></a>  
        </div>
      </div>
    </>
  );
}