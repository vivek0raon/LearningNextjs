import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const newSnippet = () => {
  return (
    <form className="space-y-3">
      <div className="space-y-3">
        <Label>Title</Label>
        <Input type="text" name="title" id="title" />
      </div>
      <div className="space-y-3">
        <Label>Code</Label>
        <Textarea name="title" id="title" />
      </div>
      <Button type="submit">New</Button>
    </form>
  );
};

export default newSnippet;
