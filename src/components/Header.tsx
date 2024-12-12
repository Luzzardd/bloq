import React from "react";
import header from "../../public/image/bmw-water-injection-images-02.jpg"
import Image from "next/image";
const Header = () => {
  return (
    <div>
        <header className="bg-blue-500 text-white text-center py-20 relative">
      <Image 
        src={header} 
        alt="Header Image" 
        layout="fill" 
        objectFit="cover" 
        className="absolute top-0 left-0 w-full h-full" 
      />
      <div className="relative z-10"> 
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="mt-4">Sharing my thoughts and experiences.</p>
      </div>
    </header>
    </div>
  );
};

export default Header;
