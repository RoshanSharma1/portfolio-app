"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from "lucide-react";

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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rossharma1@gmail.com",
      href: "mailto:rossharma1@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "773-786-6473",
      href: "tel:+17737866473"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Seattle, WA, USA",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rossharma1",
      href: "https://linkedin.com/in/rossharma1"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/RoshanSharma1",
      href: "https://github.com/RoshanSharma1"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I&apos;m always interested in discussing new opportunities, collaborations, or just having a chat about technology. 
          Feel free to reach out through any of the channels below or send me a message directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
              Contact Information
            </h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="gradient-card hover-lift">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                          {info.href ? (
                            <a 
                              href={info.href} 
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-foreground hover:text-indigo-600 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Quick Stats */}
          <Card className="gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">3.5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">1</div>
                  <div className="text-sm text-muted-foreground">Research Publication</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">24h</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Availability */}
          <Card className="gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                Current Availability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Available for Projects
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently open to new opportunities, freelance projects, and consulting work. 
                Particularly interested in full-stack development, cloud architecture, and research collaborations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <Card className="gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                Send a Message
              </CardTitle>
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What&apos;s this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, question, or just say hello..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
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
                  
                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. I typically respond within 24 hours.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 text-center">
        <Card className="gradient-card max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4 text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you&apos;re looking for a full-stack developer, need help with cloud architecture, 
              or want to discuss research opportunities, I&apos;m here to help. I bring expertise in 
              modern web technologies, distributed systems, and a passion for solving complex problems.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">Full-Stack Development</Badge>
              <Badge variant="outline">Cloud Architecture</Badge>
              <Badge variant="outline">Research Collaboration</Badge>
              <Badge variant="outline">Technical Consulting</Badge>
              <Badge variant="outline">Code Review</Badge>
              <Badge variant="outline">Mentoring</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
