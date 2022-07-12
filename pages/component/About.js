import Link from "next/link";
import Image from "next/image";
import {IoIosArrowForward} from "react-icons/io";
import about from "../../public/images/about_us.png";
import about2 from "../../public/images/about_us_2.png";

const About = () => {
  return (
    <>
        <section id="about" className="py-40 space-y-20">
            <div className="container px-4 md:px-20 flex justify-center items-center">
                <div className="grid grid-cols-3 space-y-20">
                    <div className="col-span-3 lg:col-span-1 flex flex-col justify-center text-left space-y-5">
                        <h1 className="text-5xl md:text-6xl font-bold text-left">About Us</h1>
                        <p className="text-xl font-thin text-left text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..
                        </p>
                        <Link href="/about">
                            <span className="my_btn_main">Read More 
                                <span className="my_btn_inner"><IoIosArrowForward className="mx-auto mt-3 text-lg"></IoIosArrowForward></span>
                            </span>
                        </Link>
                    </div>
                    <div className="col-span-3 lg:col-span-2">
                        <Image src={about} alt="about-image" />
                    </div>
                </div>
            </div>
            <div className="container px-4 md:px-20 pb-20">
                <div className="grid grid-cols-3 space-y-20">
                    <div className="col-span-3 lg:col-span-2">
                        <Image src={about2} alt="about-image" />
                    </div>
                    <div className="col-span-3 lg:col-span-1 flex flex-col justify-center text-left space-y-5">
                        <h1 className="text-5xl md:text-6xl font-bold text-left">Ouer Cars</h1>
                        <p className="text-xl font-thin text-left text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..
                        </p>
                        <Link href="/about">
                            <span className="my_btn_main">See More 
                                <span className="my_btn_inner"><IoIosArrowForward className="mx-auto mt-3 text-lg"></IoIosArrowForward></span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About