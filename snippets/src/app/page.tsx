import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1>Snippet</h1>
        <Link
        href={'/snippet/new'}>
          <Button>New</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
