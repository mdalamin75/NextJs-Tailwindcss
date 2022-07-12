import Link from "next/link";


const Navbar = () => {
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
        <header className="px-10 grid grid-cols-4">
            <div className="logo col-span-4 lg:col-span-2 mx-auto lg:ml-12 ">
                <Link href="/">
                    <a>
                        <img src="images/logo.png" alt="logo" />
                    </a>
                </Link>
            </div>
            <nav className="col-span-4 lg:col-span-2 lg:mr-12 mt-5">
                <ul className="text-white flex justify-between items-center">
                    <li className="cursor-pointer">
                        <Link href="/">
                            <a className="flex cursor-pointer">
                                <img src="images/phone_icon.png" alt="phone" />
                                <span className="ml-4 hidden lg:inline">987-654-3210 </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="flex">
                                <img src="images/mail_icon.png" alt="email" />
                                <span className="ml-4 hidden lg:inline">demo@gmail.com </span>
                            </a>
                        </Link>
                    </li>
                    <li className="flex">
                        <Link href="/">
                            <a>
                                <img src="images/search_icon.png" alt="search" />
                            </a>
                        </Link>
                    </li>
                    <li className="flex">
                        <button onClick={openNav}>
                            <a >
                                <img src="images/menu_icon.png" alt="menu" />
                            </a>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Navbar