import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, Project } from "@/data/projects";

// Fallback data for projects not in the projects.ts file
const projectData: Record<string, Project> = {
  "codeorbit": {
    id: "codeorbit",
    title: "CodeOrbit",
    description: "A scalable AI agent orchestration platform that enables multi-agent workflows across organizations with distributed deployment capabilities.",
    longDescription: `
      CodeOrbit is an enterprise-grade platform designed to orchestrate AI agents across multiple organizations and deployment environments. The system enables complex workflows where agents can collaborate, share context, and execute tasks in a distributed manner.
      
      The architecture follows a hybrid deployment model, allowing organizations to run agents in their own infrastructure while maintaining a centralized coordination layer. This approach provides both security and flexibility, enabling organizations to keep sensitive data within their boundaries while still benefiting from cross-organizational workflows.
      
      The platform integrates with various LLM providers and agent frameworks including LangChain, Flowise, and OpenAI, providing a unified interface for agent management, monitoring, and deployment.
    `,
    technologies: ["React", "Node.js", "Docker Compose", "LangChain", "Flowise", "Redis", "OpenAI", "Anthropic"],
    status: "Completed",
    category: "AI/ML",
    duration: "6 months",
    teamSize: "4 developers",
    challenges: [
      "Designing a secure multi-tenant architecture that respects organizational boundaries",
      "Implementing reliable message passing between distributed agent instances",
      "Managing state across long-running workflows with multiple agents",
      "Ensuring consistent agent behavior across different deployment environments"
    ],
    solutions: [
      "Created a hybrid deployment model with core libraries and deployment environments for each organization",
      "Implemented a message broker system with Redis for reliable cross-instance communication",
      "Developed a state management layer using LangGraph for persistent workflow state",
      "Built a unified testing framework to ensure consistent agent behavior across environments"
    ],
    features: [
      "Multi-organization agent orchestration",
      "Distributed deployment across multiple environments",
      "Workflow designer with visual editor",
      "Integration with multiple LLM providers (OpenAI, Anthropic, etc.)",
      "Real-time monitoring and observability",
      "Secure cross-organizational workflows",
      "Persistent state management",
      "Task queue and execution management"
    ],
    githubUrl: "https://github.com/yourusername/codeorbit",
    liveUrl: "https://codeorbit-demo.vercel.app",
    image: "/images/projects/codeorbit-architecture-dark.png",
    href: "/projects/codeorbit",
    hasDiagram: true
  },
  "e-commerce-platform": {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A comprehensive full-stack e-commerce solution built with modern web technologies. This project demonstrates scalable architecture, secure payment processing, and excellent user experience.",
    longDescription: `
      This e-commerce platform was built to handle high-volume transactions while maintaining excellent performance and user experience. The application features a modern, responsive design with advanced functionality including user authentication, product catalog management, shopping cart functionality, secure payment processing via Stripe, and a comprehensive admin dashboard.

      The project showcases my expertise in full-stack development, API design, database optimization, and third-party integrations. The architecture is designed to be scalable and maintainable, with clear separation of concerns and comprehensive error handling.
    `,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "JWT", "Redux"],
    status: "Completed",
    category: "Full-Stack",
    duration: "3 months",
    teamSize: "Solo",
    challenges: [
      "Implementing secure payment processing with Stripe",
      "Optimizing database queries for large product catalogs",
      "Building a responsive admin dashboard with real-time updates",
      "Ensuring PCI compliance for payment handling"
    ],
    solutions: [
      "Used Stripe's webhook system for reliable payment processing",
      "Implemented database indexing and query optimization",
      "Built real-time features using Socket.io",
      "Followed security best practices and conducted thorough testing"
    ],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart with persistent storage",
      "Secure payment processing with Stripe",
      "Order management and tracking",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
      "Real-time inventory updates"
    ],
    githubUrl: "https://github.com/yourusername/e-commerce-platform",
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
    image: "/api/placeholder/800/400",
    href: "/projects/e-commerce-platform"
  }
};

export async function generateStaticParams() {
  // Define all possible slugs here
  return [
    { slug: 'codeorbit' },
    { slug: 'e-commerce-platform' }
  ];
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // First try to get the project from the projects.ts file
  let project = getProjectBySlug(slug);
  
  // If not found, try the fallback data
  if (!project) {
    project = projectData[slug as keyof typeof projectData];
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Project Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                ← Back to Projects
              </Link>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                {project.status}
              </Badge>
            </div>
            
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {project.githubUrl && (
                <Button asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button variant="outline" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Project Image or Architecture Diagram */}
          <Card className="mb-8">
            <CardContent className="p-0">
              {project.hasDiagram ? (
                <div className="rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                    <div className="text-muted-foreground">
                      Architecture Diagram <span className="text-sm ml-2">(Coming Soon)</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                  <div className="text-muted-foreground">Project Screenshot</div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground whitespace-pre-line">
                      {project.longDescription}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Architecture Diagram (only for projects with diagrams) */}
              {project.hasDiagram && (
                <Card>
                  <CardHeader>
                    <CardTitle>Architecture Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none">
                      <p className="text-muted-foreground mb-4">
                        The architecture diagram above illustrates the distributed nature of the CodeOrbit platform. Key components include:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span><strong>Main API/Workflow:</strong> Central coordination layer that manages workflows and routes requests.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span><strong>CodeOrbit Instances:</strong> Organization-specific deployments that run within customer environments.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span><strong>Core Libraries:</strong> Shared components including Flowise for workflow design, LangChain for agent capabilities, and LLM integrations.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span><strong>Managed Service:</strong> Optional cloud deployment with Docker Compose for organizations that prefer not to self-host.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span><strong>Redis Cache:</strong> Distributed cache for task queuing and state management across instances.</span>
                        </li>
                      </ul>
                      <p className="text-muted-foreground mt-4">
                        This architecture enables secure, cross-organizational workflows while respecting data boundaries and security requirements.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Challenges & Solutions */}
              <Card>
                <CardHeader>
                  <CardTitle>Challenges & Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-semibold text-destructive">Challenge:</h4>
                        <p className="text-muted-foreground">{challenge}</p>
                        <h4 className="font-semibold text-green-600">Solution:</h4>
                        <p className="text-muted-foreground">{project.solutions[index]}</p>
                        {index < project.challenges.length - 1 && <Separator />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Category</h4>
                    <p className="text-muted-foreground">{project.category}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Duration</h4>
                    <p className="text-muted-foreground">{project.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Team Size</h4>
                    <p className="text-muted-foreground">{project.teamSize}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Technologies Used */}
              <Card>
                <CardHeader>
                  <CardTitle>Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
