import React from "react";
import ProjectItem from "./ProjectItem";
import Img1 from "../assets/project-img1.png";
import Img2 from "../assets/project-img2.png";
import Img3 from "../assets/project-img3.png";
import Img4 from "../assets/project-img4.png";

const Project = () => {
  return (
    <>
      <div id="project" className="m-auto p-4 pb-28 pt-8">
        <h1 className="text-5xl font-bold text-center pb-12">Projects</h1>
        <div className="grid sm:grid-cols-2 gap-12">
          <ProjectItem
            img={Img1}
            title="Image Generator"
            url="https://github.com/danielAwale/quote-generator"
          />
          <ProjectItem
            img={Img2}
            title="BasketBall Labs"
            url="https://github.com/danielAwale/basketball-labs"
          />
          <ProjectItem
            img={Img3}
            title="DALL-E clone"
            url="https://github.com/danielAwale/DALL-E-clone"
          />
          <ProjectItem
            img={Img4}
            title="Finance Tracker"
            url="https://github.com/danielAwale/finance-tracker"
          />
        </div>
      </div>
    </>
  );
};

export default Project;
