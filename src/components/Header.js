import React from 'react';
import Logo2 from "../assets/name-logo.png";
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <img src={Logo2} alt='' className='max-w-[90px]'/>
          <button className='text-black btn btn-sm'>
            <Link
              to='services'
              smooth={true}
            >
              Work with me
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
