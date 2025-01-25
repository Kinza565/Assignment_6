import React from "react";
import Navbar from "./navbar/page";
import Link from "next/link";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="home flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4">
        <div className="home-content max-w-3xl text-center space-y-6">
          <Image
            src="/picture.1.jpg"
            alt="Kinzah Khan"
            width={600}
            height={300}
            className="profile-img mx-auto rounded-2xl shadow-lg"
          />

          <h1 className="text-4xl font-bold tracking-wide animate-pulse">
            Welcome to My Portfolio
          </h1>

          <p className="text-lg md:text-xl font-light leading-relaxed">
            Hello! I'm <span className="font-semibold">Kinzah Khan</span>, a web developer passionate about
            learning and building amazing projects that make an impact.
          </p>

          <Link href="/contact">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-md hover:bg-indigo-100 transition-all font-semibold">
              Contact Me
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
