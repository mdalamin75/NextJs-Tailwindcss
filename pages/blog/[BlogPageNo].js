import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Link from "next/link";
import {HiArrowLongLeft} from "react-icons/hi2";
import CopyWrite from "../component/CopyWrite";

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();

    const paths = data.map((curElem) => {
        return {
            params : {
                BlogPageNo : curElem.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.BlogPageNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};

const BlogPagesData = ({data}) => {
    const {id, title, body} = data;
  return (
    <>
        <div className="bg-mycolor">
            <Navbar/>
        </div>
        <section id="blog" className="pt-20 pb-72 bg-orange-500">
            <div className="container px-4 md:px-40 space-y-10">
                <div className="blog_head flex justify-center">
                    <h1 className="text-white text-center text-4xl font-bold bg-[#161c34] py-5 px-10 md:px-20 rounded-md">Blog</h1>
                </div>
                <div key={id} className="bg-mycolor p-5 rounded-md shadow-md shadow-white">
                    <h3 className="bg-orange-500 text-white p-2 rounded-full w-10 text-center mb-3 font-bold">{id}</h3>
                    <h2 className="cursor-pointer text-xl font-semibold capitalize text-white">{title}</h2>
                    <p className="text-white mt-3 font-medium text-base">{body}</p>
                    <Link href="/blog">
                        <HiArrowLongLeft className="text-white text-6xl cursor-pointer"/>
                    </Link>
                </div>
            </div>
        </section>
        <div className="blog_footer relative">
          <Footer/>
          <CopyWrite/>
        </div>
    </>
  )
}

export default BlogPagesData;
