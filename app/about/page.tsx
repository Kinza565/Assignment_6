import React from "react";
import Navbar from "../navbar/page";

const About: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="about flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-green-500 text-white p-6">
        <section className="about-content max-w-3xl text-center space-y-6">
          <h2 className="text-4xl font-bold tracking-wide">About Me</h2>

          <p className="text-lg md:text-xl font-light leading-relaxed">
            Hi, I’m Kinzah Khan, a dedicated web developer with a passion for crafting interactive and user-friendly web applications. With a strong foundation in modern technologies, I thrive on solving complex challenges and bringing creative ideas to life. I’m always eager to learn and stay ahead in the ever-evolving tech world.
          </p>

          <p className="text-lg md:text-xl font-light leading-relaxed">
            Beyond coding, I enjoy exploring new technologies, collaborating with like-minded individuals, and sharing knowledge to foster innovation. My journey is driven by a commitment to continuous growth and making an impact through technology.
          </p>

          <p className="text-lg md:text-xl font-light leading-relaxed">
            Let’s connect and create something extraordinary together!
          </p>

          <a href="/portfolio" className="inline-block">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-100 transition-all font-semibold">
              View My Portfolio
            </button>
          </a>
        </section>
      </main>
    </>
  );
};

export default About;
