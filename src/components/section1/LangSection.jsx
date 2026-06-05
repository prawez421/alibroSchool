import React from 'react';

export default function LangSection({ title, subtitle, bg, code, demoLink, btnColor }) {
  return (
    <section className={`${bg} min-h-[500px] flex flex-col md:flex-row p-6 md:p-12 items-center justify-center gap-8`}>
      <div className="w-full md:w-1/2 flex flex-col gap-4 items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold">{title}</h1>
        <p className="font-medium text-lg">{subtitle}</p>
        <button className="bg-green-500 hover:bg-green-400 p-2 rounded-3xl font-medium text-white w-40">Learn {title}</button>
        <button className="bg-sky-900 hover:bg-sky-700 p-2 rounded-3xl font-medium text-white w-40">{title} References</button>
        <button className="bg-[#f48f99] hover:bg-[#f7a1aa] p-2 rounded-3xl font-medium text-white w-40">Get Certified</button>
      </div>
      <div className="hidden sm:flex md:flex w-full md:w-1/2 justify-center">
        <div className="bg-[#ededee] flex flex-col gap-3 w-full max-w-[430px] p-4 rounded-md shadow-lg">
          <h1 className="font-semibold text-2xl">{title} Example :</h1>
          <div className="bg-white p-3 border-l-[5px] border-green-600 overflow-x-auto rounded-r">
            <pre className="text-red-400 font-mono text-sm leading-relaxed">{code}</pre>
          </div>
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-400 text-white p-2 rounded-3xl font-semibold text-xl text-center block w-44 mt-2">Try it Yourself</a>
        </div>
      </div>
    </section>
  );
}