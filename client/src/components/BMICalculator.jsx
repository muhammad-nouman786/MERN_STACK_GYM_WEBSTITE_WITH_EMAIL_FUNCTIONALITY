import React, { useState } from "react";
import img from "../assets/bmi.jpg";
import { toast } from "react-toastify";
const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bim, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || !weight || !gender) {
      toast.error("Please enter valid height weight or gender");
      return;
    }
    const hightInMeters = height / 100;
    const bmiValue = (weight / (hightInMeters * hightInMeters)).toFixed(2);
    setBmi(bmiValue);
    if (bmiValue < 18.5) {
      toast.warning("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You have normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning("You are overweight");
    } else {
      toast.error("You are in obese range");
    }
  };
  return (
    <div class="  mx-auto relative bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900	 overflow-hidden">
      <h1 className="text-3xl text-center uppercase font-bold mt-7">
        Bmi Calculator
      </h1>
      <div class="grid md:grid-cols-2 gap-8 py-8 px-20">
        <form className="pt-7" onSubmit={calculateBMI}>
          <div class="max-w-md mx-auto space-y-10 relative">
            <input
              type="number"
			  value={height}
			  onChange={(e)=>setHeight(e.target.value)}
			  required
              placeholder="Hight (cm)"
              class="peer block w-full text-lg appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0  text-white focus:outline-none focus:ring-0 placeholder:text-white"
            />
            <input
              type="number"
			  value={weight}
			  required
			  onChange={(e)=>setWeight(e.target.value)}
              placeholder="Weight (kg)"
              class="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-lg text-white focus:outline-none focus:ring-0 placeholder:text-white "
            />
            <select
              value={gender}
			  onChange={(e)=>setGender(e.target.value)}
              class="peer block w-full appearance-none border-0 border-b border-white bg-transparent py-2.5 px-0 text-lg text-white focus:outline-none focus:ring-0 "
            >
              <option selected value="" className="text-black">
                Gender
              </option>
              <option value="Male" className="text-black">
                Male
              </option>
              <option value="Female" className="text-black">
                Female
              </option>
            </select>
            <button
              type="submit"
              class="text-blue-700 text-lg font-bold w-full relative bg-white  rounded-sm px-6 py-2"
            >
              Calculate BMI
            </button>
          </div>
        </form>
        <div class="text-center flex flex-col items-center justify-center">
          <img src={img} class=" w-3/2 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
