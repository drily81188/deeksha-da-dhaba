import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="bg-gray-900">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-around h-16">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-300">
                <span className="sr-only">Home</span>
                <Link to="/">
                  <img
                    width={"30%"}
                    src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_300,h_300/https://www.deekshagc.com/wp-content/uploads/2019/04/logo-deeksha-300x300.png"
                    alt=""
                    srcset=""
                  />
                </Link>
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav
                className="hidden md:block"
                aria-labelledby="header-navigation"
              >
                <h2 className="sr-only" id="header-navigation">
                  Header navigation
                </h2>

                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className="text-white transition hover:text-white/75">
                      Deeksha-da-dhaba
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-white/75">
                      investor-relations
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-white/75">
                      Add_resturant
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-white/75"></a>
                  </li>
                </ul>
              </nav>

              <div className="flex">
                <span>
                  <Link to="/login">
                    <a className="block p-6 border-b-4 border-transparent hover:border-red-700 text-sky-400">
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>

                      <span className="sr-only"> Account</span>
                    </a>
                  </Link>
                </span>

                <span className="hidden sm:block">
                  <a className="block p-6 border-b-4 border-transparent hover:border-red-700 text-sky-400">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>

                    <span className="sr-only"> Search </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
