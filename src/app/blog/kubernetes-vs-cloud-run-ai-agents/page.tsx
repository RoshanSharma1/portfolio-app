import { getBlogPost } from "@/data/blog-posts";
import { BlogPostContent } from "@/components/blog/blog-post-content";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";

export default function KubernetesVsCloudRunPage() {
  const post = getBlogPost("kubernetes-vs-cloud-run-ai-agents");
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <BlogPostContent post={post} />
      <Footer />
    </div>
  );
}
