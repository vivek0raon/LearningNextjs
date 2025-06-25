"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "@/app/actions/sign-in";
import { signOut } from "@/app/actions/sign-out";
// import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { LogOut } from "lucide-react";
import { Separator } from "./ui/separator";

const AuthHeader = () => {
  const session = useSession();
  let authContent: React.ReactNode;

  if (!session.data?.user) {
    return null;
  }

  if (session.data?.user) {
    {
      authContent = (
        <Popover>
          <PopoverTrigger asChild>
            <Avatar>
              <AvatarImage src={session.data.user.image || ""} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <h1>{session.data.user.name}</h1>
            <Separator className="my-2" />
            <form action={signOut}>
              <Button type="submit">
                <LogOut /> Sign Out
              </Button>
            </form>
          </PopoverContent>
        </Popover>
      );
    }
  } else {
    authContent = (
      <>
        <form action={signIn}>
          <Button variant={"outline"}>Sign In</Button>
        </form>
        <form action={signIn}>
          <Button>Sign up</Button>
        </form>
      </>
    );
  }

  return authContent;
};

export default AuthHeader;
