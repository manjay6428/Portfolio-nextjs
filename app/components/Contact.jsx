import { accessKey, assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [resultType, setResultType] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setResultType("");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setResultType("success");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setResultType("error");
    }
    setTimeout(() => {
      setResult("");
      setResultType("");
    }, 5000);
  };
  return (
    <div
      id="contact"
      className=" w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className=" text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className=" text-center text-5xl font-Ovo">Get in Touch</h2>
      <p className=" text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you ! If you have any questions , comments or
        feedback , please use the form below .
      </p>
      <form onSubmit={onSubmit} className=" max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className=" flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className=" flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          rows={6}
          placeholder="Enter your message"
          required
          name="message"
          className=" w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        />
        <button
          type="submit"
          className=" py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="" className=" w-4" />
        </button>
        <p
          className={`mt-4 text-xl ${
            resultType === "success"
              ? "text-green-500"
              : resultType === "error"
              ? "text-red-500"
              : ""
          }`}
        >
          {result}
        </p>
      </form>
    </div>
  );
};

export default Contact;
