import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between">
          <div className="text-white text-lg font-bold">My Blog</div>
          <div>
            <Link href="/" className="text-gray-300 hover:text-white px-4">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white px-4">
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white px-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
