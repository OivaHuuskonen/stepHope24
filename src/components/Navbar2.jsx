import { useState } from 'react';
import {
  FaBars,
  FaTimes,
//  FaGithub,
//  FaLinkedin,
//   FaFacebook,
  //FaLinkedinIn,
} from 'react-icons/fa';
//import { HiOutlineMail } from 'react-icons/hi';
//import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import acasm from '../assets/acasm.jpg';
//import acalogo from '../assets/acalogo.jpg';
//import whatsup from '../assets/whatsup.png';

{/*const Navbar = () => {
    const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (

    < className='fixed w-screen flex justify-between items-center pb-30 px-4 bg-[#fdebd3] text-[#264e70]'>
    <div className="pt-5 pl-2">
        <img className="rounded-full w-16 sm:w-20 md:w-24 lg:w-32 h-auto" src={acasm} alt='aca logo' />
    </div>

    {/* menu */}
    <ul className='hidden md:flex'>
      <li>
        <Link to='home' smooth={true} duration={500}>
          Etusivu
        </Link>
      </li>
      <li>
        <Link to='about' smooth={true} duration={500}>
          ACA
        </Link>
      </li>
      <li>
        <Link to='skills' smooth={true} duration={500}>
          12 askelta
        </Link>
      </li>
      <li>
        <Link to='work' smooth={true} duration={500}>
          AAL.fi
        </Link>
      </li>
      <li>
        <Link to='contact' smooth={true} duration={500}>
          Yhteystiedot
        </Link>
      </li>
    </ul>

    {/* Hamburger */}
    <div onClick={handleClick} className='md:hidden z-10'>
      {!nav ? <FaBars /> : <FaTimes />}*/}
    </div>

    {/*Mobile menu*/}
   {/*} <ul
      className={
        !nav
          ? 'hidden'
          : 'absolute top-0 left-0 w-screen h-screen bg-[#fdebd3] flex flex-col justify-center items-center'
        }
    >
      <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
          Etusivu
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
          ACA
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
          12 askelta
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='work' smooth={true} duration={500}>
          AAL.fi
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
          Yhteystiedot
        </Link>
      </li>
    </ul>*/}

    {/*Social icons

    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                
      </div>
      <ul>
       <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FFFFFF]'> 
          <a className='flex justify-between items-center w-full text-gray-300' href='/'>
            ACA <img className="rounded-full h-12 w-12 ml-4" src={acalogo} alt='aca logo' style={{ transform: 'translateX(10px)' }}  />
          </a>
        </li>

  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1E90FF]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              Facebook <FaFacebook size={30} />
          </a>
        </li>

     <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#25D366]'>
      <a className='flex justify-between items-center w-full text-gray-300' href='/'>
        Whats up <img className='h-12 w-12' src={whatsup} alt='whatsup' style={{ transform: 'translateX(10px)' }} /> 
      </a>
     </li>

    </ul>
   </div>*/}
 {/*</div>
  )
}

export default Navbar*/}


import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import acasm from '../assets/acasm.jpg';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-screen flex justify-between items-center pb-30 px-4 bg-[#fdebd3] text-[#264e70]'>
            <div className="pt-5 pl-2">
                <img className="rounded-full w-16 sm:w-20 md:w-24 lg:w-32 h-auto" src={acasm} alt='aca logo' />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Etusivu
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        ACA
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        12 askelta
                    </Link>
                </li>
                <li>
                    <a href="https://www.aal.fi/" target="_blank" rel="noopener noreferrer">
                        AAL.fi
                    </a>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Yhteystiedot
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/*Mobile menu*/}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-screen h-screen bg-[#fdebd3] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Etusivu
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        ACA
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        12 askelta
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="https://www.aal.fi/" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
                        AAL.fi
                    </a>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Yhteystiedot
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;

