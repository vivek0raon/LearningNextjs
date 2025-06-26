import PostCreateForm from "@/components/posts/PostCreateForm";
import React from "react";

const TopicShowPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1>{slug}</h1>
      </div>
      <div>
        <PostCreateForm />
      </div>
    </div>
  );
};

export default TopicShowPage;
