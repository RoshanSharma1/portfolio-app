import { BlogPost, CodeExample, Callout } from "@/data/blog-posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, ExternalLink, BookOpen, Lightbulb, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface BlogPostContentProps {
  post: BlogPost;
}

const CalloutIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'warning':
      return <AlertTriangle className="h-5 w-5" />;
    case 'success':
      return <CheckCircle className="h-5 w-5" />;
    case 'tip':
      return <Lightbulb className="h-5 w-5" />;
    default:
      return <Info className="h-5 w-5" />;
  }
};

const CalloutStyles = {
  info: "bg-blue-50 border-blue-200 text-blue-800",
  warning: "bg-amber-50 border-amber-200 text-amber-800",
  success: "bg-green-50 border-green-200 text-green-800",
  tip: "bg-purple-50 border-purple-200 text-purple-800"
};

export function BlogPostContent({ post }: BlogPostContentProps) {
  const renderBulletPoints = (points: string[]) => (
    <ul className="space-y-3 my-6">
      {points.map((point, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
          <span className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
        </li>
      ))}
    </ul>
  );

  const renderCodeExample = (codeExample: CodeExample) => (
    <div className="my-8">
      {codeExample.title && (
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{codeExample.title}</h4>
      )}
      {codeExample.description && (
        <p className="text-gray-600 mb-4">{codeExample.description}</p>
      )}
      <div className="relative">
        <SyntaxHighlighter
          language={codeExample.language}
          style={oneDark}
          className="rounded-lg"
          customStyle={{
            padding: '1.5rem',
            fontSize: '0.875rem',
            lineHeight: '1.5'
          }}
        >
          {codeExample.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );

  const renderCallout = (callout: Callout) => (
    <div className={`border-l-4 p-6 my-8 rounded-r-lg ${CalloutStyles[callout.type as keyof typeof CalloutStyles]}`}>
      <div className="flex items-start gap-3">
        <CalloutIcon type={callout.type} />
        <div>
          <h4 className="font-semibold mb-2">{callout.title}</h4>
          <p className="leading-relaxed">{callout.content}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Button asChild variant="ghost" className="mb-8 hover:bg-indigo-50">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-indigo-100 text-indigo-700">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="mb-8">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={800}
                height={400}
                className="rounded-xl w-full shadow-lg"
              />
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              {post.content.introduction}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Table of Contents */}
            <Card className="mb-12 bg-gray-50 border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-indigo-600" />
                  <h3 className="text-lg font-semibold text-gray-900 m-0">Table of Contents</h3>
                </div>
                <ul className="space-y-2 m-0">
                  {post.content.sections.map((section, index) => (
                    <li key={section.id} className="list-none">
                      <a 
                        href={`#${section.id}`}
                        className="text-indigo-600 hover:text-indigo-800 transition-colors no-underline"
                      >
                        {index + 1}. {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Sections */}
            {post.content.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-indigo-100 pb-3">
                  {section.title}
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {section.content}
                </p>

                {section.subsections?.map((subsection, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {subsection.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {subsection.content}
                    </p>
                    {subsection.bulletPoints && renderBulletPoints(subsection.bulletPoints)}
                    {subsection.codeExample && renderCodeExample(subsection.codeExample)}
                  </div>
                ))}

                {section.codeExample && renderCodeExample(section.codeExample)}
                {section.callout && renderCallout(section.callout)}
              </section>
            ))}

            {/* Conclusion */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-indigo-100 pb-3">
                Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {post.content.conclusion}
              </p>
            </section>

            {/* Key Takeaways */}
            <Card className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-indigo-600" />
                  Key Takeaways
                </h3>
                <ul className="space-y-3">
                  {post.content.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Resources */}
            <section className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Additional Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {post.content.resources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{resource.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {resource.type}
                          </Badge>
                        </div>
                        <Button asChild size="sm" variant="ghost">
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
