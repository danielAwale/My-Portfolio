import React from "react";

//image
import Image from "../assets/banner.jpeg";

//icons
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

// animationtype
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section id="home" className="px-4 pb-64 pt-56 lg:section">
      <div className=" mx-auto w-full flex justify-evenly items-center">
        <div className="text-[50px] text-center">
          <h1 className="font-bold">Hello! I'm Daniel Awale</h1>
          <div className="">
            <span className="mr-4">I am a</span>
            <TypeAnimation
              sequence={[
                "Front End",
                2000,
                "Back End",
                2000,
                "Full Stack",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>
          <span>Developer</span>
          <div className="flex text-[40px] gap-x-4 mt-5 justify-center">
            <a
              href="https://github.com/danielAwale"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-awale/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="cursor-pointer" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCAw_zisg_L7figOPnInAoVA"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex">
          <img src={Image} alt="" className="h-[600px] w-[800px] rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
