import React from "react";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white p-8">
  <h1 className="text-3xl font-bold mb-6">About</h1>

  <div className="flex flex-col md:flex-row items-start justify-between">
    {/* Kartu About Me */}
    <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-lg mb-4 flex flex-col">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://img-z.okeinfo.net/okz/500/library/images/2019/11/21/48kxknz031nez6x1y30f_17756.jpg"
          alt="About Me"
        />
      </a>
      <div className="p-5 flex-1">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          #01 Sejarah
        </h5>
        <p className="mb-3 font-normal text-gray-400">
          Pada bagian ini akan menjelaskan tentang sejarah pembuatan water injektor pada mesin mobil BMW.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>

    {/* Kartu Service */}
    <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-lg mb-4 flex flex-col">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="http://cdn.bmwblog.com/wp-content/uploads/bmw-water-injection-images-02.jpg"
          alt="Service"
        />
      </a>
      <div className="p-5 flex-1">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          #02 Cara Kerja
        </h5>
        <p className="mb-3 font-normal text-gray-400">
          Pada bagian ini akan menjelaskan tentang bagaimana cara kerja water injektor pada mesin mobil BMW.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>

    {/* Kartu Team */}
    <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-lg mb-4 flex flex-col">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://mutiaracarcare.com/wp-content/uploads/2024/06/sistem-injeksi-mobil-1-1024x576.jpg.webp"
          alt="Team"
        />
      </a>
      <div className="p-5 flex-1">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          #03 Kelebihan dan Kekurangan
        </h5>
        <p className="mb-3 font-normal text-gray-400">
          Pada bagian ini akan menjelaskan tentang kelebihan dan kekurangan dari sistem injeksi bahan bakar pada mobil BMW.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Hero;
