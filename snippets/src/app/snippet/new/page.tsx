import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const newSnippet = () => {
  async function createSnippet(formData: FormData) {
    "use server"; // user server directive
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log("Created snippet", snippet);
    redirect("/");
  }

  return (
    <form action={createSnippet} className="space-y-3">
      <div className="space-y-3">
        <Label>Title</Label>
        <Input type="text" name="title" id="title" />
      </div>
      <div className="space-y-3">
        <Label>Code</Label>
        <Textarea name="code" id="code" />
      </div>
      <Button type="submit">New</Button>
    </form>
  );
};

export default newSnippet;
