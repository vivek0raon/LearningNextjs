import CommentCreateForm from "@/components/comments/CommentCreateForm";
import PostShow from "@/components/posts/PostShow";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

type PostShowPageProps = {
  params: Promise<{ slug: string; postId: string }>;
};

const PostShowPage: React.FC<PostShowPageProps> = async ({ params }) => {
  const { slug, postId } = await params;

  return (
    <div className="space-y-3">
      <Link href={`/topics/${slug}`}>
        <Button variant={"link"}>
          <ChevronLeft />
          back to {slug}
        </Button>
      </Link>
      <PostShow postId={postId} />
      <CommentCreateForm />
    </div>
  );
};

export default PostShowPage;
