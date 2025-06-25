import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signIn } from "@/app/actions/sign-in";
import { signOut } from "@/app/actions/sign-out";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { LogOut } from "lucide-react";
import { Separator } from "./ui/separator";

const Header = async () => {
  const session = await auth();
  return (
    <div className="grid grid-cols-3 h-14 items-center">
      <div className="flex justify-start">
        <h1 className="text-2xl font-bold">Discuss</h1>
      </div>
      <div className="flex justify-between">
        <Input type="text" placeholder="Search post..." />
      </div>
      <div className="flex justify-end gap-2">
        {session?.user ? (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage src={session.user.image || ""} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent>
              <h1>{session.user.name}</h1>
              <Separator className="my-2" />
              <form action={signOut}>
                <Button type="submit">
                  <LogOut /> Sign Out
                </Button>
              </form>
            </PopoverContent>
          </Popover>
        ) : (
          <>
            <form action={signIn}>
              <Button variant={"outline"}>Sign In</Button>
            </form>
            <form action={signIn}>
              <Button>Sign up</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
