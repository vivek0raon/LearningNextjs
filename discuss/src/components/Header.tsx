import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signIn } from "@/app/actions/sign-in";

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
        <form action={signIn}>
          <Button variant={"outline"}>Sign In</Button>
        </form>
        <form action={signIn}>
          <Button>Sign up</Button>
        </form>
      </div>
    </div>
  );
};

export default Header;
