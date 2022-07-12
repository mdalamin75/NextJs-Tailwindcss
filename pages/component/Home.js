import Link from "next/link";
import Slider from './Slider';
import {IoIosArrowForward} from "react-icons/io";

const Home = () => {
  return (
    <>
        <section id="home" className="flex justify-center items-center">
            <div className="container px-4 mx-auto grid grid-cols-3 justify-center items-center">
                <div className="col-span-3 md:col-span-1 mt-10 lg:mt-0 pt-10 lg:pt-0">
                    <h4 className="text-orange-500 uppercase text-4xl md:text-5xl text-center md:text-left font-bold leading-normal mb-2 ">WELCOME</h4>
                    <h3 className="text-white uppercase text-6xl md:text-9xl text-center md:text-left font-bold leading-10 mb-10 md:mb-20 ">Avalon</h3>
                    <p className="text-white text-lg font-light p-0 leading-normal mb-12 text-center md:text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link href="/about">
                      <span className="my_btn_main hidden md:block mb-3">Book Now 
                        <span className="my_btn_inner"><IoIosArrowForward className="mx-auto mt-3 text-lg"></IoIosArrowForward></span>
                      </span>
                    </Link> 
                    <Link href="/about">
                      <span className="my_btn_main hidden md:block">About Us 
                        <span className="my_btn_inner"><IoIosArrowForward className="mx-auto mt-3 text-lg"></IoIosArrowForward></span>
                      </span>
                    </Link> 
                </div>
                <div className="col-span-3 md:col-span-2 md:mt-56">
                    <Slider/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home;