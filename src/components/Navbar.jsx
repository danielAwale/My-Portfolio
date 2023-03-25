import React from "react";
// icons
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { BsChatSquareText } from "react-icons/bs";

//smooth scroll
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed bottom-2 w-full">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-3xl items-center text-white/50">
          <Link
            className="cursor-pointer"
            to="home"
            smooth={true}
            offset={-100}
          >
            <AiFillHome />
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            smooth={true}
            // offset={+100}
          >
            <IoIosContact />
          </Link>
          <Link
            className="cursor-pointer"
            to="project"
            smooth={true}
            offset={25}
          >
            <AiFillProject />
          </Link>
          <Link className="cursor-pointer" to="contact" smooth={true}>
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
