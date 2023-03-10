import React from "react";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="mb-[63px]">
      <nav className="bg-white px-2 sm:px-4 py-2.5   fixed w-full z-20 top-0 left-0 border-b border-gray-200  ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <Logo src="/images/logo.svg" />
          </a>
          <div className="flex md:order-2">
            {/* name of person  */}
            <span>John Smith</span>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <form>
              <label
                for="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative  w-[400px]">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2 pl-2 text-sm text-gray-200 border border-gray-200 rounded-md   focus:ring-blue-500 focus:border-blue-500  "
                  placeholder="Search "
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
