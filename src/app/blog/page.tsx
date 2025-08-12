import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const blogPosts = [
  {
    id: "build-ai-agent-open-source",
    title: "How to Build Your Own AI Agent with Open-Source Tools",
    excerpt: "AI agents aren't just for tech giants anymore. With open-source tools like Flowise, LangChain, and LangGraph, anyone can create an agent that automates workflows, integrates with APIs, and runs 24/7 — without building everything from scratch.",
    author: "Roshan Sharma",
    date: "2025-01-15",
    category: "AI & Automation",
    readTime: "7 min read",
    tags: ["AI Agents", "Flowise", "LangChain", "Open Source", "Automation"],
    href: "/blog/build-ai-agent-open-source"
  },
  {
    id: "kubernetes-vs-cloud-run-ai-agents",
    title: "Kubernetes vs Cloud Run for Deploying AI Agents: Which Should You Choose?",
    excerpt: "When you build an AI agent, the next big question is: where do you run it? Kubernetes and Cloud Run are two powerful choices — but they serve different needs. Learn which platform fits your AI deployment strategy.",
    author: "Roshan Sharma",
    date: "2025-01-12",
    category: "DevOps & Infrastructure",
    readTime: "6 min read",
    tags: ["Kubernetes", "Cloud Run", "AI Deployment", "Serverless", "Infrastructure"],
    href: "/blog/kubernetes-vs-cloud-run-ai-agents"
  },
  {
    id: "apis-for-business-automation",
    title: "Designing APIs That Power Business Automation",
    excerpt: "A great API isn't just code — it's the bridge between systems. When building for automation, APIs must be reliable, flexible, and integration-friendly. Learn how to design APIs that AI agents love.",
    author: "Roshan Sharma",
    date: "2025-01-10",
    category: "API Design",
    readTime: "8 min read",
    tags: ["API Design", "Business Automation", "Integration", "Workflows", "Architecture"],
    href: "/blog/apis-for-business-automation"
  },
  {
    id: "customize-open-source-without-breaking-updates",
    title: "How to Customize an Open-Source Project Without Breaking Updates",
    excerpt: "Forking an open-source repo is easy — keeping it updated while adding your own features is the hard part. Here's how to avoid painful merge conflicts and still make it yours.",
    author: "Roshan Sharma",
    date: "2025-01-08",
    category: "Open Source",
    readTime: "5 min read",
    tags: ["Open Source", "Git", "Customization", "Maintenance", "Best Practices"],
    href: "/blog/customize-open-source-without-breaking-updates"
  },
  {
    id: "autonomous-ai-software-development",
    title: "From Prompt to Production: How Autonomous AI Can Build Software for You",
    excerpt: "What if you could just describe a feature and get working code, tested and deployed — without touching your IDE? That's the promise of autonomous software engineering platforms. Explore the future of AI-powered development.",
    author: "Roshan Sharma",
    date: "2025-01-05",
    category: "AI & Development",
    readTime: "9 min read",
    tags: ["Autonomous AI", "Software Engineering", "AI Development", "Automation", "Future Tech"],
    href: "/blog/autonomous-ai-software-development"
  }
];

const categories = ["All", "AI & Automation", "DevOps & Infrastructure", "API Design", "Open Source", "AI & Development"];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights on AI agents, automation, modern development practices, 
              and the future of autonomous software engineering.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group gradient-card hover-lift">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" className="w-full hover-lift border-2 border-indigo-500/30 hover:border-indigo-500/50">
                    <Link href={post.href}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
