import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <nav className="flex container  justify-between  mx-auto p-3 bg-slate-600 text-white  items-center">
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
