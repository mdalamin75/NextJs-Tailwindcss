import Image from "next/image";
import Link from "next/link";
import * as Scroll from "react-scroll";
import { useState, useEffect } from "react";


const Navbar = () => {
    let Link = Scroll.Link;
    const [scrolled,setScrolled]=useState(false);

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 100 ){
        setScrolled(true);
        }
        else{
        setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    let x=['header'];
    if(scrolled){
        x.push('scrolled');
    }
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    }
      
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }
  return (
    <>
        <div id="mySidenav" className="sidenav">
            <button>
                <a className="closebtn" onClick={closeNav}>&times;</a>
            </button>
            <Link href="/">
                <a className="opacity-80 hover:bg-orange-500 hover:text-white">Home</a>
            </Link>
            <Link href="#about">
                <a className="opacity-80 hover:bg-orange-500 hover:text-white">About</a>
            </Link>
            <Link href="#choose_us">
                <a className="opacity-80 hover:bg-orange-500 hover:text-white">Why Choose Us</a> 
            </Link>
            <Link href="#testimonial">
                <a className="opacity-80 hover:bg-orange-500 hover:text-white">Testimonial</a>
            </Link>
            <Link href="#contact">
                <a className="opacity-80 hover:bg-orange-500 hover:text-white">Contact</a>
            </Link>
        </div>
        <div className={x.join(" ")}>
        <header className="px-10 grid grid-cols-4">
            <div className="logo col-span-4 lg:col-span-2 mx-auto lg:ml-12 ">
                <Link href="/">
                    <a>
                        <Image src="/images/logo.png" alt="logo" width={70} height={70} />
                    </a>
                </Link>
            </div>
            <nav className="col-span-4 lg:col-span-2 lg:mr-12 mt-5">
                <ul className="text-white flex justify-between items-center">
                    <li className="cursor-pointer">
                        <Link href="/">
                            <a className="flex cursor-pointer">
                                <Image src="/images/phone_icon.png" alt="phone" width={20} height={10}/>
                                <span className="ml-4 hidden lg:inline">987-654-3210 </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="flex">
                                <Image src="/images/mail_icon.png" alt="email" width={20} height={10}/>
                                <span className="ml-4 hidden lg:inline">demo@gmail.com </span>
                            </a>
                        </Link>
                    </li>
                    <li className="flex">
                        <Link href="/">
                            <a>
                                <Image src="/images/search_icon.png" alt="search"width={20} height={20} />
                            </a>
                        </Link>
                    </li>
                    <li className="flex">
                        <button onClick={openNav}>
                            <a >
                                <Image src="/images/menu_icon.png" alt="menu" width={20} height={20}/>
                            </a>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    </>
  )
}

export default Navbar