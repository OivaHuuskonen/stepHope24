import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
//import acasm from '../assets/acasm.jpg';
import aca from '../assets/aca.jpg';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
        // Prevent scrolling when the blurred menu is open
        if (!nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    return (
        <div className='bg-[#fdebd3] fixed w-screen flex justify-between items-center pb-30 px-4'>

            <div className="pt-5 pl-3">
                <img className="rounded-full w-16 sm:w-20 md:w-24 lg:w-32 h-auto" src={aca} alt='aca logo' />
            </div>

            <div className="text-[#000000] pl-2 hidden md:flex"> {/* Render links on larger screens */}
                <ul className='flex'>
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
                        <a href="https://www.aal.fi/toipumisohjelma/12askelta/" target="_blank" rel="noopener noreferrer">
                            12 askelta
                        </a>
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
            </div>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Blurred menu */}
            {nav && (
                <div className='fixed top-0 right-0 w-[60%] max-w-md h-screen bg-[rgba(253, 235, 211, 0.8)] backdrop-filter backdrop-blur-md flex flex-col justify-center items-center'>
                    <ul className='text-[#679186]'>
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
                            <a href="https://www.aal.fi/toipumisohjelma/12askelta/" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
                            12 askelta
                            </a>
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
            )}
        </div>
    );
}

export default Navbar;