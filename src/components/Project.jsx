import React from "react";
import ProjectItem from "./ProjectItem";
import Img1 from "../assets/project-img1.png";
import Img2 from "../assets/project-img2.png";
import Img3 from "../assets/project-img3.png";
import Img4 from "../assets/project-img4.png";

const Project = () => {
  return (
    <>
      <div id="project" className="m-auto p-4 py-16">
        <h1 className="text-5xl font-bold text-center">Projects</h1>
        <p className="text-center py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod,
          ut in vel unde tempore, sequi laboriosam quisquam dolore mollitia
          eveniet iusto voluptate impedit officiis repudiandae obcaecati sint
          omnis tempora.
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
          <ProjectItem img={Img1} title="Image Generator" />
          <ProjectItem img={Img2} title="BasketBall Labs" />
          <ProjectItem img={Img3} title="DALL-E clone" />
          <ProjectItem img={Img4} title="Finance Tracker" />
        </div>
      </div>
    </>
  );
};

export default Project;
