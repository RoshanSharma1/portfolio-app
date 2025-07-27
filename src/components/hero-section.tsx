import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Import experience data to get the most recent role
const experience = [
  {
    company: "Amazon",
    position: "Software Development Engineer",
    duration: "Aug 2021 - Present",
    location: "Seattle, WA, USA",
    description: "Design and implement large-scale distributed systems for Amazon Business e-Invoice solutions. Developed dynamic onboarding and customization pages for e-Invoice customers. Designed scalable microservice architecture in AWS (EC2, SQS, SNS, Lambda, ELB, Route53, DynamoDB). Expert in Java and React for full-stack development. Developed and maintained CI/CD pipelines and ECS services for global e-commerce projects.",
    achievements: [
      "Drove key projects to reduce P90 latency per request by 72% and heap usage by 29% per request.",
      "Developed customer onboarding and customization pages for e-Invoice.",
      "Designed scalable microservice architecture in AWS.",
      "Maintained CI/CD pipelines and ECS services."
    ],
    technologies: ["Java", "React", "Spring Boot", "AWS", "CI/CD", "ECS", "DynamoDB"]
  },
  {
    company: "Dolphin Dive Technology",
    position: "Software Development Engineer",
    duration: "Nov 2016 - Aug 2019",
    location: "Kathmandu, Nepal (Remote for PensionPro, USA)",
    description: "Worked as a remote developer for PensionPro, rewriting desktop features for the web using AngularJS and ASP.NET Web API. Optimized REST APIs with OData and LINQ in EntityFramework. Implemented audit logs, designed relational databases, integrated third-party libraries, and created job runner services for invoicing and billing.",
    achievements: [
      "Optimized REST API latency by 20% using OData and LINQ.",
      "Implemented audit logs and CRUD tracking in MongoDB.",
      "Designed and optimized SQL Server databases and stored procedures.",
      "Integrated third-party libraries (Telerik, Braintree, ZenDesk, SendGrid).",
      "Troubleshot 200+ production bugs and conducted code reviews."
    ],
    technologies: ["AngularJS", "ASP.NET Web API", "EntityFramework", "MongoDB", "SQL Server", "C#", "LINQ"]
  }
];

// Get the most recent role (first in the array)
const currentRole = experience[0];

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Mobile: Profile picture integrated with name */}
              <div className="flex flex-col items-center lg:items-start space-y-6">
                {/* Profile Picture - Only show on mobile, smaller size */}
                <div className="lg:hidden">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                      <Image
                        src="/images/profile.jpg"
                        alt="Roshan Sharma"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center lg:text-left">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text animate-float">
                    Roshan Sharma
                  </span>
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-2xl text-center lg:text-left">
                {currentRole.position} at {currentRole.company} with expertise in distributed systems and concurrent programming. 
                Published researcher in programming languages and formal verification. Passionate about building scalable applications and solving complex problems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="gradient-primary hover-lift glow-primary text-white font-semibold px-8 py-3">
                <Link href="/about">Learn More About Me</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-lift border-2 border-indigo-500/30 hover:border-indigo-500/50 px-8 py-3 font-semibold">
                <Link href="/projects">View My Work</Link>
              </Button>
            </div>
          </div>

          {/* Profile Picture - Desktop only, larger size */}
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Roshan Sharma"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 