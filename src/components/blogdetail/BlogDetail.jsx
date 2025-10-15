import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../../data/Data";

function BlogDetail() {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === parseInt(id));

    console.log(blog)

    if (!blog) {
        return <div className='text-lg text-red-500 font-bold text-center h-screen'>Blog Not Found!</div>
    }

    return (
        <div className="flex flex-col justify-center items-center p-20 space-y-4">
            <div className='text-4xl text-gray-500 font-bold uppercase'>{blog.title}</div>
            <div className="w-[80%] h-[50%] object-cover"><img src={blog.mainImage} alt="Main Image" /></div>
            <div className="text-sm text-gray-500 font-semibold text-center">
                <p>dan{blog.description}</p>
            </div>
            <div className="w-[50%] h-auto"><img src={blog.contentImage} alt="Second Image" /></div>
            <div className="text-sm text-gray-500 font-semibold text-center">
                <p>{blog.content}</p>
            </div>

            <Link
                to="/"
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
            >
                Go to Blog List
            </Link>
        </div>
    )
}

export default BlogDetail;  