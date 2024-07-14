import React from "react";

const Hero = () => {
  return (
    <>
      {" "}
      <div className="absolute top-0 left-0 right-0 md:h-screen h-[70vh] overflow-hidden bg-[url('./assets/img3.jpg')] bg-cover bg-[50%] bg-no-repeat brightness-50"></div>
      <section class="sm:mt-16 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="my-36 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-36 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span class="block xl:inline">LET'S GET MOVING</span>
            </h1>
            <p class="mt-3 text-base text-white font-bold sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Your journey to fitness starts here 
            </p>
            <p class="mt-3 text-base text-blue-700 font-bold sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-2   md:text-xl lg:mx-0">
              Unleash your potential
            </p>

            <div class="mt-5 sm:mt-14 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3   text-base font-medium rounded-md text-blue-700 bg-transparent border-2 bg-black border-white md:py-4 md:text-lg md:px-10"
                >
                  Start Your Journey
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 text-blue-700  border-2 bg-black text-base font-medium rounded-md  md:py-4 md:text-lg md:px-10"
                >
                  Discover Your Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
