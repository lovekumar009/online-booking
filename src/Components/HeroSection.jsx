import React from "react";
import video from "../asstes/video1.mp4";

const HeroSection = () => {
  return (
    <div className="App">
      <section className="relative bg-gray-900 text-white flex items-center justify-center">
        <video
          label="fullHD"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-[35rem] object-cover opacity-70"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="relative  flex flex-col items-center justify-center h-[35rem] bg-black bg-opacity-50 p-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Experience the Magic of Live Music
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Join us for an unforgettable night of music, lights, and excitement.
            Don't miss out!
          </p>
          <a
            href="#book"
            className="inline-block px-6 py-3 bg-[#9434E6] hover:bg-[#8C52FF] text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Book Your Show
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
