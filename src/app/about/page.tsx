import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const skills = [
  { category: "Programming Languages", items: ["Java", "Python", "TypeScript"] },
  { category: "Frameworks", items: ["React", "Angular", "Spring Boot"] },
  { category: "Tools & OS", items: ["GIT", "IntelliJ IDEA", "AWS", "Docker"] },
  { category: "Paradigms", items: ["Agile/Scrum", "OOP", "SOLID", "ACID", "Design Patterns", "Dependency Injection", "Client/Server Model"] },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Illinois at Chicago (UIC)",
    year: "Aug 2019 - May 2021",
    description: "Thesis: 'Formal Verification of Concurrent Binary Search Tree'. Relevant Courses: Distributed Systems, DBMS, Compiler Design, Machine Learning, Advanced Network Security."
  },
  {
    degree: "Bachelor's Degree in Computer Engineering",
    school: "Tribhuvan University, Kathmandu, NP",
    year: "Nov 2012 - Nov 2016",
    description: "Relevant Courses: Data Structures and Algorithms, Software Engineering, Object-Oriented Design."
  }
];

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

const projects = [
  {
    title: "Taxi Ride Sharing",
    tech: "Java, MySQL",
    date: "Spring 2021",
    link: "https://bitbucket.org/cs581_team_project/cs581",
    description: "Devised a real-time ride-sharing algorithm that merges trip requests in under 5 seconds. Analyzed 1M NYC trip data, achieving 30% distance saving for 3 min waiting time. Team size: 3."
  },
  {
    title: "Browser Fingerprinting Detection",
    tech: "Python",
    date: "Fall 2020",
    link: "https://github.com/UIC-CS568/course-project-team_sharma_lin",
    description: "Created ML-based (decision tree & linear regression) model to detect fingerprinting scripts in websites. Feature extraction from Alexa top 10k sites, 98.55% recall. Team size: 2."
  },
  {
    title: "Tiger Compiler Design",
    tech: "C",
    date: "Spring 2020",
    link: "",
    description: "Wrote a compiler for Tiger language supporting x86 assembly. Lexical analysis with Lex, parsing with Bison, AST construction, IR translation, register allocation, and instruction selection."
  }
];

const research = [
  {
    title: "Proving Logical Atomicity using Lock Invariants",
    authors: "Roshan Sharma, Shengyi Wang, Alexander Oey, Anastasiia Evdokimova, Lennart Beringer, William Mansky",
    journal: "arXiv:2304.13898",
    date: "April 2023",
    link: "https://arxiv.org/abs/2304.13898",
    description: "Research on logical atomicity as a specification format for data structures in concurrent separation logic. Compared lock-invariant-based specifications with atomic lock specifications for fine-grained locking. Implemented proof technique in Verified Software Toolchain and applied to C implementations of lock-based concurrent data structures.",
    impact: "17 pages, 5 figures, presented at the First Workshop on Advances in Separation Logic. Published in Programming Languages (cs.PL) category."
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header with Profile Picture and Contact */}
      <div className="mb-12">
        <div className="lg:hidden text-center space-y-6">
          <div className="flex justify-center">
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
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
              Roshan Sharma
            </h1>
            <div className="text-muted-foreground text-sm">
              Seattle, WA, USA | 773-786-6473<br />
              <a href="mailto:rossharma1@gmail.com" className="underline">rossharma1@gmail.com</a><br />
              <a href="https://linkedin.com/in/rossharma1" target="_blank" rel="noopener noreferrer" className="underline">linkedin.com/in/rossharma1</a> | <a href="https://github.com/RoshanSharma1" target="_blank" rel="noopener noreferrer" className="underline">github.com/RoshanSharma1</a>
            </div>
          </div>
        </div>
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          <div className="flex justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Roshan Sharma"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-2">
            <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text mb-2">
              Roshan Sharma
            </h1>
            <div className="text-muted-foreground text-base">
              Seattle, WA, USA | 773-786-6473<br />
              <a href="mailto:rossharma1@gmail.com" className="underline">rossharma1@gmail.com</a><br />
              <a href="https://linkedin.com/in/rossharma1" target="_blank" rel="noopener noreferrer" className="underline">linkedin.com/in/rossharma1</a> | <a href="https://github.com/RoshanSharma1" target="_blank" rel="noopener noreferrer" className="underline">github.com/RoshanSharma1</a>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">Summary</h2>
        <p className="text-lg text-muted-foreground">
          Full Stack Developer with over 3 and half years of proven experience in Software Development using C#.NET and Java platform. Known for excellent troubleshooting skills—able to analyze code and engineer well-researched and responsive solutions. Strong problem-solving skills using Object-Oriented concepts, data structures and algorithms. Ability to work effectively independently as well as contribute as a team player.
        </p>
      </section>

      {/* Research */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">Research Publications</h2>
        <div className="space-y-6">
          {research.map((paper, index) => (
            <Card key={index} className="gradient-card hover-lift">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                      {paper.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{paper.authors}</p>
                    <p className="text-sm text-amber-600 font-medium">{paper.journal} | {paper.date}</p>
                  </div>
                  <Badge variant="outline" className="w-fit">Research</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{paper.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{paper.impact}</p>
                  <a 
                    href={paper.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 underline text-sm font-medium"
                  >
                    View Paper →
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="gradient-card hover-lift">
              <CardHeader>
                <CardTitle className="text-lg text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                  {skillGroup.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">Professional Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card key={index} className="gradient-card hover-lift">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                      {exp.position}
                    </CardTitle>
                    <p className="text-lg font-medium text-amber-600">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {exp.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{exp.description}</p>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">Relevant Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="gradient-card hover-lift">
              <CardHeader>
                <CardTitle className="text-lg text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{project.tech} | {project.date}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline text-indigo-600 text-xs">Project Link</a>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="gradient-card hover-lift">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                  <Badge variant="outline">{edu.year}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
