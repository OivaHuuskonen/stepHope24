import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import acasm from '../assets/acasm.jpg';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-screen flex justify-between items-center pb-30 px-4 bg-[#fdebd3] text-[#000000]'>
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
                <li className='py-6 text-4xl text-[#679186]'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Etusivu
                    </Link>
                </li>
                <li className='py-6 text-4xl  text-[#679186]'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        ACA
                    </Link>
                </li>
                <li className='py-6 text-4xl  text-[#679186]'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        12 askelta
                    </Link>
                </li>
                <li className='py-6 text-4xl  text-[#679186]'>
                    <a href="https://www.aal.fi/" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
                        AAL.fi
                    </a>
                </li>
                <li className='py-6 text-4xl  text-[#679186]'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Yhteystiedot
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
