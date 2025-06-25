import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="grid grid-cols-3 h-14 items-center">
      <div className="flex justify-start">
        <h1 className="text-2xl font-bold">Discuss</h1>
      </div>
      <div className="flex justify-between">
        <Input type="text" placeholder="Search post..." />
      </div>
      <div className="flex justify-end gap-2">
        <Button variant={"outline"}>Sign In</Button>
        <Button>Sign Out</Button>
      </div>
    </div>
  );
};

export default Header;
