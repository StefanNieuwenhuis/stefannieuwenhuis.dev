import React, { useState } from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import { useSiteRoutes } from '../hooks/useSiteRoutes';

const Navigation = () => {
  const { routes } = useSiteRoutes();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleClick = () => setNavbarOpen(!navbarOpen);

  return (
    <nav>
      <div tw='container mx-auto px-6 py-2 flex flex-wrap justify-between items-center'>
        <Link to='/' tw='font-bold text-2xl lg:text-4xl'>
          Nieuwenhuis IT Consulting
        </Link>
        <div tw='block lg:hidden'>
          <button
            onClick={handleClick}
            tw='flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 appearance-none focus:outline-none'
          >
            <svg
              tw='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div css={[tw` w-full md:w-auto lg:block`, !navbarOpen && tw`hidden`]}>
          <ul tw='inline-flex flex-col w-full md:w-auto lg:flex-row'>
            {routes.map(({ name, path }, idx) => (
              <li key={idx} tw='w-full md:w-auto'>
                <Link
                  tw='px-4 hover:text-gray-800 text-center md:text-left block'
                  activeStyle={{ fontWeight: 'bold' }}
                  to={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
