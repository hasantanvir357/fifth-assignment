import { useState } from 'react';
import logo from '../assets/logo-text.png';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('Home');

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 md:hidden w-full">
          <div className="flex items-center justify-start z-20">
            <div className="dropdown">
              <label
                tabIndex={0}
                role="button"
                className="p-1 cursor-pointer flex items-center justify-center text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu mt-3 z-30 p-3 shadow-xl bg-white rounded-box w-52 text-sm border border-gray-100"
              >
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setActiveNav(item.name)}
                      className={activeNav === item.name ? 'text-pink-600 font-semibold' : 'text-gray-700'}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center pointer-events-none">
            <a href="#" className="pointer-events-auto flex items-center">
              <img src={logo} alt="DevStack Logo" className="h-6 sm:h-7 w-auto object-contain block max-w-none" />
            </a>
          </div>

          <div className="flex items-center justify-end gap-1.5 shrink-0 z-20">
            <button
              type="button"
              className="text-xs font-medium text-gray-700 hover:text-pink-600 px-1 py-1 whitespace-nowrap"
            >
              Sign In
            </button>
            <button
              type="button"
              className="text-xs font-medium text-white bg-pink-600 hover:bg-pink-700 px-3 py-1.5 rounded-full whitespace-nowrap shadow-sm"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <img src={logo} alt="DevStack Logo" className="h-8 w-auto object-contain" />
          </a>

          <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setActiveNav(item.name)}
                  className={`transition-colors ${
                    activeNav === item.name ? 'text-pink-600 font-semibold' : 'text-gray-600 hover:text-pink-600'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/*  Buttons */}
          <div className="flex items-center gap-4">
            <button type="button" className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors">
              Sign In
            </button>
            <button
              type="button"
              className="text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 px-5 py-2 rounded-full shadow-sm transition-all"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
