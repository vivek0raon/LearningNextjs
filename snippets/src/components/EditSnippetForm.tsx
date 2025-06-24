"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import type { Snippet } from "@/generated/prisma";
import { Button } from "./ui/button";
import saveSnippet from "@/actions";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

  const changeEventHandler = (value: string = "") => {
    setCode(value);
  };

  // you can't use server action as an inline inside client component.
  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);

  return (
    <div className="flex flex-col gap-4">
      <form
        action={saveSnippetAction}
        className="flex justify-between gap-3 items-center"
      >
        <h1 className="font-bold text-2xl">Your code editor:</h1>
        <Button type="submit">Save</Button>
      </form>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={changeEventHandler}
      />
    </div>
  );
};

export default EditSnippetForm;
