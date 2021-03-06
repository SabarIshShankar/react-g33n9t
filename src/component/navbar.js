import React from 'react';
import 'tailwindcss/tailwind.css';
import './style.css';
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="body">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 body">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <img
                class="h-8"
                src="https://public-acl-shop.s3.ap-south-1.amazonaws.com/LogoBlack.png"
              />
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 13H36.5625V15.6875H7V13Z" fill="black" />
                <path d="M7 19.6875H36.5625V22.375H7V19.6875Z" fill="black" />
                <path d="M7 26.375H36.5625V29.0625H7V26.375Z" fill="black" />
              </svg>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-s uppercase leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Start</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-s uppercase  leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Brands</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-s uppercase  leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Community</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-s uppercase  leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">About Us</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-s uppercase  leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Blog</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-s uppercase  leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2 btn-grad">LOG IN/SIGN UP</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
