import React from "react";
import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
const Gallery = () => {
  const  gallery = [img1,img2,img3,img4,img5,img6] 
  return (
 <div className="bg-black p-4">
    <div class="text-center mt-8">
    <h1 class="font-bold text-4xl mb-4 text-blue-600 uppercase">Better Beats Best</h1>
</div>
       <div className="container mx-auto px-5 py-2 lg:px-16 lg:pt-16 flex items-center">
    <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
      <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
        <div className="w-full lg:w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={img1}
          />
        </div>
        <div className="w-full lg:w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={img2}
          />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
            src={img3}          />
        </div>
      </div>
      <div className="flex w-full sm:w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={img4}
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={img5}
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={img6}
          />
        </div>
      </div>
    </div>
  </div>
 </div>
  );
};

export default Gallery;
