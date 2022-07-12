import Image from "next/image";
import Link from "next/link";
import {IoIosArrowForward} from "react-icons/io";
import choose1 from "../../public/images/c1_icon.png";
import choose2 from "../../public/images/c2_icon.png";
import choose3 from "../../public/images/c3_icon.png";

const ChooseUs = () => {
  return (
    <>
        <section id="choose_us" className="bg-[#161c34] h-full relative mt-20 pb-44">
            <div className="container px-4 md:px-20 space-y-20 pb-20">
                <div className="choose_us_head flex justify-center">
                    <h1 className="text-white text-center text-4xl font-bold bg-orange-500 p-5">Why Choose Us</h1>
                </div>
                <div className="grid grid-cols-3 gap-20">
                    <div className="col-span-3 lg:col-span-1 text-white text-center space-y-5">
                        <div className="choose_img">
                            <Image src={choose1} alt="choose-image" />
                        </div>
                        <div className="choose_head">
                            <h3 className="text-xl font-bold">FINANCING MADE EASY</h3>
                        </div>
                        <div className="choose_text">
                            <p className="opacity-70">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                        </div>
                    </div>
                    <div className="col-span-3 lg:col-span-1 text-white text-center space-y-5">
                        <div className="choose_img">
                            <Image src={choose2} alt="choose-image" />
                        </div>
                        <div className="choose_head">
                            <h3 className="text-xl font-bold">WIDE RANGE OF BRANDS</h3>
                        </div>
                        <div className="choose_text">
                            <p className="opacity-70">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                        </div>
                    </div>
                    <div className="col-span-3 lg:col-span-1 text-white text-center space-y-5">
                        <div className="choose_img">
                            <Image src={choose3} alt="choose-image" />
                        </div>
                        <div className="choose_head">
                            <h3 className="text-xl font-bold">TRUSTED BY THOUSANDS</h3>
                        </div>
                        <div className="choose_text">
                            <p className="opacity-70">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                        </div>
                    </div>
                </div>
                <div className="choose_btn flex justify-center">
                    <Link href="/about">
                        <span className="my_btn_main">Read More 
                            <span className="my_btn_inner"><IoIosArrowForward className="mx-auto mt-3 text-lg"></IoIosArrowForward></span>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default ChooseUs
