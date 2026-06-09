import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from'../../data/Sidebar';

function HtmlIntroduction() {

  return (
    <section className="flex bg-white  mt-[90px] w-full">
      {/* Sidebar Section */}
      <div className={`sidebar scrollbar-thin cursor-pointer sticky top-[90px] bg-[#eae9e9] flex flex-col gap-2 py-4 h-[calc(100vh-90px)] sm:w-[25%]  overflow-y-auto z-20 }`}>
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <section className="sm:px-8 py-10 sm:w-full w-full pl-4">
        {/* Top Header Controls */}
        <div className="bg-white py-10 flex justify-between px-3 sm:px-10 items-end border-b pb-12 border-[#d8d8d8]">
          <div className="p-2 ">
            <h1 className="font-medium pb-4 text-2xl sm:text-4xl">HTML Introduction</h1>
            <a href="/" className="flex items-center bg-green-600 hover:bg-green-500 w-[100px] py-1 rounded-md font-semibold text-white justify-center">
              <i className="ri-arrow-drop-left-line text-3xl"></i>Home
            </a>
          </div>
          <div>
            <i className="ri-bookmark-line ml-16 text-green-500 cursor-pointer hover:text-green-400 text-3xl"></i>
            <a href='/HtmlIntroduction' className="flex items-center mt-16 bg-green-600 hover:bg-green-500 py-1 px-2 rounded-md font-semibold text-white justify-center">
              Next<i className="ri-arrow-drop-right-line text-3xl"></i>
            </a>
          </div>
        </div>

        {/* Learn HTML Content */}
        <div className="p-8 rounded-md">
          <h1 className="text-3xl font-semibold mb-4">Learn HTML</h1>
          <p className="mb-3 text-lg">HTML is the standard markup language for creating Web pages.</p>
          <p className="mb-3 text-lg">HTML stands for Hyper Text Markup Language.</p>
          <p className="mb-3 text-lg">HTML describes the structure of a Web page.</p>
          <p className="mb-3 text-lg">HTML consists of a series of elements.</p>
          <p className="mb-6 text-lg">HTML elements tell the browser how to display the content.</p>

          <button className="bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded-md">
            Start learning HTML now »
          </button>
        </div>

        {/* Code Example Section */}
        <div className="bg-[#ededee] h-auto flex flex-col gap-3 p-4 rounded-md shadow-lg max-w-4xl">
          <h1 className="font-semibold text-2xl">HTML Example :</h1>
          <div className="bg-white mt-3 p-4 border-l-[5px] border-green-600 overflow-x-auto">
            <pre className="font-mono text-sm leading-relaxed">
              {"<"}<span className="text-black/50">!DOCTYPE html</span>{">\n"}
              {"<"}<span className="text-[#990070]">html</span>{">\n"}
              {"<"}<span className="text-[#990070]">head</span>{">\n"}
              {"<"}<span className="text-[#990070]">title</span>{">HTML Tutorial</"}<span className="text-[#990070]">title</span>{">\n"}
              {"</"}<span className="text-[#990070]">head</span>{">\n"}
              {"<"}<span className="text-[#990070]">body</span>{">\n\n"}
              {"  <"}<span className="text-[#990070]">h1</span>{">This is a heading</"}<span className="text-[#990070]">h1</span>{">\n"}
              {"  <"}<span className="text-[#990070]">p</span>{">This is a paragraph.</"}<span className="text-[#990070]">p</span>{">\n\n"}
              {"</"}<span className="text-[#990070]">body</span>{">\n"}
              {"</"}<span className="text-[#990070]">html</span>
            </pre>
          </div>
          <a
            href="https://onecompiler.com/html/44kbj9r7g"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-400 w-[160px] text-white p-2 text-center rounded-3xl font-semibold text-lg mt-2 block"
          >
            Try it Yourself
          </a>
        </div>
        <p className="font-bold py-6">Click on the "Try it Yourself" button to see how it works.</p>

        {/* Note Box */}
        <div className="bg-[#FFFFCC] p-7 border-l-4 border-yellow-500 max-w-4xl">
          <h1 className="font-semibold text-lg">! Note</h1>
          <p className="font-medium mt-2">This is an optional feature. You can study at W3Schools without creating an account.</p>
        </div>
      </section>
    </section>
  );
}

export default HtmlIntroduction;