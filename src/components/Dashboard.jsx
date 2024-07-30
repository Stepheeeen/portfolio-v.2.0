import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Twitter from '../assets/icon/TwitterIcon.svg'
import Github from '../assets/icon/GithubIcon.svg'
import Instagram from '../assets/icon/InstagramIcon.svg'
import Hamburger from '../assets/icon/HamburgerIcon.svg'

const Dashboard = ({ children, bgImage, navStyle, footerStyle}) => {
    const location = useLocation();
    const pathname = location.pathname;

    const links = [
        { name: '_hello', path: '/' },
        { name: '_about-me', path: '/_about-me' },
        { name: '_projects', path: '/projects' },
    ];

    const footerLinks = [
        { name: <img src={Twitter} className='' />, path: '#' },
        { name: <img src={Instagram} className='' />, path: '#' },
        { name: <img src={Github} className='' />, path: 'https://github.com/stepheeeen', visible: 'md:hidden' },
    ];

    return (
        <div className={`relative bg-[#011627] w-[95.6%] md:w-[98%] m-auto h-[95vh] rounded border-2 border-[#1E2D3D] overflow-hidden`}>
            <nav className={`absolute w-full h-[45px] border border-1 border-[#1E2D3D] top-0 left-0 z-10 bg-inherit flex items-center justify-between ${navStyle}`}>
                <div className='h-full flex items-center font-[500] text-[14px]'>
                    <div className='flex items-center justify-between md:border md:border-1 md:border-[#1E2D3D] p-[11px] w-[97vw] md:w-[250px] text-[#607B96]'>
                        <Link to='/'>Stephen-Onucheyo</Link>
                        <button className=' mr-2 md:hidden'>
                            <img src={Hamburger} className='mr-1' />
                        </button>
                    </div>
                    <ul className='hidden md:flex'>
                        {links.map((link, i) => (
                            <li key={i}>
                                <Link to={link.path} className={`border border-1 border-[#1E2D3D] p-[12px] w-[130px] ${pathname === link.path ? 'text-white  active' : 'text-[#607B96] hover:text-[#d7d7d7c2]'}`}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
                <div>
                    <Link to='/contact' className={`hidden md:block border border-1 border-[#1E2D3D] p-[10px] w-[130px] hover:text-[#d7d7d7c2] ${pathname === '/contact' ? 'text-white' : 'text-[#607B96]'}`}>
                        _contact-me
                    </Link>
                </div>
            </nav>
            <section className={`pt-[46px] pb-[33px] p-3 ${bgImage}`}>
                {children}
            </section>
            <footer className={`absolute w-full h-[33px] border border-1 border-[#1E2D3D] bottom-0 left-0 z-10 bg-inherit flex items-center justify-between ${footerStyle}`}>
                <div className='h-full flex items-center font-[500] text-[14px]'>
                    <div className='border border-1 border-[#1E2D3D] flex items-center px-3 h-full w-[270px] md:w-[130px] text-[#607B96]'>
                        find me in:
                    </div>
                    <ul className='flex items-center'>
                        {footerLinks.map((link, i) => (
                            <li key={i} className='flex items-center'>
                                <Link to={link.path} className={`border border-1 px-2 py-[3px] border-[#1E2D3D] ${link.visible} ${pathname === link.path ? 'text-white' : 'text-[#607B96]'}`}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Link to='https://github.com/stepheeeen' className={`hidden md:flex items-center justify-center border border-1 border-[#1E2D3D] p-[4px] w-[130px] hover:text-[#d7d7d7c2] text-[#607B96]`}>
                        @Steph4n <span><img src={Github} className=' ml-[7px]' /></span>
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default Dashboard;
