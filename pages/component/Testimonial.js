import TestimonialSlider from "./TestimonialSlider";


const testimonial = () => {
  return (
    <>
        <section id="testimonial" className="bg-orange-500 relative mt-20 pb-44">
            <div className="container px-4 md:px-20 space-y-16">
                <div className="testimonial_head flex justify-center">
                    <h1 className="text-white text-center text-4xl font-bold bg-[#161c34] py-5 px-10 md:px-20">Testomonial</h1>
                </div>
                <div className="testimonail_slider">
                    <TestimonialSlider/>
                </div>
            </div>
        </section>
    </>
  )
}

export default testimonial