import React from 'react';

export default function Hero() {

  return (
    <section className="bg-[#282A35] min-h-[600px] mt-[52px] w-full flex flex-col justify-between">
    
       
      <div className="flex-grow flex items-center justify-center pt-24 pb-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center">
          <h1 className="text-white font-bold text-4xl sm:text-5xl">Learn to Code</h1>
          <p className="font-semibold sm:text-2xl text-yellow-200">With the world's largest web developer site.</p>
          <div className="m-1 flex justify-between bg-white w-full max-w-[420px] rounded-xl overflow-hidden shadow-md">
            <input type="text" className="p-3 outline-none w-full text-lg" placeholder="Search our tutorials, e.g. HTML" />
            <button className="bg-green-600 text-2xl px-6 text-white hover:bg-green-500">
              <i className="ri-search-line"></i>
            </button>
          </div>
          <a className="font-semibold border-b-2 text-white sm:text-xl hover:text-yellow-200 mt-2" href="#">Not Sure Where To Begin</a>
        </div>
      </div>
    </section>
  );
}