import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const blogPosts = [
  {
    id: "building-scalable-apps",
    title: "Building Scalable Applications with Next.js and TypeScript",
    excerpt: "Learn how to architect and build scalable web applications using Next.js 13+ App Router and TypeScript. This comprehensive guide covers best practices for performance, SEO, and maintainability.",
    author: "Roshan Sharma",
    date: "2024-01-15",
    category: "Development",
    readTime: "8 min read",
    tags: ["Next.js", "TypeScript", "Performance", "Architecture"],
    href: "/blog/building-scalable-apps"
  },
  {
    id: "modern-css-techniques",
    title: "Modern CSS Techniques for Better User Experience",
    excerpt: "Explore advanced CSS techniques including CSS Grid, Flexbox, and modern layout patterns that can significantly improve your website's user experience and responsiveness.",
    author: "Roshan Sharma",
    date: "2024-01-10",
    category: "Frontend",
    readTime: "6 min read",
    tags: ["CSS", "UX", "Responsive Design", "Layout"],
    href: "/blog/modern-css-techniques"
  },
  {
    id: "api-design-principles",
    title: "API Design Principles for Modern Web Applications",
    excerpt: "Discover the fundamental principles of designing RESTful APIs that are scalable, maintainable, and developer-friendly. Includes practical examples and real-world scenarios.",
    author: "Roshan Sharma",
    date: "2024-01-05",
    category: "Backend",
    readTime: "10 min read",
    tags: ["API Design", "REST", "Backend", "Architecture"],
    href: "/blog/api-design-principles"
  },
  {
    id: "state-management-react",
    title: "State Management in React: From useState to Redux",
    excerpt: "A comprehensive guide to state management in React applications, covering local state, context API, and global state management solutions for complex applications.",
    author: "Roshan Sharma",
    date: "2023-12-28",
    category: "Development",
    readTime: "12 min read",
    tags: ["React", "State Management", "Redux", "Context API"],
    href: "/blog/state-management-react"
  },
  {
    id: "docker-best-practices",
    title: "Docker Best Practices for Production Deployments",
    excerpt: "Learn essential Docker best practices for building, optimizing, and deploying containers in production environments. Includes security considerations and performance optimization tips.",
    author: "Roshan Sharma",
    date: "2023-12-20",
    category: "DevOps",
    readTime: "9 min read",
    tags: ["Docker", "DevOps", "Production", "Security"],
    href: "/blog/docker-best-practices"
  },
  {
    id: "testing-strategies",
    title: "Testing Strategies for Modern Web Applications",
    excerpt: "Comprehensive guide to implementing effective testing strategies including unit tests, integration tests, and end-to-end testing for web applications.",
    author: "Roshan Sharma",
    date: "2023-12-15",
    category: "Development",
    readTime: "11 min read",
    tags: ["Testing", "Jest", "Cypress", "Quality Assurance"],
    href: "/blog/testing-strategies"
  }
];

const categories = ["All", "Development", "Frontend", "Backend", "DevOps", "Architecture"];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on software development, 
              technology trends, and best practices.
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