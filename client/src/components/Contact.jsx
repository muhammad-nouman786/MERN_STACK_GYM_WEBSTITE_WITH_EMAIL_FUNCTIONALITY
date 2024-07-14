import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MoonLoader } from "react-spinners";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = async (data) => {
    setLoading(true);
    const userData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };
    try {
      const fetch = await axios
        .post("http://localhost:4000/send/mail", userData)
        .then((res) => {
          toast.success("Message Sent Successfully");
          setLoading(false);
          reset()
        });
    } catch (error) {
      console.log(error);
      toast.error("Message Sent Error");
      setLoading(false);
    }
  };
  return (
    <section className="bg-gray-100  bg-[url('./assets/contact.jpg')] bg-cover bg-[50%] bg-no-repeat ">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12"></div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <h2 className="text-2xl uppercase font-bold mb-3 ">
              Send Us A Message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className={`w-full rounded-sm border border-gray-500 p-3 text-sm focus:outline-none ${errors.fname?.message} focus:border-red-400`}
                  placeholder="Name"
                  type="text"
                  name="fname"
                  {...register("name", { required: "This field is required" })}
                />
                {errors.fname && (
                  <span className="text-sm text-red-500">
                    {errors.fname?.message}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={`w-full rounded-sm border border-gray-500 p-3 text-sm focus:outline-none ${errors.email?.message} focus:border-red-400`}
                    placeholder="Email address"
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      {errors.email?.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className={`w-full rounded-sm border border-gray-500 p-3 text-sm focus:outline-none ${errors.name?.message} focus:border-red-400`}
                    placeholder="Phone Number"
                    type="number"
                    name="phone"
                    {...register("phone", {
                      required: "This field is required",
                    })}
                  />
                  {errors.phone && (
                    <span className="text-sm text-red-500">
                      {errors.phone?.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className={`w-full rounded-sm border border-gray-500 p-3 text-sm focus:outline-none ${errors.name?.message} focus:border-red-400`}
                  placeholder="Message"
                  rows="6"
                  name="message"
                  {...register("message", {
                    required: "This field is required",
                  })}
                ></textarea>
                {errors.message && (
                  <span className="text-sm text-red-500">
                    {errors.message?.message}
                  </span>
                )}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex  rounded-sm justify-center items-center gap-3  bg-blue-500 px-5 py-3 text-sm font-medium text-white sm:w-auto"
                >
                  {loading && <MoonLoader size={20} color="white" />}
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
