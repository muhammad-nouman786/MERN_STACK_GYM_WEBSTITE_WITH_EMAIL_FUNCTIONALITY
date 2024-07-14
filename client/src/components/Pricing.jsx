import React from "react";
import imgp from "../assets/pricing.jpg";
import { Link } from "react-router-dom";
const Pricing = () => {
  const pricing = [
    {
      imgURL: imgp,
      title: "QUARTERLY",
      price: 10000,
      length: 3,
      duration: "month",
    },
    {
      imgURL: imgp,
      title: "HEAL_YEARLY",
      price: 23000,
      length: 6,
      duration: "6 months",
    },
    {
      imgURL: imgp,
      title: "YEARLY",
      price: 35000,
      length: 12,
      duration: "12 month",
    },
  ];
  return (
    <section class="bg-white">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-14">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-bold text-black uppercase">
            Elite Edge Fitness Plans
          </h2>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricing.map((e) => {
            return (
              <div
                key={e.title}
                class="flex flex-col cursor-pointer hover:scale-105 p-6 mx-auto max-w-lg text-center text-white rounded-lg border border-gray-100 shadow overflow-hidden bg-[url('./assets/pricing.jpg')]  bg-cover bg-[50%] bg-no-repeat"
              >
                <h3 class=" mb-4 text-4xl font-semibold text-blue-500 ">
                  {e.title}
                </h3>
                <p class="font-light text-white sm:text-lg ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, quis.
                </p>
                <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold text-white">
                    {e.price}
                  </span>
                  <span class="text-white">/{e.length} Months</span>
                </div>

                <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-white">Individual configuration</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>

                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Premium support:{" "}
                      <span class="font-semibold">{e.length} months</span>
                    </span>
                  </li>
                </ul>
                <Link
                  to="/"
                  class="text-white bg-blue-600 hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Join Now
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
