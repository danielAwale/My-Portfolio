import React from "react";

const ProjectItem = ({ img, title, url }) => {
  return (
    <a href={url}>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group">
        <img
          src={img}
          alt="images"
          className="rounded-xl group-hover:opacity-10 h-[300px]"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl font-bold text-white tracking-wider text-center">
            {title}
          </h3>
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
