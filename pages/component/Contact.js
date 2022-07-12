
const Contact = () => {
  return (
    <>
        <section id="contact" className="h-full relative bg-mycolor pb-44 mt-20">
            <div className="container px-4 md:px-20 space-y-20">
                <div className="Contact_head flex justify-center">
                    <h1 className="text-white text-center text-4xl font-bold bg-orange-500 px-10 md:px-20 py-5">Contact Us</h1>
                </div>
                <div className="contact_body">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="form col-span-2 lg:col-span-1 bg-white p-10 rounded-md">
                            <form action="" className="flex flex-col justify-between space-y-5 ">
                                <input className="bg-gray-200 py-3 px-3 rounded-md outline-none" type="text" placeholder="Your Name" />
                                <input className="bg-gray-200 py-3 px-3 rounded-md outline-none" type="email" placeholder="Email" />
                                <input className="bg-gray-200 py-3 px-3 rounded-md outline-none" type="number" placeholder="Phone" />
                                <textarea className="bg-gray-200 py-3 px-3 rounded-md outline-none" name="" id="" cols="10" rows="5" placeholder="Message"></textarea>
                                <input type="button" value="Send" className="text-xl font-bold bg-orange-500 text-white py-3 mt-5 w-1/2 text-center mx-auto rounded-md transition duration-300 hover:bg-mycolor cursor-pointer" />
                            </form>
                        </div>
                        <div className="map col-span-2 lg:col-span-1">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.12952438149!2d91.82596223070261!3d24.8998373168711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1655943039094!5m2!1sen!2sbd" 
                                // width="100%" 
                                height="500" 
                                className="rounded-md w-full opacity-75"
                                style={{border:0}}
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact