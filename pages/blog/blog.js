import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CopyWrite from '../component/CopyWrite';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const Blog = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);
  return (
    <>
      <div className='bg-mycolor'>
        <Navbar/>
      </div>
        <section id="blog" className="pt-20 pb-72 bg-orange-500">
          <div className="container px-4 md:px-40 space-y-10">
            <div className="testimonial_head flex justify-center">
              <h1 className="text-white text-center text-4xl font-bold bg-[#161c34] py-5 px-10 md:px-20 rounded-md">Blog</h1>
            </div>
            {data.slice(0,5).map((curElem) => {
              return (
                <Link href={`/blog/${curElem.id}`}>
                  <div key={curElem.id} className="bg-mycolor p-5 rounded-md cursor-pointer shadow-md shadow-white">
                    <h3 className="bg-orange-500 text-white p-2 rounded-full w-10 text-center mb-3 font-bold">{curElem.id}</h3>
                    <h2 className="text-xl font-semibold capitalize text-white">{curElem.title}</h2>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
        <div className="blog_footer relative">
          <Footer/>
          <CopyWrite/>
        </div>
    </>
  )
}


export default Blog;
