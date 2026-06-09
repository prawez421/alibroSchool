import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('HTML HOME');

  const sidebarLinks = [
    { name: 'HTML HOME', path: '/htmlHome' },
    { name: 'HTML Introduction', path: '/htmlIntroduction'},
    { name: 'HTML Editors', path: '#' },
    { name: 'HTML Basic', path: '#' },
    { name: 'HTML Element', path: '#' },
    { name: 'HTML Attributes', path: '#' },
    { name: 'HTML Heading', path: '#' },
    { name: 'HTML Paragraphs', path: '#' },
    { name: 'HTML Styles', path: '#' },
    { name: 'HTML Formatting', path: '#' },
    { name: 'HTML Quotation', path: '#' },
    { name: 'HTML comments', path: '#' },
    { name: 'HTML Colors', path: '#' },
    { name: 'HTML CSS', path: '#' },
    { name: 'HTML Links', path: '#' },
    { name: 'HTML images', path: '#' },
    { name: 'HTML Favicon', path: '#' },
    { name: 'HTML Page Title', path: '#' },
    { name: 'HTML Tables', path: '#' },
    { name: 'HTML Lists', path: '#' },
    { name: 'HTML Block & Inline', path: '#' },
    { name: 'HTML Div', path: '#' },
    { name: 'HTML Classes', path: '#' },
    { name: 'HTML Id', path: '#' },
    { name: 'HTML Buttons', path: '#' },
    { name: 'HTML Iframes', path: '#' },
    { name: 'HTML JavaScript', path: '#' },
    { name: 'HTML File Paths', path: '#' },
    { name: 'HTML Head', path: '#' },
    { name: 'HTML Layout', path: '#' },
    { name: 'HTML Responsive', path: '#' },
    { name: 'HTML Computerxode', path: '#' },
    { name: 'HTML Semantics', path: '#' },
    { name: 'HTML Style Guide', path: '#' },
    { name: 'HTML Entities', path: '#' },
    { name: 'HTML Symbols', path: '#' },
    { name: 'HTML Charsets', path: '#' },
    { name: 'HTML URL Encode', path: '#' },
    { name: 'HTML vs. XHTML', path: '#' },
  ];

  return (
    <div className="sidebar scrollbar-thin sticky top-[90px] bg-[#eae9e9] flex flex-col gap-2 py-4  overflow-y-auto z-20">
      <h1 className="font-semibold text-lg pl-4">HTML Tutorial</h1>

      {sidebarLinks.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          onClick={() => setActiveLink(link.name)}
          className={`font-medium text-sm hover:bg-green-500 hover:text-white w-full p-[2px] pl-4 transition-colors ${
            activeLink === link.name
              ? 'bg-green-500 text-white'
              : 'text-black'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;