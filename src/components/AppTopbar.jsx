import React, { useContext, useRef, useState, useEffect } from 'react';
import { Ripple } from 'primereact/ripple';
import { Image } from 'primereact/image';

const AppTopbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            if (window.innerWidth <= 1024) {
                // Close menu after scrolling on mobile devices
                setIsMenuOpen(false);
            }
            
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      
    };
    const handleLogoClick = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
    };  

    return (
        <div className="flex px-4 sm:px-8 header-container app-header-sticky">
            <div  className="landing-wrapper landing-header-conatiner w-full overflow-hidden">
                <div className="py-2 sm:py-3 pl-3 pr-5 flex align-items-center justify-content-between relative lg:static">
                    <Image src={`${process.env.PUBLIC_URL}/images/Logo.svg`} className='cursor-pointer pr-4 sm:pr-0' alt="logo" onClick={() => handleLogoClick ()}/>
                  
                    {isMenuOpen ? (
                        <i
                            className="pi pi-times text-2xl sm:text-4xl cursor-pointer block  lg:hidden text-700"
                            onClick={toggleMenu}
                        ></i>
                    ) : (
                        <i
                            className="pi pi-bars text-2xl sm:text-4xl cursor-pointer block  lg:hidden text-700"
                            onClick={toggleMenu}
                        ></i>
                    )}
                   
                    {isMenuOpen ?(
                        <div className="menu-overlay">
                            <div className="menu-content">
                               
                                <ul className="list-none p-0 m-0 moblie-devise">
                                    <li>
                                        <a href="#introduction" onClick={() => handleMenuClick("introduction")} className="p-ripple  hover:text-primary primary-hover   flex m-0 md:ml-5  px-0 md:py-2 lg:py-2 text-900 font-medium line-height-3">
                                            <span className=''>Introducing Armory</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#features" onClick={() => handleMenuClick("features")} className="p-ripple  hover:text-primary primary-hover  flex m-0 md:ml-5 px-0 py-2 text-900 font-medium line-height-3">
                                            <span className=''>Our Solutions & Features</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#about"  onClick={() => handleMenuClick("about")} className="p-ripple  hover:text-primary primary-hover flex m-0 md:ml-5 px-0 py-2 text-900 font-medium line-height-3">
                                            <span className=''>About us</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#leadership" onClick={() => handleMenuClick("leadership")} className="p-ripple  hover:text-primary primary-hover flex m-0 md:ml-5 px-0 py-2 text-900 font-medium line-height-3">
                                            <span className=''>Leadership</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact"  onClick={() => handleMenuClick("contact")}  className="p-ripple  hover:text-primary primary-hover flex m-0 md:ml-5 px-0 py-2 text-900 font-medium line-height-3">
                                            <span className=''>Contact Us</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ):<>
                    <ul className="hidden class-hide list-none p-0 m-0 lg:flex  lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
                        <li>
                            <a href="#introduction" onClick={() => handleMenuClick("introduction")} className="p-ripple  hover:text-primary  sm:surface-0 primary-hover flex m-0 md:ml-5 px-0 sm:pt-5 lg:py-2 md:py-2 text-900 font-medium line-height-3">
                                <span className=''>Introducing Armory</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a href="#features" onClick={() => handleMenuClick("features")} className="p-ripple  hover:text-primary primary-hover  flex m-0 md:ml-5 px-0 py-2 text-900 font-medium line-height-3">
                                <span className=''>Our Solutions & Features</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a href="#about"  onClick={() => handleMenuClick("about")} className="p-ripple  hover:text-primary primary-hover flex m-0 md:ml-5 px-0 py-2 text-900 font-medium line-height-3">
                                <span className=''>About us</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a href="#leadership" onClick={() => handleMenuClick("leadership")} className="p-ripple  hover:text-primary primary-hover flex m-0 md:ml-5 px-0 py-2 text-900 font-medium line-height-3">
                                <span className=''>Leadership</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a href="#contact"  onClick={() => handleMenuClick("contact")}  className="p-ripple  hover:text-primary primary-hover flex m-0 md:ml-5 px-0 py-2 text-900 font-medium line-height-3">
                                <span className=''>Contact Us</span>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                    
                    </>}
                </div>
            </div>
        </div>
    );
};

export default AppTopbar;
