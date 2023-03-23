import React from "react";

//image
import Image from "../assets/banner.jpeg";

//icons
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

// animationtype
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section id="home" className="section">
      <div className="mx-auto w-full flex justify-evenly">
        <div className="text-[40px]">
          <h1 className="font-bold">Hello! I'm Daniel Awale</h1>
          <div className="flex">
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
          <div className="flex text-[40px] gap-x-4 mt-5">
            <a href="https://github.com/danielAwale">
              <FaGithub className="cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/daniel-awale/">
              <FaLinkedin className="cursor-pointer" />
            </a>
            <a href="https://www.youtube.com/channel/UCAw_zisg_L7figOPnInAoVA">
              <FaYoutube className="cursor-pointer" />
            </a>
          </div>
        </div>
        <div>
          <img src={Image} alt="" className="h-[600px] w-[800px] rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default Banner;