"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, Code, Cloud, Users } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I&apos;m here to help you build something extraordinary. 
            Whether it&apos;s a complex web application, cloud architecture, or innovative research project.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-indigo-50/50 dark:from-slate-800 dark:to-indigo-950/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email Me</h3>
              <a href="mailto:rossharma1@gmail.com" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                rossharma1@gmail.com
              </a>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50/50 dark:from-slate-800 dark:to-purple-950/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/rossharma1" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition-colors">
                Connect with me
              </a>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-green-50/50 dark:from-slate-800 dark:to-green-950/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Call Me</h3>
              <a href="tel:+17737866473" className="text-green-600 hover:text-green-700 transition-colors">
                773-786-6473
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details & Stats */}
          <div className="space-y-6">
            {/* Location & Social */}
            <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-900/50 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  Location & Social
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Seattle, WA, USA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-muted-foreground" />
                  <a href="https://github.com/RoshanSharma1" target="_blank" rel="noopener noreferrer" 
                     className="text-sm hover:text-indigo-600 transition-colors">
                    github.com/RoshanSharma1
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 bg-gradient-to-br from-white to-indigo-50/50 dark:from-slate-800 dark:to-indigo-950/50 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-950/50 dark:to-indigo-900/50">
                    <div className="text-2xl font-bold text-indigo-600">3.5+</div>
                    <div className="text-xs text-muted-foreground">Years Exp</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/50 dark:to-purple-900/50">
                    <div className="text-2xl font-bold text-purple-600">50+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/50 dark:to-green-900/50">
                    <div className="text-2xl font-bold text-green-600">1</div>
                    <div className="text-xs text-muted-foreground">Publication</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/50 dark:to-orange-900/50">
                    <div className="text-2xl font-bold text-orange-600">24h</div>
                    <div className="text-xs text-muted-foreground">Response</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="border-0 bg-gradient-to-br from-white to-green-50/50 dark:from-slate-800 dark:to-green-950/50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <Badge variant="outline" className="text-green-600 border-green-600 bg-green-50/50">
                    Available for Projects
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Open to new opportunities, freelance projects, and consulting work. Specializing in full-stack development and cloud architecture.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-900/50 shadow-xl">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                    Send a Message
                  </CardTitle>
                </div>
                <p className="text-muted-foreground mt-2">
                  Have a project in mind? Let&apos;s discuss how we can work together to bring your vision to life.
                </p>
              </CardHeader>
              <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="h-12 border-0 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-700 transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="h-12 border-0 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-700 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-sm font-medium">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What&apos;s this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="h-12 border-0 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-700 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, question, or just say hello..."
                      className="min-h-[140px] border-0 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-700 transition-all resize-none"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-8"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center sm:text-left">
                      * Required fields. I typically respond within 24 hours.
                    </p>
                  </div>
                </form>
              )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services & Expertise */}
        <div className="mt-20 text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text mb-4">
              What I Can Help You With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, I&apos;ll help you build scalable, modern solutions that drive results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-indigo-50/50 dark:from-slate-800 dark:to-indigo-950/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Full-Stack Development</h3>
                <p className="text-sm text-muted-foreground">Modern web applications with React, Next.js, Node.js, and cloud deployment</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50/50 dark:from-slate-800 dark:to-purple-950/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Cloud Architecture</h3>
                <p className="text-sm text-muted-foreground">Scalable cloud solutions with AWS, Azure, and modern DevOps practices</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-green-50/50 dark:from-slate-800 dark:to-green-950/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Technical Consulting</h3>
                <p className="text-sm text-muted-foreground">Strategic guidance on technology choices, architecture, and best practices</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
