import React from 'react'

export default function Navbar() {
  return (
    <div className=''>
      {/* <nav className="absolute bg-neutral-100 dark:bg-neutral-500 border border-black rounded-sm p-4"> */}
<nav className="sticky top-0 z-50 backdrop-blur-md bg-neutral-100/80 border border-black">
        <div className="max-md:container mx-auto flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-4">
            
            <button
              data-type="toggle"
              data-target="#main-nav2"
              className="[&.show_.bi-list]:hidden [&.show_.bi-x]:block lg:hidden text-4xl text-black dark:text-white focus:outline-none"
            >
              <i className="block pointer-events-none bi bi-list"></i>
              <i className="hidden pointer-events-none bi bi-x"></i>
            </button>

            <a
              href="#"
              className="text-2xl font-black flex items-center gap-1.5 pt-2 pb-2.5 px-3"
            >
              <div className="w-8 h-8 rounded-sm border text-black bg-lime-200 border-black shadow-[3px_3px_0_0_#000000] flex items-center justify-center">
                B
              </div>
              <span className="hidden md:inline">rutalism</span>
            </a>
          </div>

          {/* CENTER NAV */}
          <ul
            id="main-nav2"
            className="max-lg:[&.show]:block max-lg:hidden max-lg:w-full max-lg:absolute max-lg:top-full max-lg:left-0 max-lg:py-2 max-lg:bg-black max-lg:rounded-b-lg max-lg:z-10 max-lg:text-white flex flex-col lg:flex-row lg:items-center lg:gap-6"
          >
            <li className="relative">
              <a href="#" className="active flex py-2 px-3 hover:text-lime-600">
                Home
              </a>
            </li>

            <li className="relative">
              <a href="#" className="flex py-2 px-3 hover:text-lime-600">
                About
              </a>
            </li>

            <li className="relative">
              <button
                data-type="dropdown"
                data-target="#subdrop1"
                className="flex items-center gap-2 w-full py-2 px-3 hover:text-lime-600"
              >
                Services
                <i className="ms-auto bi bi-chevron-down"></i>
              </button>

              <ul
                id="subdrop1"
                data-type="dropdownmenu"
                className="[&.show]:flex hidden flex-col lg:absolute lg:z-10 lg:w-40 lg:top-full lg:right-0 lg:bg-neutral-100 dark:lg:bg-neutral-500 lg:border lg:border-black lg:rounded-lg"
              >
                <li>
                  <a href="#" className="block py-2 px-4 hover:text-lime-600">
                    Seo package
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 hover:text-lime-600">
                    Web Design
                  </a>
                </li>
              </ul>
            </li>

            <li className="relative">
              <a href="#" className="flex py-2 px-3 hover:text-lime-600">
                Contact
              </a>
            </li>
          </ul>

          {/* RIGHT CTA */}
          <a
            href="#"
            className="py-2.5 px-5 inline-flex items-center gap-x-2 rounded-sm text-sm font-medium border border-black bg-lime-200 hover:bg-lime-300 text-black"
          >
            <i className="bi bi-cart"></i>
            <span className="hidden md:inline">Contact us</span>
          </a>

        </div>
      </nav>
    </div>
  )
}