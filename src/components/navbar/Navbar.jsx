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
    )
}

export default Navbar;