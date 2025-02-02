import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { LuSend } from "react-icons/lu";

const Header = () => {
  return (
    <div className=" w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.manjayProfile}
          alt=""
          className=" rounded-full w-32"
        />
      </div>
      <h3 className=" flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I am Manjay Kumar .{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className=" text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        MERN Stack developer from India .
      </h1>
      <p className=" max-w-2xl mx-auto font-Ovo">
        Passionate MERN-stack developer with a strong problem-solving mindset
        skilled in JavaScript, React.js, Next.js, TypeScript, and Node.js,
        delivering scalable solutions. Always learning and collaborating to
        build impactful software.
      </p>
      <div className=" flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="https://forms.gle/VEV46sc8cDVJSYx46"
          target="_blank"
          rel="noopener noreferrer"
          className=" px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Hire me
          <LuSend size={20} />
        </a>
        <a
          href="https://drive.google.com/file/d/1AP3Z8dh8Y5OXbFoJYU-ODGAxBlZWkvCn/view"
          download
          target="_blank"
          rel="noopener noreferrer"
          className=" px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume <Image src={assets.download_icon} alt="" className=" w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
