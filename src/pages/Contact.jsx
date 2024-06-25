import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();
  const sendMsg = async (data) => {};

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-[#f1f1e7] pt-[60px] pb-[70px] px-[50px]  rounded-xl shadow-lg md:w-2/4 w-full max-h-screen overflow-y-auto">
        <h2 className="text-5xl font-bold mb-10 text-[#41574B]">
          Get in touch!
        </h2>
        <form onSubmit={handleSubmit(sendMsg)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", {
                required: true,
              })}
              className="w-full p-4 border rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: true,
              })}
              className="w-full p-3 border rounded-lg focus:outline-none "
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              {...register("message", {
                required: true,
              })}
              className="w-full p-3 border rounded-md focus:outline-none  h-32"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-60 p-4 bg-[#41574B] text-white rounded-md "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-16 space-y-6 md:space-y-0 mt-16 text-black">
        <div className="flex items-center space-x-4">
          <div className="bg-[#41574B] p-4 rounded-full">
            <img src="../../public/email.svg" alt="Email" className="w-8 h-8" />
          </div>
          <div>
            <p>info@farmfresh.com</p>
            <p>orders@farmfresh.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-[#41574B] p-4 rounded-full">
            <img src="../../public/phone.svg" alt="Phone" className="w-8 h-8" />
          </div>
          <div>
            <p>+1 (354) 442-7422</p>
            <p>+1 (354) 322-5434</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
