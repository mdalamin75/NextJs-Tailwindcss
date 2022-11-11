import Image from "next/image";
import Link from "next/link";
import {IoIosArrowForward} from "react-icons/io";
import choose1 from "../../public/images/c1_icon.png";
import choose2 from "../../public/images/c2_icon.png";
import choose3 from "../../public/images/c3_icon.png";

const ChooseUs = () => {
    const chouseReadMore = () => {
        var dots = document.getElementById("chouseUsDots");
        var dots2 = document.getElementById("chouseUsDots2");
        var dots3 = document.getElementById("chouseUsDots3");
        var more = document.getElementById("chouseUsMore");
        var more2 = document.getElementById("chouseUsMore2");
        var more3 = document.getElementById("chouseUsMore3");
        var readMoreText = document.getElementById("readMoreText");

        if(dots.style.display === "none" && dots2.style.display === "none" && dots3.style.display === "none") {
            dots.style.display = "inline";
            dots2.style.display = "inline";
            dots3.style.display = "inline";
            more.style.display = "none";
            more2.style.display = "none";
            more3.style.display = "none";
            readMoreText.innerText = "Read More";
        }else{
            dots.style.display = "none";
            dots2.style.display = "none";
            dots3.style.display = "none";
            more.style.display = "inline";
            more2.style.display = "inline";
            more3.style.display = "inline";
            readMoreText.innerText = "Read Less";
        }
    }
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
                            <p className="opacity-70">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
                            <span id="chouseUsDots">...</span>
                            <span id="chouseUsMore"> the standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
                             </span>
                            </p>
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
                            <p className="opacity-70">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
                            <span id="chouseUsDots2">...</span>
                            <span id="chouseUsMore2"> the standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
                             </span>
                            </p>
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
                            <p className="opacity-70">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
                            <span id="chouseUsDots3">...</span>
                            <span id="chouseUsMore3"> the standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
                             </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="choose_btn flex justify-center">
                    <button onClick={chouseReadMore}>
                        <span className="my_btn_main">
                            <span id="readMoreText">Read More</span>
                            <span className="my_btn_inner"><IoIosArrowForward className="mx-auto mt-3 text-lg"></IoIosArrowForward></span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    </>
  )
}

export default ChooseUs
