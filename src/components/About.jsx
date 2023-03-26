import React from "react";

import htmlLogo from "../assets/html.svg";
import tailwindLogo from "../assets/tailwind.svg";
import reactLogo from "../assets/react.png";
import nextjsLogo from "../assets/next.png";
import javascriptLogo from "../assets/javascrip.png";
import typescriptLogo from "../assets/typescript.svg";
import nodejsLogo from "../assets/node.svg";
import firebaseLogo from "../assets/firebase.svg";
import mongoLogo from "../assets/mongo.svg";
import sanityLogo from "../assets/sanity.png";
import postgresLogo from "../assets/postgres.svg";

const About = () => {
  return (
    <div className="bg-gray-100 flex flex-col pb-44 xl:pb-72" id="about">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-3xl font-semibold text-gray-500">
            Hi there! I'm an enthusiastic software developer with a passion for
            coding and a strong commitment to delivering top-quality results. I
            have a broad range of technical skills and experience, including
            JavaScript, HTML, CSS, PostgreSQL, MongoDB, React, Ruby, and
            Tailwind CSS. Whether working independently or as part of a team, I
            always strive to be a creative and proactive problem-solver,
            constantly seeking out new and innovative ways to improve the user
            experience. I am passionate about keeping up-to-date with the latest
            industry trends and best practices, and I am committed to
            continuously improving my skills and expanding my knowledge base. If
            you're looking for a dedicated software developer with a passion for
            coding and a commitment to delivering exceptional results, please
            don't hesitate to get in touch!
          </p>
        </div>
      </div>

      <div className="w-full mt-16 items-center flex justify-evenly">
        <img src={htmlLogo} alt="HTML logo" className="h-[60px]" />
        <img src={tailwindLogo} alt="Tailwind CSS logo" className="h-[60px]" />
        <img src={reactLogo} alt="React logo" className="h-[60px]" />
        <img src={javascriptLogo} alt="JavaScript logo" className="h-[60px]" />
        <img src={typescriptLogo} alt="TypeScript logo" className="h-[60px]" />
        <img src={nodejsLogo} alt="Node.js logo" className="h-[60px]" />
        <img src={nextjsLogo} alt="next.js logo" className="h-[60px]" />
        <img src={firebaseLogo} alt="firebase logo" className="h-[60px]" />
        <img src={mongoLogo} alt="mongodb logo" className="h-[60px]" />
        <img src={postgresLogo} alt="postgresql logo" className="h-[60px]" />
      </div>
    </div>
  );
};

export default About;
