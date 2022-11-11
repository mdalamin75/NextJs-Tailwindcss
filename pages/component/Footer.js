import Link from "next/link";
import{ FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
        <section id="footer" className="bg-mycolor py-20 border-t">
            <div className="container px-4 md:px-20 space-y-10">
                <div className="footer_top">
                    <div className="grid grid-cols-2 space-y-5 lg:space-y-0">
                        <div className="company_name col-span-2 lg:col-span-1 lg:pr-56">
                            <h1 className="text-white text-4xl font-bold border-b border-orange-500 text-center lg:text-left">AVALON MOTORS</h1>
                        </div>
                        <div className="social_icon col-span-2 lg:col-span-1 flex justify-center lg:justify-end text-orange-500 space-x-5 ">
                            <Link href="/">
                                <a>
                                    <FaInstagram className="border border-orange-500 text-4xl p-2 rounded-full transition duration-300 hover:bg-orange-500 hover:text-white  "/>
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    <FaTwitter className="border border-orange-500 text-4xl p-2 rounded-full transition duration-300 hover:bg-orange-500 hover:text-white  "/>
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    <FaFacebookF className="border border-orange-500 text-4xl p-2 rounded-full transition duration-300 hover:bg-orange-500 hover:text-white "/>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="grid grid-cols-3 space-y-14 lg:space-y-0 gap-14">
                        <div className="col-span-3 lg:col-span-1">
                            <div className="subscribe flex flex-col space-y-5">
                                <h3 className="text-white uppercase text-2xl font-medium">Subscribe</h3>
                                <input type="email" placeholder="Enter Your Email" className="p-3 outline-none" />
                                <input type="button" value="Submit" className="text-white bg-orange-500 w-1/3 p-3 cursor-pointer transition duration-300 hover:bg-indigo-900"/>
                            </div>
                        </div>
                        <div className="col-span-3 lg:col-span-1">
                            <div className="useful_link space-y-5">
                                <h3 className="text-white uppercase text-3xl font-medium">Usefull Links</h3>
                                <ul className="text-white space-y-2">
                                    <li className="list-disc marker:text-orange-500 marker:text-2xl text-xl ml-5">
                                        <Link href="#home">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className="list-disc marker:text-orange-500 marker:text-2xl text-xl ml-5">
                                        <Link href="#about">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li className="list-disc marker:text-orange-500 marker:text-2xl text-xl ml-5">
                                        <Link href="#about">
                                            <a>Our Cars</a>
                                        </Link>
                                    </li>
                                    <li className="list-disc marker:text-orange-500 marker:text-2xl text-xl ml-5">
                                        <Link href="#choouse_us">
                                            <a>Service</a>
                                        </Link>
                                    </li>
                                    <li className="list-disc marker:text-orange-500 marker:text-2xl text-xl ml-5">
                                        <Link href="#testimonial">
                                            <a>Testimonial</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-3 lg:col-span-1">
                            <div className="contact_details space-y-5">
                                <h3 className="text-white uppercase text-3xl font-medium">Contact Details</h3>
                                <h3 className="text-white text-lg font-bold">AVALON Car : Adderess</h3>
                                <ul className="text-white text-lg font-light ">
                                    <li>Newyork 11111, USA</li>
                                    <li>Phone: +111 111 1000</li>
                                    <li>demo@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer