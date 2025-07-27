import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    id: "research-paper",
    title: "Proving Logical Atomicity using Lock Invariants",
    description: "Research on logical atomicity as a specification format for data structures in concurrent separation logic. Published in arXiv:2304.13898.",
    technologies: ["Formal Verification", "Concurrent Systems", "Programming Languages", "C"],
    status: "Published",
    href: "https://arxiv.org/abs/2304.13898",
    gradient: "from-indigo-600 to-purple-600",
    external: true
  },
  {
    id: "taxi-ride-sharing", 
    title: "Taxi Ride Sharing Algorithm",
    description: "Real-time ride-sharing algorithm that merges trip requests in under 5 seconds. Analyzed 1M NYC trip data, achieving 30% distance saving.",
    technologies: ["Java", "MySQL", "Algorithms", "Data Analysis"],
    status: "Completed",
    href: "https://bitbucket.org/cs581_team_project/cs581",
    gradient: "from-purple-600 to-pink-600",
    external: true
  },
  {
    id: "browser-fingerprinting",
    title: "Browser Fingerprinting Detection",
    description: "ML-based model to detect fingerprinting scripts in websites. Feature extraction from Alexa top 10k sites, 98.55% recall.",
    technologies: ["Python", "Machine Learning", "Decision Trees", "Linear Regression"],
    status: "Completed", 
    href: "https://github.com/UIC-CS568/course-project-team_sharma_lin",
    gradient: "from-amber-500 to-orange-500",
    external: true
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tr from-amber-500/10 to-orange-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my research publications and key projects that demonstrate technical expertise in distributed systems, machine learning, and formal verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <Card key={project.id} className="group gradient-card hover-lift overflow-hidden relative">
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant={project.status === "Published" ? "default" : "secondary"}
                    className="text-xs font-medium"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full hover-lift border-2 border-indigo-500/30 hover:border-indigo-500/50"
                >
                  <Link href={project.href} target={project.external ? "_blank" : "_self"} rel={project.external ? "noopener noreferrer" : ""}>
                    {project.external ? "View External" : "View Project"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="gradient-primary hover-lift glow-primary text-white font-semibold px-8 py-3">
            <Link href="/about">
              View Full Profile
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 