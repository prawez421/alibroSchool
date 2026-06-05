import React from 'react';

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="relative z-10 text-white  bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAgjR2xawDNQ5zkg_krPambEOk1u4RoYBDNQ&s')" }}>
        <div className="bg-black bg-opacity-75 p-8 md:p-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-3">
              <img className="rounded-full h-20 w-20 object-cover border-2 border-green-500" src="./public/ABSchool.jpeg" alt="Logo" />
              <h1 className="text-2xl font-bold">Alibros School</h1>
              <p className="text-gray-300 text-sm">Learn coding in a simple and effective way.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-1 w-fit">Quick Links</h2>
              <ul className="flex flex-col gap-2 text-gray-300 text-sm">
                {['HTML', 'CSS', 'C++', 'Javascript', 'PHP'].map((t) => <li key={t}><a href="#" className="hover:text-green-400">{t} Tutorial</a></li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-1 w-fit">Courses</h2>
              <ul className="flex flex-col gap-2 text-gray-300 text-sm">
                {['Web Development', 'Frontend', 'Backend', 'Full Stack'].map((c) => <li key={c}><a href="#" className="hover:text-green-400">{c}</a></li>)}
              </ul>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <h2 className="text-xl font-semibold mb-2 text-white border-b border-gray-700 pb-1 w-fit">Contact Us</h2>
              <p><i className="ri-map-pin-line text-green-500"></i> India</p>
              <p><i className="ri-mail-line text-green-500"></i> support@alibros.com</p>
              <div className="flex gap-4 text-2xl mt-4 text-white">
                <i className="ri-facebook-fill hover:text-blue-500 cursor-pointer"></i>
                <i className="ri-instagram-line hover:text-pink-500 cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}