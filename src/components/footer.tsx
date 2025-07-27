import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">RS</span>
              </div>
              <span className="font-semibold text-lg text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                Roshan Sharma
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer | Seattle, WA, USA
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/projects" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="space-y-2">
              <a 
                href="https://github.com/RoshanSharma1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/rossharma1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:rossharma1@gmail.com"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Roshan Sharma. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS, and shadcn/ui</p>
        </div>
      </div>
    </footer>
  );
} 