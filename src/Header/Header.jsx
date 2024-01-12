import React from 'react';
import logo from '../assets/images/logotipo-Oskar.png';
import { Link} from "react-scroll";


function Header() {
  return (
    <>
    <div className='flex flex-col justify-between md:flex md:justify-around xl:flex-row xl:mt-14 '>
  <div className='w-40 md:w-68 xl:w-200 xl:ml-0'>
    <img src={logo} alt="logo" className='w-90 xl:w-60 xl:absolute' />
  </div>
  <div></div>
  <div className='mt-6  md:flex xl:mt-4 mx-2 xl:ml-0 border-y-4 border-black py-4 '>
    <ul className=' flex font-letter1  justify-around md:flex-row md:justify-evenly xl:flex-row xl:mr-52 lg:justify-evenly'>
    <li>
  <Link to="About-section">
    <button className='mb-2 md:text-2xl md:mb-0 md:mr-32 md:px-0 xl:mb-0 xl:mr-20 xl:w-full'>
      <h1>ABOUT ME</h1>
    </button>
  </Link>
</li>
<li>
  <Link to="Skills-section">
    <button className='mb-2 md:text-2xl md:mb-0 md:mr-32 xl:mb-0 xl:w-full'>
      <h1>SKILLS</h1>
    </button>
  </Link>
</li>
<li>
  <Link to="Projects-section">
    <button className='mb-2 md:-mx-10 md:text-2xl md:mb-0 md:mr-32 xl:w-full'>
      <h1>PROJECT</h1>
    </button>
  </Link>
</li>
<li>
  <Link to="Contact-section">
    <button className='mb-2 md:text-2xl md:mb-0 md:mr-32 xl:w-full'>
      <h1>CONTACT</h1>
    </button>
  </Link>
</li>

  </ul>
</div>
    </div>
    <div className='justify-center text-center '>
    <h1 className='text-4xl mt-10  md:text-6xl md:ml-28 md:mt-16  lg:text-6xl  text-black text-shadow-sm shadow-gray-950 lg:mr-36 lg:mt-28 font-ab'>OSKAR MORALES</h1>
</div>
    </>
  );
}

export default Header;
