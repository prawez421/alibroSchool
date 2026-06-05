import React from 'react';

export default function CardsGrid() {
  const languages = [
    { title: "C", desc: "A Programming Language.", bg: "bg-[#FFC0C7]" },
    { title: "C++", desc: "A Programming Language.", bg: "bg-[#D9EEE1]" },
    { title: "PHP", desc: "A Web Server Programming Language.", bg: "bg-[#E7E9EB]" },
    { title: "MySQL", desc: "A Relational Database Management System. (RDBMS)", bg: "bg-[#FFF4A3]" },
    { title: "Laravel", desc: "A framework used to build web applications in PHP.", bg: "bg-[#D9EEE1]" },
    { title: "CodeIgniter", desc: "A lightweight and fast PHP framework used to develop.", bg: "bg-[#D9EEE1]" },
  ];

  return (
    <section>
    <section className="bg-[#96D4D4] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-12 justify-items-center">
      {languages.map((lang, index) => (
        <div key={index} className={`${lang.bg} w-full max-w-[400px] h-[270px] flex flex-col items-center justify-center gap-4 p-4 rounded-md shadow-sm`}>
          <h1 className="font-bold text-4xl md:text-5xl text-center">{lang.title}</h1>
          <p className="font-semibold text-center text-sm px-2">{lang.desc}</p>
          <a className="font-semibold bg-[#282A35] text-white py-2 px-6 rounded-3xl hover:bg-black" href="#">Learn {lang.title}</a>
        </div>
      ))}

      
    </section>
    {/* Kickstart your Career */}
     <section className="bg-[#282A35] text-white py-12 px-6 sm:px-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-6 w-full md:w-2/3">
          <h1 className="text-[#FFC0C7] font-bold text-3xl sm:text-5xl">Kickstart Your career</h1>
          <h2 className="text-[#FFC0C7] font-bold text-2xl sm:text-4xl">Get certified by completing a course</h2>
          <a className="bg-green-600 hover:bg-green-500 py-3 px-8 w-fit rounded-3xl font-semibold" href="#">Get Started</a>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <img className="h-44 w-44 rounded-full object-cover border-4 border-gray-700 shadow-xl" src="/ABSchool.jpeg" alt="ABSchool Badge" />
        </div>
      </section>
      </section>

    
  );
}