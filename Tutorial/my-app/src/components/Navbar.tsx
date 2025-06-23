import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex container  justify-between  mx-auto p-3 bg-slate-600 text-white  items-center">
        <h1 className="font-bold text-2xl">Home</h1>
        <div className="flex space-x-3.5">
          <h1>Performance</h1>
          <h1>Reliablity</h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
