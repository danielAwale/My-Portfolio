import React from "react";

const Header = () => {
  return (
    <div className="pt-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center text-2xl">
          {/* logo */}
          <a href="#">DANIEL AWALE</a>
          {/* resume */}
          <button class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
