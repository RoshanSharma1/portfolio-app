import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  const quickStats = [
    { label: "Years Experience", value: "6+", color: "from-indigo-600 to-purple-600" },
    { label: "Projects Completed", value: "20+", color: "from-purple-600 to-pink-600" },
    { label: "Technologies", value: "15+", color: "from-amber-500 to-orange-500" },
    { label: "Happy Clients", value: "10+", color: "from-orange-500 to-red-500" }
  ];

  const recentExperience = {
    company: "Amazon",
    position: "Software Development Engineer",
    duration: "Aug 2021 - Present",
    highlights: [
      "Reduced P90 latency per request by 72% and heap usage by 29%",
      "Designed scalable microservice architecture in AWS",
      "Developed customer onboarding and customization pages for e-Invoice",
      "Maintained CI/CD pipelines and ECS services for global e-commerce"
    ]
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-amber-500/10 to-orange-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate software engineer with expertise in distributed systems and concurrent programming. 
            Published researcher in programming languages and formal verification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Stats */}
          <Card className="gradient-card hover-lift">
            <CardHeader>
              <CardTitle className="text-xl">Quick Stats</CardTitle>
              <CardDescription>
                My journey in numbers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {quickStats.map((stat, index) => (
                  <div key={stat.label} className="text-center p-4 bg-gradient-to-br from-background to-muted/30 rounded-lg hover-lift border border-border/50">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Current Role */}
          <Card className="gradient-card hover-lift">
            <CardHeader>
              <CardTitle className="text-xl">Current Role</CardTitle>
              <CardDescription>
                What I'm working on now
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                  {recentExperience.position}
                </h3>
                <p className="text-indigo-600 font-medium">{recentExperience.company}</p>
                <p className="text-sm text-muted-foreground">{recentExperience.duration}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Recent Achievements:</h4>
                <ul className="space-y-2">
                  {recentExperience.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Preview */}
        <Card className="mt-8 gradient-card hover-lift">
          <CardHeader>
            <CardTitle className="text-xl">Core Skills</CardTitle>
            <CardDescription>
              Technologies and tools I work with
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-indigo-600">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs hover:scale-105 transition-transform">React</Badge>
                  <Badge variant="outline" className="text-xs hover:scale-105 transition-transform">TypeScript</Badge>
                  <Badge variant="outline" className="text-xs hover:scale-105 transition-transform">AngularJS</Badge>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-purple-600">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs hover:scale-105 transition-transform">Java</Badge>
                  <Badge variant="outline" className="text-xs hover:scale-105 transition-transform">Spring Boot</Badge>
                  <Badge variant="outline" className="text-xs hover:scale-105 transition-transform">ASP.NET</Badge>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-amber-600">Cloud & DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs hover:scale-105 transition-transform">AWS</Badge>
                  <Badge variant="outline" className="text-xs hover:scale-105 transition-transform">CI/CD</Badge>
                  <Badge variant="outline" className="text-xs hover:scale-105 transition-transform">ECS</Badge>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-orange-600">Database</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs hover:scale-105 transition-transform">DynamoDB</Badge>
                  <Badge variant="outline" className="text-xs hover:scale-105 transition-transform">MongoDB</Badge>
                  <Badge variant="outline" className="text-xs hover:scale-105 transition-transform">SQL Server</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button asChild size="lg" className="gradient-primary hover-lift glow-primary text-white font-semibold px-8 py-3">
            <Link href="/about">
              Learn More About Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 