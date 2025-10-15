import React from "react";
import { blogs } from "../../data/Data.js"
import { Link } from "react-router-dom";

function Blogs() {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <div className='text-lg text-gray-500 font-bold'>Blogs</div>
            <div>
                <ul>
                    {blogs.map((blog) => (
                        <li className="text-2xl text-blue-400 underline font-semibold capitalize tracking-wider" key={blog.id}>
                            <Link to={`/blog/${blog.id}`}>
                                {blog.id}. {blog.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    )
}

export default Blogs;