import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    id: "codeorbit",
    title: "CodeOrbit",
    description: "A scalable AI agent orchestration platform that enables multi-agent workflows across organizations. Features distributed deployment, LLM integration, and workflow management.",
    technologies: ["React", "Node.js", "Docker", "LangChain", "Redis", "Flowise"],
    status: "Completed",
    category: "AI/ML",
    image: "/api/placeholder/400/250",
    href: "/projects/codeorbit"
  },
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB", "Express.js"],
    status: "Completed",
    category: "Full-Stack",
    image: "/api/placeholder/400/250",
    href: "/projects/e-commerce-platform"
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team features, and advanced project tracking capabilities.",
    technologies: ["TypeScript", "Next.js", "Socket.io", "PostgreSQL", "Prisma"],
    status: "In Progress",
    category: "Full-Stack",
    image: "/api/placeholder/400/250",
    href: "/projects/task-management-app"
  },
  {
    id: "data-dashboard",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing and visualizing complex datasets with D3.js, featuring real-time data updates and customizable charts.",
    technologies: ["D3.js", "React", "Python", "FastAPI", "PostgreSQL"],
    status: "Completed",
    category: "Data Science",
    image: "/api/placeholder/400/250",
    href: "/projects/data-dashboard"
  },
  {
    id: "mobile-app",
    title: "Mobile Fitness App",
    description: "Cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    status: "Completed",
    category: "Mobile",
    image: "/api/placeholder/400/250",
    href: "/projects/mobile-fitness-app"
  },
  {
    id: "ai-chatbot",
    title: "AI-Powered Chatbot",
    description: "Intelligent chatbot using natural language processing for customer support and automated responses.",
    technologies: ["Python", "TensorFlow", "NLP", "FastAPI", "Redis"],
    status: "In Progress",
    category: "AI/ML",
    image: "/api/placeholder/400/250",
    href: "/projects/ai-chatbot"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode and optimized performance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    status: "Completed",
    category: "Frontend",
    image: "/api/placeholder/400/250",
    href: "/projects/portfolio-website"
  }
];

const categories = ["All", "Full-Stack", "Frontend", "Mobile", "Data Science", "AI/ML"];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of projects that demonstrate technical expertise, 
              problem-solving skills, and innovative solutions.
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="group gradient-card hover-lift overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center">
                  <div className="text-4xl text-muted-foreground">📁</div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {project.description}
                      </CardDescription>
                    </div>
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className="ml-2"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full hover-lift border-2 border-indigo-500/30 hover:border-indigo-500/50">
                    <Link href={project.href}>View Project</Link>
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
