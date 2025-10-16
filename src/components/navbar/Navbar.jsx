import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="sticky top-0  bg-gray-100 flex justify-end items-center shadow-md space-x-8 mb-4 py-4 px-8 tracking-wider uppercase">
            <div className="text-sm text-gray-600 font-bold space-x-6">
                <Link className="hover:text-blue-600" to="/">Blogs</Link>
                <Link className="hover:text-blue-600" to="/profile">Profile</Link>
                <Link className="hover:text-blue-600" to="/task">Tasks</Link>
                <Link className="hover:text-blue-600" to="/blogpost">BlogPosts</Link>
                <Link className="hover:text-blue-600" to="/register">Register</Link>
                <Link className="hover:text-blue-600" to="/user">Users</Link>
            </div>
        </nav>

        // <nav className="sticky top-0 bg-gray-100 shadow-md px-8 py-4 mb-4">
        //     <div className="container mx-auto flex justify-end items-center space-x-6">
        //         <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-semibold uppercase tracking-wide text-sm">
        //             Blogs
        //         </Link>
        //         <Link to="/profile" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-semibold uppercase tracking-wide text-sm">
        //             Profile
        //         </Link>
        //         <Link to="/task" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-semibold uppercase tracking-wide text-sm">
        //             Tasks
        //         </Link>
        //         <Link to="/blogpost" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-semibold uppercase tracking-wide text-sm">
        //             BlogPosts
        //         </Link>
        //         <Link to="/register" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-semibold uppercase tracking-wide text-sm">
        //             Register
        //         </Link>
        //         <Link to="/user" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-semibold uppercase tracking-wide text-sm">
        //             Users
        //         </Link>
        //     </div>
        // </nav>

    )
}

export default Navbar;