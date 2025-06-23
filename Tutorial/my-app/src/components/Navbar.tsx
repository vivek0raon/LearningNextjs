import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <nav className="flex absolute z-10 container  justify-between  mx-auto p-3  text-white  items-center">
        <Link href="/" className="font-bold text-2xl">
          Home
        </Link>
        <div className="flex space-x-3.5">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliablity</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
