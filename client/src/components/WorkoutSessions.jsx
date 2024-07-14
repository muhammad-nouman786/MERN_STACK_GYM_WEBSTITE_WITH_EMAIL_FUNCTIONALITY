import React from "react";
import img5 from "../assets/img5.jpg";
const WorkoutSessions = () => {
  return (
    <div class="max-w-7xl mx-auto ">
      <div class="mt-14 lg:p-14 p-6 rounded-md">
        <div class="grid md:grid-cols-2 items-center gap-16">
          <div>
            <h3 class="text-2xl font-bold uppercase mb-4">
              Featured Bootcamps
            </h3>
            <p class="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis voluptas ad harum est maxime atque nam quos aut
              inventore officia, iure commodi et. Voluptatum deleniti distinctio
              libero. Dolorem, perspiciatis soluta!
            </p>
            <ul class="space-y-4 mt-8">
              <li class="flex items-center text-sm border border-gray-400 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, nisi totam quasi saepe odio molestias omnis tempora
                debitis cupiditate repellat deleniti accusantium ea. Doloremque
                animi nobis cupiditate eum quasi? Vel?
              </li>
    
              <li class="flex items-center text-sm border border-gray-400 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, nisi totam quasi saepe odio molestias omnis tempora
                debitis cupiditate repellat deleniti accusantium ea. Doloremque
                animi nobis cupiditate eum quasi? Vel?
              </li> <li class="flex items-center text-sm border border-gray-400 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, nisi totam quasi saepe odio molestias omnis tempora
                debitis cupiditate repellat deleniti accusantium ea. Doloremque
                animi nobis cupiditate eum quasi? Vel?
              </li> <li class="flex items-center text-sm border border-gray-400 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, nisi totam quasi saepe odio molestias omnis tempora
                debitis cupiditate repellat deleniti accusantium ea. Doloremque
                animi nobis cupiditate eum quasi? Vel?
              </li> <li class="flex items-center text-sm border border-gray-400 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, nisi totam quasi saepe odio molestias omnis tempora
                debitis cupiditate repellat deleniti accusantium ea. Doloremque
                animi nobis cupiditate eum quasi? Vel?
              </li> <li class="flex items-center text-sm border border-gray-400 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, nisi totam quasi saepe odio molestias omnis tempora
                debitis cupiditate repellat deleniti accusantium ea. Doloremque
                animi nobis cupiditate eum quasi? Vel?
              </li> <li class="flex items-center text-sm border border-gray-400 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, nisi totam quasi saepe odio molestias omnis tempora
                debitis cupiditate repellat deleniti accusantium ea. Doloremque
                animi nobis cupiditate eum quasi? Vel?
              </li> <li class="flex items-center text-sm border border-gray-400 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, nisi totam quasi saepe odio molestias omnis tempora
                debitis cupiditate repellat deleniti accusantium ea. Doloremque
                animi nobis cupiditate eum quasi? Vel?
              </li>
        
            </ul>
          </div>
          <div>
            <div className="flex flex-col flex-1 dark:bg-gray-50">
              <h3 className="text-3xl font-bold uppercase">
                Top workout session
              </h3>
              <p className="my-3 dark:text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
            </div>
            <img src={img5} class="w-full object-contain rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSessions;
