import Link from "next/link";
import Image from "next/image";
import {IoIosArrowForward} from "react-icons/io";
import about from "../../public/images/about_us.png";
import about2 from "../../public/images/about_us_2.png";

const About = () => {
    function readMore() {
        var dots = document.getElementById("dots");
        var more = document.getElementById("more");
        var readMore = document.getElementById("readMore");

        if(dots.style.display === "none") {
            dots.style.display = "inline";
            readMore.innerText = "Read More";
            more.style.display = "none";
        }else {
            dots.style.display = "none";
            readMore.innerText = "Read Less";
            more.style.display = "inline";
        }
    }
    function readMore2() {
        var dots = document.getElementById("dots2");
        var more = document.getElementById("more2");
        var readMore = document.getElementById("readMore2");

        if(dots.style.display === "none") {
            dots.style.display = "inline";
            readMore.innerText = "Read More";
            more.style.display = "none";
        }else {
            dots.style.display = "none";
            readMore.innerText = "Read Less";
            more.style.display = "inline";
        }
    }
    function seeMore () {
        var seeMore = document.getElementById("seeMore");
        var seeButtonText = document.getElementById("seeButtonText");

        if(seeMore.style.display === "none") {
            seeMore.style.display = "inline";
            seeButtonText.innerText = "See Less";
        }else{
            seeMore.style.display = "none";
            seeButtonText.innerHTML = "See More";
        }
    }
  return (
    <>
        <section id="about" className="pt-40 pb-60 space-y-20 min-height-full">
            <div className="container mx-auto px-4 md:px-20 flex justify-center items-center">
                <div className="grid grid-cols-3 space-y-20">
                    <div className="col-span-3 lg:col-span-1 flex flex-col justify-center text-left space-y-5">
                        <h1 className="text-5xl md:text-6xl font-bold text-left">About Us</h1>
                        <p className="text-xl font-thin text-left text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            <span id="dots">...</span>
                            <span id="more"> erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span>
                        </p>
                        <button onClick={readMore}>
                            <span  className="my_btn_main">
                                <span id="readMore"> Read More </span>
                                <span className="my_btn_inner">
                                    <IoIosArrowForward className="mx-auto mt-3 text-lg"></IoIosArrowForward>
                                </span>
                            </span>
                        </button>
                    </div>
                    <div className="col-span-3 lg:col-span-2">
                        <Image src={about} alt="about-image" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-20 pb-20">
                <div className="grid grid-cols-3 space-y-20">
                    <div className="col-span-3 lg:col-span-2">
                        <Image src={about2} alt="about-image"/>
                    </div>
                    <div className="col-span-3 lg:col-span-1 flex flex-col justify-center text-left space-y-5">
                        <h1 className="text-5xl md:text-6xl font-bold text-left">Ouer Cars</h1>
                        <p className="text-xl font-thin text-left text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..
                        </p>
                        <button onClick={seeMore}>
                            <span className="my_btn_main"> 
                                <span id="seeButtonText">See More</span>
                                <span className="my_btn_inner"><IoIosArrowForward className="mx-auto mt-3 text-lg"></IoIosArrowForward></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div id="seeMore">
                <div  className="container mx-auto px-4 md:px-20 flex justify-center items-center">
                    <div className="grid grid-cols-3 space-y-20">
                        <div className="col-span-3 lg:col-span-1 flex flex-col justify-center text-left space-y-5">
                            <h1 className="text-5xl md:text-6xl font-bold text-left">About Us</h1>
                            <p className="text-xl font-thin text-left text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                <span id="dots2">...</span>
                                <span id="more2"> erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span>
                            </p>
                            <button onClick={readMore2}>
                                <span  className="my_btn_main">
                                    <span id="readMore2"> Read More </span>
                                    <span className="my_btn_inner">
                                        <IoIosArrowForward className="mx-auto mt-3 text-lg"></IoIosArrowForward>
                                    </span>
                                </span>
                            </button>
                        </div>
                        <div className="col-span-3 lg:col-span-2">
                            <Image src={about} alt="about-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
