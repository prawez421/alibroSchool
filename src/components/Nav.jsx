import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

  const techs = [
    'HTML',
    'CSS',
    'C',
    'C++',
    'JAVASCRIPT',
    'PHP',
    'MySQL',
    'Laravel',
    'CodeIgniter'
  ];

  return (
    <section className="bg-[#282A35]  w-full flex flex-col justify-between">

      <nav className="fixed top-[52px] right-0 left-0 bg-[#282A35] text-white font-bold text-lg flex px-3 gap-4 sm:gap-[66px] overflow-x-auto whitespace-nowrap z-40">

        {techs.map((tech) => (

          <Link
            key={tech}
            className="hover:bg-black p-2 flex-shrink-0"
            to={tech === 'HTML' ? "/htmlHome" : "/"}
          >
            {tech}
          </Link>

        ))}

      </nav>

    </section>
  );
}
