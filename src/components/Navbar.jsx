import React, { useState } from 'react';
import {Link}  from 'react-scroll';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Navbar = ({nav,logo,setNav,setLogo}) => {

    
    const handleNav = () => {
      setNav(!nav);
      setLogo(!logo);
    };
    return (
      <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 ">
        <div>
          <h1 onClick={handleNav} className={`cursor-pointer hover:text-white {logo ? "hidden" : "block"}`}>
            BackPacks
          </h1>
        </div>
        <ul className="hidden md:flex cursor-pointer">
          <li className='hover:border-b-2 border-yellow-300 hover:text-white'><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
          <li className='hover:border-b-2 border-yellow-300 hover:text-white'><Link to="destination" spy={true} smooth={true} offset={50} duration={500}>Destinations</Link></li>
          <li className='hover:border-b-2 border-yellow-300 hover:text-white'><Link to="search" spy={true} smooth={true} offset={50} duration={500}>Travel</Link></li>
          <li className='hover:border-b-2 border-yellow-300 hover:text-white'><Link to="selects" spy={true} smooth={true} offset={50} duration={500}>View</Link></li>
          <li className='hover:border-b-2 border-yellow-300 hover:text-white'><Link to="footer" spy={true} smooth={true} offset={50} duration={500}>Book</Link></li>
        </ul>
        <div className="hidden md:flex">
          <BiSearch className="" size={20} />
          <BsPerson size={20} />
        </div>
        {/* Hamburger */}
        <div onClick={handleNav} className="md:hidden z-10">
          {nav ? (
            <AiOutlineClose className="text-black" size={20} />
          ) : (
            <HiOutlineMenuAlt4 size={20} />
          )}
        </div>

        {/* Mobile menu dropdown */}
        <div
          // onClick={handleNav}
          className={
            nav
              ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col md:w-[400px]"
              : "absolute left-[-100%]"
          }
        >
          <ul className='cursor-pointer'>
            
            <h1>BackPacks</h1>
            <Link to="hero" spy={true} smooth={true} offset={50} duration={500}><li className='hover:border-b-2 border-yellow-300 hover:font-bold'>Home</li></Link>
          <Link to="destination" spy={true} smooth={true} offset={50} duration={500}><li className='hover:border-b-2 border-yellow-300 hover:font-bold'>Destinations</li></Link>
          <Link to="search" spy={true} smooth={true} offset={50} duration={500}><li className='hover:border-b-2 border-yellow-300 hover:font-bold'>Travel</li></Link>
          <Link to="selects" spy={true} smooth={true} offset={50} duration={500}><li className='hover:border-b-2 border-yellow-300 hover:font-bold'>View</li></Link>
          <Link to="footer" spy={true} smooth={true} offset={50} duration={500}><li className='hover:border-b-2 border-yellow-300 hover:font-bold'>Book</li></Link>
          
            <div className="flex flex-col">
              <button className="my-6">Search</button>
              <button>Account</button>
            </div>
            <div className="flex justify-between my-6">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaPinterest className="icon" />
              <FaInstagram className="icon" />
            </div>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;