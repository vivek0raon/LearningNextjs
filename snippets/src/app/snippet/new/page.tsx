"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useActionState } from "react";
import { createSnippet } from "@/actions";
const NewSnippet = () => {
  const [formStateData, callServerAction] = useActionState(createSnippet, {
    message: "",
  });

  return (
    <form action={callServerAction} className="space-y-3">
      <div className="space-y-3">
        <Label>Title</Label>
        <Input type="text" name="title" id="title" />
      </div>
      <div className="space-y-3">
        <Label>Code</Label>
        <Textarea name="code" id="code" />
      </div>
      {formStateData.message && (
        <div className="p-2 bg-red-300 border-2 border-red-600">
          {formStateData.message}
        </div>
      )}
      <Button type="submit">New</Button>
    </form>
  );
};

export default NewSnippet;
